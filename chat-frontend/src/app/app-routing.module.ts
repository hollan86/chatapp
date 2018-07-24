import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
//ROUTE GUARDS
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent,canActivate:[AuthGuard] },
  { path: 'panel', component: PanelComponent,canActivate:[AuthGuard] },
  { path: 'messages-chat', component: ChatPanelComponent,canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
