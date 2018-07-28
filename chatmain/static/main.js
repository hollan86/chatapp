(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/components/panel/panel.component.ts");
/* harmony import */ var _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-panel/chat-panel.component */ "./src/app/components/chat-panel/chat-panel.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//ROUTE GUARDS

var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'panel', component: _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'messages-chat', component: _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_5__["ChatPanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ html, body {\n    /* position: fixed; */\n    height: 100%;\n    width: 100%;\n    padding-top: 80px;\n    /* background-image: url(\"http://backgroundcheckall.com/wp-content/uploads/2017/12/chat-background-2.jpg\"); */\n    /*background-image: url(\"http://www.criteriontactical.com/wp-content/uploads/2012/12/textures-backgrounds-cool-9768411.jpg\");*/\n    /* background-color: white; */\n}\n\n\n\n.float-bottom {\n    position: absolute;\n    display: inline-block;\n    bottom: 30px;\n    left: 30px;\n    -webkit-transform: translate(50%, 50%);\n            transform: translate(50%, 50%);\n}\n\n\n\nbody {\n    font-family: \"Lato\", sans-serif;\n}\n\n\n\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #8cd3ff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 60px;\n}\n\n\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: white;\n    display: block;\n    transition: 0.3s;\n}\n\n\n\n.sidenav a:hover {\n    color: black;\n}\n\n\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 45px;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n\n\n#main {\n    transition: margin-left .5s;\n    padding: 16px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n    <div class=\"float-bottom\">\n        <button type=\"button\" (click) =\"onLogoutClick($event)\" class=\"btn btn-primary\">Primary</button>\n    </div>\n    \n  </div> -->\n\n<app-navbar></app-navbar>\n<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a [routerLink]=\"['/messages']\">Messages</a>\n    <!-- <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a> -->\n    <div class=\"float-bottom\">\n        <button type=\"button\" (click) =\"onLogoutClick($event)\" class=\"btn btn-primary\">Logout</button>\n    </div>\n    \n  </div>\n<div class=\"container\">\n    <!-- <div class=\"row\">\n        <div class=\"center-align\">\n                <form>\n                        <div class=\"input-field\">\n                          <input (keyup)=\"onTyping(sval.value)\" id=\"search\" type=\"search\" required #sval>\n                          <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                          <i class=\"material-icons\">close</i>\n                        </div>\n                    </form>\n        </div>\n    </div> -->\n    <!-- <div *ngIf=\"authService.loggedIn()\" class=\"row\">\n            <div class=\"col s12\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <i class=\"material-icons prefix\">search</i>\n                  <input (keyup)=\"onTyping(sval.value)\" #sval type=\"text\" id=\"autocomplete-input\" class=\"autocomplete\">\n                  <label for=\"autocomplete-input\">Search</label>\n                </div>\n              </div>\n            </div>\n          </div> -->\n    <router-outlet id=\"main\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as $ from 'jquery';
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
        this.users = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // $(document).ready(function(){
        //   $('input.autocomplete').autocomplete({
        //     data: {
        //       "Apple": null,
        //       "Microsoft": null,
        //       "Google": 'https://placehold.it/250x250'
        //     },
        //   });
        // });
    };
    // onTyping(val){
    //   this.authService.search(val).subscribe(
    //     data => {
    //       // console.log(data)
    //       this.users = <Object>data;
    //       console.log('USERS: ',this.users)
    //     },
    //     error => {
    //       alert('Error: '+error);
    //     }
    //   )
    // }
    AppComponent.prototype.onLogoutClick = function (e) {
        e.preventDefault();
        // console.log('logout clicked!!!!');
        // $('.sidenav').sidenav('close');
        this.authService.logout();
        this.router.navigate(['/']);
        this.closeNav();
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_messages_messages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/messages/messages.module */ "./src/app/components/messages/messages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/components/panel/panel.component.ts");
/* harmony import */ var _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chat-panel/chat-panel.component */ "./src/app/components/chat-panel/chat-panel.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_11__["PanelComponent"],
                _components_chat_panel_chat_panel_component__WEBPACK_IMPORTED_MODULE_12__["ChatPanelComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _components_messages_messages_module__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n    margin: auto;\n    background: #ececec;\n    width: 100%;\n}\n\nhtml, body {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-image: url(\"http://backgroundcheckall.com/wp-content/uploads/2017/12/chat-background-2.jpg\");\n    /*background-image: url(\"http://www.criteriontactical.com/wp-content/uploads/2012/12/textures-backgrounds-cool-9768411.jpg\");*/\n    background-color: white;\n}\n\n.chat-container {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 80% 20%;\n        grid-template-columns: 80% 20%;\n}\n\n.chat-header {\n    background-color: white;\n    box-shadow: 2px 2px 2px;\n}\n\n.message-input {\n    width: 100%;\n    text-align: center;\n    border-radius: 5px;\n    border: 2px solid grey;\n}\n\n.message-input:focus {\n    outline: none;\n}\n\n.message-input-container {\n    background: transparent;\n    position: fixed;\n    bottom: 10px;\n    left: calc(100%/4);\n    right: calc(100%/4);\n    /*box-shadow: 2px 2px 2px;*/\n    clear: both;\n}\n\n.messages {\n    overflow: auto;\n    position: fixed;\n    top:50px;\n    bottom: 30px;\n    left: calc(100%/6);\n    right: calc(100%/6);\n    list-style: none;\n}\n\n#message_template {\n    display: none;\n}\n\n.messages .message {\n    clear: both;\n    overflow: hidden;\n    margin-bottom: 20px;\n    transition: all 0.5s linear;\n    opacity: 0;\n  }\n\n.messages .message.left .avatar {\n    background-color: #00B4A0;;\n    background-size: 60px 60px;\n\n    float: left;\n  }\n\n.messages .message.left .text_wrapper {\n    background-color: #00B4A0;\n    margin-left: 20px;\n    /*border-top-right-radius: 9px;\n    border-bottom-right-radius: 50px;*/\n  }\n\n.messages .message.left .text_wrapper::after, .messages .message.left .text_wrapper::before {\n  right: 100%;\n  border-right-color: #00B4A0;\n  }\n\n.messages .message.left .text {\n    color: #fff;\n  }\n\n.messages .message.right .avatar {\n    background-color: #cf2a2a;\n    background-size: 60px 60px;\n    /*background-image: url(\"images/indiabot_head.png\");*/\n    float: right;\n  }\n\n.messages .message.right .text_wrapper {\n    background-color: #cf2a2a;\n    margin-right: 20px;\n    float: right;\n    /*border-top-left-radius: 9px;\n    border-bottom-left-radius: 50px;*/\n  }\n\n.messages .message.right .text_wrapper::after, .messages .message.right .text_wrapper::before {\n    left: 100%;\n    border-left-color: #cf2a2a;\n  }\n\n.messages .message.right .text {\n    color: #282827;\n  }\n\n.messages .message.appeared {\n    opacity: 1;\n  }\n\n.messages .message .avatar {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n.messages .message .text_wrapper {\n    display: inline-block;\n    padding: 20px;\n    border-radius: 6px;\n    width: calc(100%/3);\n    min-width: 100px;\n    position: relative;\n  }\n\n.messages .message .text_wrapper::after, .messages .message .text_wrapper:before {\n    top: 18px;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n\n.messages .message .text_wrapper::after {\n    border-width: 13px;\n    margin-top: 0px;\n  }\n\n.messages .message .text_wrapper::before {\n    border-width: 15px;\n    margin-top: -2px;\n  }\n\n.messages .message .text_wrapper .text {\n    font-size: 16px;\n    font-weight: 300;\n    word-wrap: break-word;\n  }\n"

/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\n    <ul id=\"msg-list\" class=\"messages\">\n            \n    </ul>\n    <div class=\"message-input-container\">\n            <input id=\"inputbox\" type=\"text\" class=\"message-input\" autocomplete=\"off\">\n    </div>\n    <div id=\"message_template\">\n            <li>\n                <div class=\"avatar\">\n                </div>\n                <div class=\"text_wrapper\">\n                    <div class=\"text\"></div>\n                </div>\n            </li>\n    </div>\n         \n</div>"

/***/ }),

/***/ "./src/app/components/chat-panel/chat-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-panel/chat-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPanelComponent", function() { return ChatPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPanelComponent = /** @class */ (function () {
    function ChatPanelComponent() {
    }
    ChatPanelComponent.prototype.ngOnInit = function () {
        this.initchat();
    };
    ChatPanelComponent.prototype.initchat = function () {
        this.setupChatListeners();
        this.setupSocket();
    };
    ChatPanelComponent.prototype.setupSocket = function () {
        var username = 'h2o/';
        var loc = window.location;
        var wsStart = 'ws://';
        if (loc.protocol == 'https:') {
            wsStart == 'wss://';
        }
        var endpoint = wsStart + loc.host + loc.pathname + username;
        console.log(endpoint);
        var socket = new WebSocket(endpoint);
        socket.onmessage = function (e) {
            console.log('message', e);
        };
        socket.onopen = function (e) {
            console.log('open', e);
        };
        socket.onerror = function (e) {
            console.log('error', e);
        };
        socket.onclose = function (e) {
            console.log('close', e);
        };
    };
    ChatPanelComponent.prototype.setupChatListeners = function () {
        var inputbox = document.getElementById('inputbox');
        //let messages = document.getElementsByClassName('messages');
        inputbox.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                if (this.value != '') {
                    console.log(this.value);
                    var lin = document.getElementById('message_template').childNodes;
                    var li = lin[0].cloneNode(true);
                    //adding classname
                    var myArray = ["message left appeared", "message right appeared"];
                    var name_1 = myArray[Math.floor(Math.random() * myArray.length)];
                    li.className = name_1;
                    li.childNodes[1].childNodes[0].appendChild(document.createTextNode(this.value));
                    document.getElementById("msg-list").appendChild(li);
                    //scrolling the end of the list
                    document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
                    inputbox.value = '';
                }
            }
        });
    };
    ChatPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-panel',
            template: __webpack_require__(/*! ./chat-panel.component.html */ "./src/app/components/chat-panel/chat-panel.component.html"),
            styles: [__webpack_require__(/*! ./chat-panel.component.css */ "./src/app/components/chat-panel/chat-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatPanelComponent);
    return ChatPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h4>Welcome!</h4>\n  <a *ngIf=\"!authService.loggedIn()\" class=\"badge badge-primary\" [routerLink]=\"['/login']\">Login</a>\n  <a *ngIf=\"authService.loggedIn()\" class=\"badge badge-primary\" [routerLink]=\"['/panel']\">Panel</a>\n  <br>\n  <small>Messaging service v1.0.0</small>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  @media only screen and (min-width: 600px){\n    .login-center {\n      width: 40%;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      -webkit-transform: translate(-50%,-50%);\n              transform: translate(-50%,-50%);\n      /*border: 1px dashed deeppink;*/\n    }\n  }\n\n  @media only screen and (max-width: 600px){\n    .login-center {\n      width: 70%;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      -webkit-transform: translate(-50%,-50%);\n              transform: translate(-50%,-50%);\n      /*border: 1px dashed deeppink;*/\n    }\n  }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-center\">\n    <!-- <div class=\"row\">\n        <form class=\"col s12\" (submit)=\"onSubmitCreds()\">\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                  <input name=\"username\" [(ngModel)]=\"username\"  id=\"username\" type=\"text\" class=\"validate\">\n                  <label for=\"username\">Username</label>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input name=\"password\" [(ngModel)]=\"password\" id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12\">\n                <button class=\"btn waves-effect waves-light right\" type=\"submit\" name=\"action\">Submit\n                    <i class=\"material-icons right\">send</i>\n                  </button>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col s12\">\n                    <a href=\"#\" class=\"left\">Forgot password</a> | <a [routerLink]=\"['/register']\">Register</a>\n              </div>\n          </div>\n        </form>\n    </div> -->\n    <form (submit)=\"onSubmitCreds()\">\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Username</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" name=\"username\" [(ngModel)]=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" name=\"password\" [(ngModel)]=\"password\">\n            </div>\n            <div class=\"form-group\">\n                    <a href=\"#\" class=\"float-left\">Forgot password</a> | <a [routerLink]=\"['/register']\">Register</a>\n                    <div class=\"float-right\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n            </div>\n            \n            \n    </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.modal').modal();
        });
    };
    LoginComponent.prototype.onSubmitCreds = function () {
        var _this = this;
        var creds = {
            "username": this.username,
            "password": this.password
        };
        this.authService.authUser(creds).subscribe(function (data) {
            console.log(data);
            _this.authService.storeUserData(data.token, data.user);
            if (_this.authService.redirectUrl) {
                _this.router.navigate([_this.authService.redirectUrl]);
                _this.authService.redirectUrl = undefined;
            }
            else {
                _this.router.navigate(['panel']);
            }
        }, function (error) {
            if (error.hasOwnProperty('non_field_errors')) {
                alert('Rejected: ' + error.non_field_errors.join());
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/message-chat/message-chat.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/messages/message-chat/message-chat.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.messages {\n  overflow-y: auto;\n  /* position: fixed;\n  top:50px;\n  bottom: 30px;\n  left: calc(100%/6);\n  right: calc(100%/6); */\n  list-style: none;\n}\n#message_template {\n  display: none;\n}\n.flex {\n  display: flex;\n  /* flex-wrap: wrap; */\n  /* min-height: 100vh; */\n}\n.flex > div {\n  /* flex: 1; */\n}\n.chat-container {\n  /* min-height: 100vh; */\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 80vh;\n  max-height: 80vh;\n}\n.chat-container .messages {\n  /* margin-top: auto; */\n}\n.col-cts {\n  /* flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 30%; */\n  flex: 1 0 auto;\n  word-wrap: break-word ;\n  width: 30%;\n}\n.col-chat {\n  /* flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 70%; */\n  flex: 1 0 auto;\n  word-wrap: break-word ;\n  width: 70%;\n}\n.chat-container .message-input-container {\n  /* margin-top: auto; */\n}\n.messages {\n  flex-grow: 1;\n  /* display: flex;\n  flex-direction: column; */\n}\n.messages .message.right-align .text_wrapper{\n  background-color: #00B4A0;\n}\n.messages .message.left-align .text_wrapper{\n  background-color: rgb(170, 219, 213);\n}\n.messages .message.left-align .text_wrapper .text{\n  word-wrap: break-word;\n}\n.messages .message.right-align .text_wrapper .text{\n  word-wrap: break-word;\n}\n.messages .message .text_wrapper {\n  /* background-color: blue; */\n  display: inline-block;\n  padding: 10px;\n  border-radius: 30px;\n  max-width: 40%;\n  /* min-width: 100px; */\n}\n.message {\n  margin:0 0 6px 0;  \n}\n.message-input {\n  text-align: center;\n  width: 100%;\n  outline: none;\n  border: 0px;\n  border-bottom: 1px rgb(101, 206, 127) solid;\n}\n.left-align {\n  text-align: left;\n}\n.right-align {\n  text-align: right;\n}"

/***/ }),

/***/ "./src/app/components/messages/message-chat/message-chat.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/messages/message-chat/message-chat.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n    \n          <div class=\"col-cts\"> <!-- Note that \"m4 l3\" was added -->\n       <ul>\n         <li *ngFor=\"let contact of contacts$ | async\"><a [routerLink]=\"['/message', contact.id]\">{{contact.name}}</a></li>\n       </ul>\n\n          </div>\n    \n          <div class=\"col-chat\"> <!-- Note that \"m8 l9\" was added -->\n            <!-- <p>Chat to be added here</p> -->\n            <div class=\"chat-container\">\n                <ul id=\"msg-list\" class=\"messages\">\n                        \n                </ul>\n                <div class=\"message-input-container\">\n                        <input id=\"inputbox\" type=\"text\" class=\"message-input\" autocomplete=\"off\">\n                </div>\n                <div id=\"message_template\">\n                        <li>\n                            <div class=\"avatar\">\n                            </div>\n                            <div class=\"text_wrapper\">\n                                <div class=\"text\"></div>\n                            </div>\n                        </li>\n                </div>\n                     \n            </div>\n          </div>\n    \n        </div>\n"

/***/ }),

/***/ "./src/app/components/messages/message-chat/message-chat.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/messages/message-chat/message-chat.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessageChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChatComponent", function() { return MessageChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/components/messages/message.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageChatComponent = /** @class */ (function () {
    function MessageChatComponent(authService, route, router, service) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.service = service;
    }
    MessageChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        //to is mine!
        this.route.params.subscribe(function (params) {
            console.log('Route changed!....');
            if (_this.chatsocket != undefined) {
                console.log('CLOSING CHAT SOCKET');
                location.reload(true);
                _this.chatsocket.close();
            }
            document.getElementById("msg-list").innerHTML = "";
            // this.contacts$ = this.service.getContacts();
            _this.contacts$ = _this.service.getChats();
            _this.contact$ = _this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
                return _this.service.getContact(params.get('id'));
            }));
            _this.initchat();
        });
    };
    MessageChatComponent.prototype.ngDoCheck = function () {
        if (!this.authService.loggedIn()) {
            alert('Your session has expired');
            this.router.navigate(['login']);
        }
    };
    MessageChatComponent.prototype.initchat = function () {
        this.setupChatListeners(this.setupSocket());
        // this.setupSocket();
    };
    MessageChatComponent.prototype.setupSocket = function () {
        var loc = window.location;
        var wsStart = 'ws://';
        console.log('CHAT PROTO', window.location.protocol);
        if (loc.protocol == 'https:') {
            wsStart = 'wss://';
        }
        var endpoint = wsStart + loc.host + loc.pathname + '?' + localStorage.getItem('id_token');
        console.log(endpoint);
        // this.chatsocket = new WebSocket(endpoint)
        this.chatsocket = new ReconnectingWebSocket(endpoint);
        // var socket = 
        this.chatsocket.onmessage = function (e) {
            if (JSON.parse(e.data).hasOwnProperty("init")) {
                console.log(JSON.parse(e.data).init);
                for (var i = 0; i < JSON.parse(e.data).init.length; i++) {
                    var lin = document.getElementById('message_template').childNodes;
                    var li = lin[0].cloneNode(true);
                    li.className = JSON.parse(e.data).init[i].hasOwnProperty("me") ? "message right-align" : "message left-align";
                    var msg_ = JSON.parse(e.data).init[i].hasOwnProperty("me") ? JSON.parse(e.data).init[i].me : JSON.parse(e.data).init[i].other;
                    // li.className = 'message left-align'
                    li.childNodes[1].childNodes[0].appendChild(document.createTextNode(msg_));
                    document.getElementById("msg-list").appendChild(li);
                    //scrolling the end of the list
                    document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
                }
            }
            else {
                console.log('message', e.data);
                if (JSON.parse(e.data).user != JSON.parse(localStorage.getItem('user')).username || JSON.parse(e.data).user == 'bot') {
                    var lin = document.getElementById('message_template').childNodes;
                    var li = lin[0].cloneNode(true);
                    li.className = 'message left-align';
                    li.childNodes[1].childNodes[0].appendChild(document.createTextNode(JSON.parse(e.data).msg));
                    document.getElementById("msg-list").appendChild(li);
                    //scrolling the end of the list
                    document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
                }
            }
        };
        this.chatsocket.onopen = function (e) {
            console.log('open', e);
        };
        this.chatsocket.onerror = function (e) {
            console.log('error', e);
        };
        this.chatsocket.onclose = function (e) {
            console.log('close', e);
        };
        return this.chatsocket;
    };
    MessageChatComponent.prototype.setupChatListeners = function (sock) {
        // const socket = sock;
        var inputbox = document.getElementById('inputbox');
        //let messages = document.getElementsByClassName('messages');
        inputbox.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                if (this.value != '') {
                    // console.log(this.value);
                    var msg = {
                        "msg": this.value,
                        "user": JSON.parse(localStorage.getItem('user')).username
                    };
                    sock.send(JSON.stringify(msg));
                    var lin = document.getElementById('message_template').childNodes;
                    var li = lin[0].cloneNode(true);
                    //adding classname
                    var myArray = ["message left-align", "message right-align"];
                    // let name = myArray[Math.floor(Math.random() * myArray.length)];
                    var name_1 = 'message right-align';
                    li.className = name_1;
                    li.childNodes[1].childNodes[0].appendChild(document.createTextNode(this.value));
                    document.getElementById("msg-list").appendChild(li);
                    //scrolling the end of the list
                    document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
                    inputbox.value = '';
                }
            }
        });
    };
    MessageChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-chat',
            template: __webpack_require__(/*! ./message-chat.component.html */ "./src/app/components/messages/message-chat/message-chat.component.html"),
            styles: [__webpack_require__(/*! ./message-chat.component.css */ "./src/app/components/messages/message-chat/message-chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], MessageChatComponent);
    return MessageChatComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/message.service.ts":
/*!********************************************************!*\
  !*** ./src/app/components/messages/message.service.ts ***!
  \********************************************************/
/*! exports provided: Contact, MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Contact = /** @class */ (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contact;
}());

var CONTACTS = [
    new Contact(7, 'user7'),
    new Contact(2, 'user1'),
    new Contact(3, 'user3'),
    new Contact(4, 'user4'),
    new Contact(5, 'user5'),
    new Contact(6, 'user6')
];
var MessageService = /** @class */ (function () {
    function MessageService(authservice) {
        this.authservice = authservice;
    }
    MessageService.prototype.getContacts = function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(CONTACTS); };
    MessageService.prototype.getContact = function (id) {
        return this.getContacts().pipe(
        // (+) before `id` turns the string into a number
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (contacts) { return contacts.find(function (contact) { return contact.id === +id; }); }));
    };
    MessageService.prototype.getChats = function () {
        return this.authservice.getChats();
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/components/messages/messages-panel/messages-panel.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/messages/messages-panel/messages-panel.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/messages/messages-panel/messages-panel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/messages/messages-panel/messages-panel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n        <div class=\"col s12 m4 l3\"> <!-- Note that \"m4 l3\" was added -->\n          <div *ngIf=\"ctcheck\" class=\"alert alert-dismissible alert-primary\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              <strong>Oh snap! No recent chats!</strong> Search for someone to chat with!\n          </div>\n       <ul>\n         <li *ngFor=\"let contact of contacts$ | async\"><a [routerLink]=\"['/message', contact.id]\">{{contact.name}}</a></li>\n       </ul>\n\n          </div>\n    \n          <div class=\"col s12 m8 l9\"> <!-- Note that \"m8 l9\" was added -->\n            <!-- <app-message-chat></app-message-chat> -->\n            <router-outlet></router-outlet>\n    \n          </div>\n    \n        </div>\n"

/***/ }),

/***/ "./src/app/components/messages/messages-panel/messages-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/messages/messages-panel/messages-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: MessagesPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPanelComponent", function() { return MessagesPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/components/messages/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesPanelComponent = /** @class */ (function () {
    // contacts = ['user1','user2','user3','user4','user5']
    function MessagesPanelComponent(service, route) {
        this.service = service;
        this.route = route;
        this.ctcheck = false;
    }
    MessagesPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contacts$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            // (+) before `params.get()` turns the string into a number
            _this.selectedId = +params.get('id');
            // return this.service.getContacts();
            return _this.service.getChats();
        }));
        this.contacts$.subscribe(function (data) {
            if (data.length == 0) {
                _this.ctcheck = true;
            }
            else {
                _this.ctcheck == false;
            }
        });
    };
    MessagesPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages-panel',
            template: __webpack_require__(/*! ./messages-panel.component.html */ "./src/app/components/messages/messages-panel/messages-panel.component.html"),
            styles: [__webpack_require__(/*! ./messages-panel.component.css */ "./src/app/components/messages/messages-panel/messages-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MessagesPanelComponent);
    return MessagesPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/messages/messages-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MessagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesRoutingModule", function() { return MessagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_chat_message_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-chat/message-chat.component */ "./src/app/components/messages/message-chat/message-chat.component.ts");
/* harmony import */ var _messages_panel_messages_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages-panel/messages-panel.component */ "./src/app/components/messages/messages-panel/messages-panel.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var messagesRoutes = [
    { path: 'messages', component: _messages_panel_messages_panel_component__WEBPACK_IMPORTED_MODULE_3__["MessagesPanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'message/:id', component: _message_chat_message_chat_component__WEBPACK_IMPORTED_MODULE_2__["MessageChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var MessagesRoutingModule = /** @class */ (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(messagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/messages/messages.module.ts ***!
  \********************************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/components/messages/messages-routing.module.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/components/messages/message.service.ts");
/* harmony import */ var _messages_panel_messages_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages-panel/messages-panel.component */ "./src/app/components/messages/messages-panel/messages-panel.component.ts");
/* harmony import */ var _message_chat_message_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-chat/message-chat.component */ "./src/app/components/messages/message-chat/message-chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessagesRoutingModule"]
            ],
            declarations: [_messages_panel_messages_panel_component__WEBPACK_IMPORTED_MODULE_4__["MessagesPanelComponent"], _message_chat_message_chat_component__WEBPACK_IMPORTED_MODULE_5__["MessageChatComponent"]],
            providers: [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"navbar-fixed\">\n  <nav class=\"#26a69a teal lighten-1\">\n      <div class=\"nav-wrapper\">\n          \n          <a *ngIf=\"authService.loggedIn()\" href=\"#!\" data-target=\"slide-out\" class=\"sidenav-trigger show-on-large left\"><i class=\"material-icons\">menu</i>Logo</a>\n          <ul>\n           \n            <li *ngIf=\"authService.loggedIn()\">\n                <form autocomplete=\"off\" (submit)=\"onSubmit(sval.value);sval.value=''\">\n                    <div class=\"input-field\">\n                      \n                      <input (keyup)=\"onTyping(sval.value)\" id=\"search\" type=\"search\" required #sval class=\"autocomplete\">\n                      <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                      <i class=\"material-icons\">close</i>\n                    </div>\n                </form>\n            </li>\n            <li><a href=\"#!\" class=\"brand-logo right\">Logo</a></li>\n          </ul>\n      </div>      \n  </nav>\n</div> -->\n<!-- <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger left\"><i class=\"material-icons black-text\">menu</i></a>  -->\n\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light shadow\">\n        <span *ngIf=\"authService.loggedIn()\" style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776;</span>\n        <a class=\"navbar-brand\" href=\"#\">MessGIN</a>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/panel']\">Panel</a>\n                </li>\n                <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/messages']\">Messages</a>\n                </li>\n              </ul>\n          <form *ngIf=\"authService.loggedIn()\" class=\"form-inline my-2 my-lg-0\" (submit)=\"onSubmit(sval.value);sval.value=''\">\n            <input #sval class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n          </form>\n        </div>\n      </nav>\n<!-- <app-sidebar></app-sidebar> -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.sdata = {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // $(document).ready(function(){
        //   $('input#search').autocomplete({
        //     data: this.sdata,
        //   });
        // });
        // document.addEventListener('DOMContentLoaded', function() {
        //   var elems = document.querySelectorAll('.autocomplete');
        //   var instances = M.Autocomplete.init(elems, {data:this.sdata,limit:3});
        // });
    };
    NavbarComponent.prototype.onTyping = function (val) {
        var _this = this;
        this.authService.search(val).subscribe(function (data) {
            // console.log(data)
            var fd = {};
            _this.users = data;
            console.log('USERS: ', _this.users);
            //CONFIGURING AUTO-COMPLETE
            /*
            this.users.forEach(element => {
              Object.defineProperty(this.sdata, element.username, {
                value: null,
                enumerable: true,
                configurable:true
              });
            });
            // $('.autocomplete').autocomplete('updateData', fd);
            // this.sdata = fd;
            let elem = document.querySelector('.autocomplete')
            var instance = M.Autocomplete.getInstance(elem);
            instance.updateData(this.sdata);
            console.log(instance)
            console.log(Object.keys(this.sdata));
            // this.sdata = Object.assign(this.sdata,instance.options.data)
            console.log(Object.keys(this.sdata));
            */
        }, function (error) {
            alert('Error: ' + error);
        });
    };
    NavbarComponent.prototype.onSubmit = function (val) {
        // alert('Submited: '+ val)
        // this.authService.search(val).subscribe(
        //   data => {
        //     this.router.navigate(['search'],{ queryParams: { data: this.users } });
        //   },
        //   error => {
        //   }
        // );
        this.router.navigate(['search'], { queryParams: { data: val } });
    };
    NavbarComponent.prototype.openNav = function () {
        console.log(document.getElementById("mySidenav"));
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/panel/panel.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/panel/panel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/panel/panel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/panel/panel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  panel works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/panel/panel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/panel/panel.component.ts ***!
  \*****************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/components/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/components/register/password-validation.ts":
/*!************************************************************!*\
  !*** ./src/app/components/register/password-validation.ts ***!
  \************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('passwordrepeat').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('passwordrepeat').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 600px){\n    .login-center {\n      width: 40%;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      -webkit-transform: translate(-50%,-50%);\n              transform: translate(-50%,-50%);\n      /*border: 1px dashed deeppink;*/\n    }\n  }\n\n  @media only screen and (max-width: 600px){\n    .login-center {\n      width: 70%;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      -webkit-transform: translate(-50%,-50%);\n              transform: translate(-50%,-50%);\n      /*border: 1px dashed deeppink;*/\n    }\n  }"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-center\">\n    <!-- <div class=\"row\">\n        <form id=\"formValidate\" class=\"col s12\" (submit)=\"onSubmitCreds()\" [formGroup]=\"form\">\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                  <input formControlName=\"username\" [(ngModel)]=\"username\"  id=\"username\" type=\"text\" class=\"validate\"\n                  [formGroup]=\"form\">\n                  <label for=\"username\">Username</label>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"password\" type=\"password\" class=\"validate\"\n                [(ngModel)]=\"password\" formControlName=\"password\" [formGroup]=\"form\">\n                <label for=\"password\">Password</label>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"p_repeat\" type=\"password\" class=\"validate\"\n                [(ngModel)]=\"passwordrepeat\" formControlName=\"passwordrepeat\" [formGroup]=\"form\">\n                <label for=\"p_repeat\">Repeat</label>\n                <div class=\"#e53935 red darken-1 white-text\" *ngIf=\"form.controls.passwordrepeat.errors?.MatchPassword\">Password not match</div>\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12\">\n                <button [disabled]=\"form.invalid\" class=\"btn waves-effect waves-light right\" type=\"submit\" name=\"action\">Submit\n                    <i class=\"material-icons right\">send</i>\n                  </button>\n            </div>\n          </div>\n        </form>\n    </div> -->\n    <form (submit)=\"onSubmitCreds()\" [formGroup]=\"form\">\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Username</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"username\" [(ngModel)]=\"username\" [formGroup]=\"form\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"password\" [formGroup]=\"form\" [(ngModel)]=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Repeat</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"passwordrepeat\" formControlName=\"passwordrepeat\" [formGroup]=\"form\">\n                <div class=\"bg-danger\" *ngIf=\"form.controls.passwordrepeat.errors?.MatchPassword\">Password not match</div>\n            </div>\n            <div class=\"form-group\">\n                    <div class=\"float-right\">\n                        <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n            </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-validation */ "./src/app/components/register/password-validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = fb.group({
            // define your control in you form
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordrepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_1__["PasswordValidation"].MatchPassword // your validation method
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
    };
    RegisterComponent.prototype.onSubmitCreds = function () {
        var _this = this;
        var creds = {
            "username": this.username,
            "password": this.password
        };
        this.authService.register(creds).subscribe(function (data) {
            console.log(data);
            alert('Account created!');
            _this.router.navigate(['login']);
        }, function (error) {
            console.log(error);
            if (error.hasOwnProperty('password')) {
                alert('Password rejected: ' + error.password.join());
            }
            else if (error.hasOwnProperty('username')) {
                alert('Username rejected: ' + error.username.join());
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results-list {\n    list-style: none;\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Search Results</h4>\n<ul class=\"list-group\">\n    <!-- <li>{{r.username}}</li> -->\n    <li *ngFor=\"let r of data\" class=\"list-group-item\">\n      <div class=\"row\">\n          <div class=\"col-1\"><i class=\"fa fa-user\"></i></div>\n          <div class=\"col-11\">\n              <span class=\"title\">{{r.username}}</span>\n              <br>\n              <a [routerLink]=\"['/message', r.pk]\">Message</a>\n          </div>\n      </div>   \n      </li>\n  </ul>\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        /*this.route
        .queryParams
        .subscribe(params => {
          // Defaults to 0 if no query param provided.
          //this.page = +params['page'] || 0;
          // console.log(JSON.parse(params['data']));
    
        });*/
        var _this = this;
        this.route.queryParamMap.pipe().subscribe(function (data) {
            console.log(data['params'].data);
            _this.authService.search(data['params'].data).subscribe(function (results) {
                _this.data = results;
                console.log('FETCHED DATA ...', results);
            });
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-bottom {\n    position: fixed;\n    display: inline-block;\n    bottom: 60px;\n    left:50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slide-out\" class=\"sidenav\">\n    <ul >\n        <li><div class=\"user-view\">\n          <div class=\"background\">\n            <img src=\"images/office.jpg\">\n          </div>\n          <a href=\"#user\"><img class=\"circle\" src=\"images/yuna.jpg\"></a>\n          <a href=\"#name\"><span class=\"white-text name\">John Doe</span></a>\n          <a href=\"#email\"><span class=\"white-text email\">jdandturk@gmail.com</span></a>\n        </div></li>\n        <li><a href=\"#!\"><i class=\"material-icons\">cloud</i>First Link With Icon</a></li>\n        <li><a href=\"#!\">Second Link</a></li>\n        <li><div class=\"divider\"></div></li>\n        <li><a class=\"subheader\">Subheader</a></li>\n        <li><a class=\"waves-effect\" href=\"#!\">Third Link With Waves</a></li>\n        \n      </ul>\n      <div class=\"float-bottom\">\n          <a href=\"#logout\"  (click) =\"onLogoutClick($event)\" class=\"waves-effect waves-light btn-small\">Logout</a>\n      </div>\n</div>\n\n<!-- <div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n    <div class=\"float-bottom\">\n        <button type=\"button\" (click) =\"onLogoutClick($event)\" class=\"btn btn-primary\">Primary</button>\n    </div>\n    \n  </div> -->\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    };
    SidebarComponent.prototype.onLogoutClick = function (e) {
        e.preventDefault();
        // console.log('logout clicked!!!!');
        $('.sidenav').sidenav('close');
        this.authService.logout();
        this.router.navigate(['/']);
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        console.log('AUTH-LOGIN-STATE: ', this.authService.loggedIn());
        if (this.authService.loggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // if(window.location.protocol == 'http://'){
        //   this.isDev = true;
        // }
        // else{
        //   this.isDev = false;
        // }
        this.isDev = true;
    }
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //return tokenNotExpired();
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.loadToken();
        if (helper.isTokenExpired(this.authToken)) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.authUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var ep = this.prepEndpoint('api/auth/login/');
        return this.http.post(ep, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('fetched data...'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('authUser', [])));
    };
    AuthService.prototype.register = function (creds) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var ep = this.prepEndpoint('auth/users/create/');
        return this.http.post(ep, creds, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHTTPError));
    };
    AuthService.prototype.search = function (keys) {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.authToken
            })
        };
        var ep = this.prepEndpoint('chat-main/users/?username=' + keys);
        return this.http.get(ep, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHTTPError));
    };
    AuthService.prototype.getChats = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.authToken
            })
        };
        var ep = this.prepEndpoint('chat-main/chats/');
        return this.http.get(ep, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleHTTPError));
    };
    AuthService.prototype.handleHTTPError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            // return of(result as T);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
        };
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            console.log('DEV TRUE');
            return ep;
        }
        else {
            console.log('dev not true');
            return 'https://' + window.location.host + '/' + ep;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hollanhaule/Documents/chatapp/chatapp/chat-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map