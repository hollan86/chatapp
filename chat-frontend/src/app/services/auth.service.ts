import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  authToken: any;
  isDev:boolean;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  
  constructor(private http: HttpClient) {
    if(window.location.protocol == 'http://'){
      this.isDev = true;
    }
    else{
      this.isDev = false;
    }
   }
  
   storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    //return tokenNotExpired();
    const helper = new JwtHelperService();
    this.loadToken();
    
    if(helper.isTokenExpired(this.authToken)){return false}
    else{return true}

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  authUser(user){
    let httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    let ep = this.prepEndpoint('api/auth/login/');
    return this.http.post(ep, user, httpOptions)
    .pipe(
      tap(data =>console.log('fetched data...')),
      catchError(this.handleError <any>('authUser', []))
    );
  }

  register(creds){
    let httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    let ep = this.prepEndpoint('auth/users/create/');
    return this.http.post(ep, creds, httpOptions)
    .pipe(
      catchError(this.handleHTTPError)
    );
  }

  search(keys){
    this.loadToken();
    let httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+this.authToken
      })
    };
    let ep = this.prepEndpoint('chat-main/users/?username='+keys);
    return this.http.get(ep, httpOptions)
    .pipe(
      catchError(this.handleHTTPError)
    );
  }

  getChats(){
    this.loadToken();
    let httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+this.authToken
      })
    };
    let ep = this.prepEndpoint('chat-main/chats/');
    return this.http.get(ep, httpOptions)
    .pipe(
      catchError(this.handleHTTPError)
    );
  }

  private handleHTTPError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        return throwError(error.error)
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      // return of(result as T);
      return throwError(error.error)
    };
  }

  prepEndpoint(ep){
    if(this.isDev){
      console.log('DEV TRUE')
      return ep;
    } else {
      console.log('dev not true')
      return 'https://'+window.location.host+'/'+ep;
    }
  }
}
