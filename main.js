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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/lab/lab.component */ "./src/app/content/lab/lab.component.ts");
/* harmony import */ var _content_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/about/about.component */ "./src/app/content/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: '',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'lab',
        component: _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
    },
    {
        path: 'about',
        component: _content_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: '**',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    //useHash: true
                    enableTracing: false
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.module */ "./src/app/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_5__["ContentModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/about/about.component.css":
/*!***************************************************!*\
  !*** ./src/app/content/about/about.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aboutme{}\r\n\r\n#aboutme h2{\r\n    text-align: center;\r\n    margin: 0px auto 40px auto;\r\n}\r\n\r\n#aboutme h3{\r\n    font-size: 1.3em;\r\n    margin: 10px auto;\r\n}\r\n\r\n#aboutme .container{\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7O0FBRVQ7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dG1le31cclxuXHJcbiNhYm91dG1lIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byA0MHB4IGF1dG87XHJcbn1cclxuI2Fib3V0bWUgaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbiNhYm91dG1lIC5jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/content/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/content/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"aboutme\">\r\n\r\n    <bg-menu></bg-menu>\r\n  \r\n    <div class=\"container\">\r\n  \r\n        <h2>About me, <span class=\"featured\">Bruno Gaudino</span></h2>\r\n\r\n        <h3>I was born in São Paulo capital but live in metropolitan region of São Paulo in the city of Guarulhos.</h3>\r\n        <h3>I graduated in public school from elementary school to high school and also in College I studied at Fatec(Technology College of State of São Paulo) and I got the Technician's license. </h3>\r\n        <br>\r\n\r\n        <h3><span class=\"featured\">I.T area</span></h3>\r\n        <br>\r\n        <h3>I am a front-end web developer analyst, worked in companies like Ongame(the first brazilian publish games), and also Viewit Mobile a companie focused in m-commerce solutions with clients like Ricardo Eletro, E-fácil, Ponto Frio, etc.</h3>\r\n        <h3>I try to adapt the changes required in the work environment.</h3>\r\n        <h3>I am committed to developing the work, focused on achieving the goals set by the team, and willing to meet new technologies</h3>\r\n        <br>\r\n\r\n        <h3><span class=\"featured\">Education</span></h3>\r\n        <br>\r\n        <h3>I acted as coordinator of the technical course of computer of the Technical School Camargo Aranha(Etec), and professor teaching the disciplines of Programming Logic, Computerized Applications for Accounting.</h3>\r\n\r\n        <!-- social -->\r\n        <bg-social></bg-social>\r\n    \r\n    </div>\r\n  \r\n  </section>"

/***/ }),

/***/ "./src/app/content/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/content/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/content/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/content/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/content/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.component */ "./src/app/content/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_3__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"]
            ],
            exports: [
                _about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ "./src/app/content/home/home.module.ts");
/* harmony import */ var _lab_lab_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lab/lab.module */ "./src/app/content/lab/lab.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.module */ "./src/app/content/about/about.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"],
                _lab_lab_module__WEBPACK_IMPORTED_MODULE_2__["LabModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/content/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/content/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* Custom page Home\r\n  -------------------------------------------------- */\r\n  #about h3{\r\n    font-size: 1.3em;\r\n    margin: 10px auto;\r\n  }\r\n  .avatar {\r\n    padding-top: 1%;\r\n  }\r\n  .avatar .img-circle{\r\n    border: 10px solid #8fd6ff;\r\n    padding: 5px 10px 3px 10px;\r\n    margin: 0 auto;\r\n    max-width: 300px;\r\n    height: auto;\r\n  }\r\n  .avatar img{\r\n    min-width: 160px;\r\n    height: auto;\r\n    max-width: 80%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtzREFDb0Q7RUFDcEQ7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBDdXN0b20gcGFnZSBIb21lXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAjYWJvdXQgaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gIH1cclxuICBcclxuICAuYXZhdGFyIC5pbWctY2lyY2xle1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM4ZmQ2ZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAzcHggMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhciBpbWd7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/content/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\r\n\r\n  <bg-menu></bg-menu>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"avatar\">\r\n      <div class=\"img-circle\">\r\n        <img width=\"300\" src=\"assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\r\n      </div>\r\n    </div>\r\n\r\n    <h3><strong>Bruno Gaudino</strong> {{workPosition}}.</h3>\r\n    <h3><strong>Technician's license </strong> by Fatec(Technology College of State of São Paulo).</h3>\r\n    <h3>Web development with <span class=\"featured\">HTML</span>, <span class=\"featured\">CSS</span>, <span class=\"featured\">JavaScript</span>/<span class=\"featured\">jQuery</span>.</h3>\r\n    <h3>Versioning control with <span class=\"featured\">Git</span>.</h3>\r\n    <h3>Front-end performance with <span class=\"featured\">Gulp</span>.</h3>\r\n    <h3>Specialist in <span class=\"featured\">web accessibility</span>.</h3>\r\n    <h3><span class=\"featured\">Node.js</span> and <span class=\"featured\">Angular</span> frameworks.</h3>\r\n    \r\n    <!-- social -->\r\n    <bg-social></bg-social>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/content/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.workPosition = 'analyst developer web front-end';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/content/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/content/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/content/lab/lab.component.html":
/*!************************************************!*\
  !*** ./src/app/content/lab/lab.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"lab\">\r\n\r\n  <bg-menu></bg-menu>\r\n\r\n    <div class=\"container\">\r\n          <h3>Lab</h3>\r\n          <section id=\"labProjects\">\r\n                          <article>\r\n      <!--  PROJETOS/CURSOS  -->\r\n              <h2>Course projects <span>Projects developed during Alura courses</span> </h2>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a></strong>\r\n                                      - NodeJs API development. The code is available in github and is accessible through the link <a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a></strong>\r\n                                      - Development of the home of the \"Casa do código\" website in Nodejs, as a NodeJs course project. The code is available in github and can be accessed from the Home Code link. <a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">Web application Angular</a></strong>\r\n                                      - Webapp development with <a href=\"https://angular.io/\" target=\"_blank\">angular</a>. The code is available in github and is accessible through the Webapp Angular link. <a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">webapp angular</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/website-workflow-gulp\" target=\"_blank\">Website workflow gulp</a></strong>\r\n                  - Workflow development with automatization tool <a href=\"http://gulpjs.com/\" target=\"_blank\">Gulp</a>.\r\n                                      The code is available in github and is accessible through the Website Workflow <a href=\"https://brunogaudino.github.io/website-workflow-gulp/\" target=\"_blank\">website workflow gulp</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n<!--\t\t\t\t\t\t\t\t<h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/aparecidanutricao\" target=\"_blank\">Aparecida Nutrition</a></strong>\r\n                                      - Web application development calculate body fat. A sample page can be accessed on the Aparecida nutrition link <a href=\"https://brunogaudino.github.io/aparecidanutricao/\" target=\"_blank\">Aparecida nutrition</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--<hr>-->\r\n<!--                <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/portal-news-rwd\" target=\"_blank\">News Portal Responsive</a></strong>\r\n                                      - Development a news web page responsive. A sample page can be accessed on the News Portal link <a href=\"https://brunogaudino.github.io/portal-news-rwd/\" target=\"_blank\">News Portal Responsive</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--<hr>-->\r\n<!--                <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/webpage-joao-da-silva\" target=\"_blank\">Web page João da Silva</a></strong>\r\n                                      - Development personal web page of fictional person(João da Silva) for HTML and CSS in <a href=\"http://www.alura.com.br/\">Alura course</a>. A sample page can be accessed on the João da Silva page link <a href=\"https://brunogaudino.github.io/webpage-joao-da-silva/\" target=\"_blank\">web page João da Silva</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--  PROJETOS/CURSOS  -->\r\n              <!--  PROJETOS  -->\r\n                              <h2>Projects <span>Developed projects</span></h2> \r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/developer-nodejs-project/\" target=\"_blank\">Developer nodejs project</a></strong>\r\n                                          - A project built with HTML5, CSS3, javascipt, node.js and mongodb, as a complement to the training. The code is available in github and is accessible through the link<a href = \"https://github.com/brunogaudino/developer-nodejs-project/\"target =\" _ blank \"> developer nodejs project</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <h5>\r\n                        <p>\r\n                          <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/shot-on-the-target\" target=\"_blank\">Shot on the target</a></strong>\r\n                                          - Development of a simple game with javascript in which the user needs to hit the target. This page is usually blocked by the browser for security, it is necessary to unlock to see the game by running the example page can be accessed on the link<a href = \"https://brunogaudino.github.io/shot-on-the-target/ \"target =\" _ blank \"> shot on the target </a>.\r\n                        </p>\r\n                      </h5>\r\n                      <!--<hr>-->\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/minimalist-jekyll-blog\" target=\"_blank\">Minimalist jekyll blog</a></strong>\r\n                                      - Minimalist blog development using jekyll, with posts lists, pagination, commentary with <a href=\"https://disqus.com/\" target=\"_blank\">disqus</a>, and contact form. A sample page can be accessed on the <a href=\"https://brunogaudino.github.io/minimalist-jekyll-blog/\" target=\"_blank\">minimalist jekyll blog</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <!--<hr>-->\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/framework-grid-css\" target=\"_blank\">Framework Grid CSS</a></strong>\r\n                                      - CSS framework adaptation based on grid concept, for facilitates the website interface development. A sample page can be accessed on the Framework Grid CSS. <a href=\"https://brunogaudino.github.io/framework-grid-css/\" target=\"_blank\">framework grid css</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <!--<hr>-->\r\n<!--\t\t\t\t\t\t\t\t<h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/calculate-gestation-time\" target=\"_blank\">Calculate gestation time</a></strong>\r\n                                      - Online gestation time calculator development. A sample page can be accessed on the Calculate gestation time link. <a href=\"https://brunogaudino.github.io/calculate-gestation-time/\" target=\"_blank\">Calculate Gestation Time</a>.\r\n                                  </p>\r\n                              </h5>-->\r\n                              <!--<hr>\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/my-patients\" target=\"_blank\">My patients</a></strong>\r\n                                      - Desenvolvimento de uma aplicação web que calcula o IMC e adiciona novos pacientes a uma tabela usando javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/my-patients/\" target=\"_blank\">my patients</a>.\r\n                                  </p>\r\n                              </h5>-->\r\n              <!--  PROJETOS  -->\r\n              <!--  GUIA  -->\r\n              <!-- <h2>Guides <span>Web pages with information guides</span> </h2>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/guide-viewit-processes\" target=\"_blank\">Guide Viewit Processes</a></strong>\r\n                                      - Web page with process documentation in Viewit Mobile. A sample page can be accessed on the Guide Viewit Processes link <a href=\"https://brunogaudino.github.io/guide-viewit-processes/\" target=\"_blank\">Guide Viewit Processes</a>.\r\n                </p>\r\n              </h5>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/simple-git-guide\" target=\"_blank\">Simple Git Guide</a></strong>\r\n                                      - Development of a simple guide with some basic git commands using html, css for query. A sample page can be accessed on the Simple Git Guide link <a href=\"https://brunogaudino.github.io/simple-git-guide/\" target=\"_blank\">Simple Git Guide</a>.\r\n                </p>\r\n              </h5> -->\r\n      <!--  GUIA  -->\r\n                          </article>\r\n      <!--<hr>-->\r\n      <!--\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/sources-exercises\" target=\"_blank\">Sources exercises</a></strong>\r\n                  - Desenvolvimento de uma lista com exercícios resolvidos. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/sources-exercises/\" target=\"_blank\">sources exercises</a>.\r\n                </p>\r\n              </h5>\r\n      -->\r\n              <!--<h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/projects-list\" target=\"_blank\">Projects list</a></strong>\r\n                  - Página com uma lista de pequenos projetos desenvolvidos e em desenvolvimento como menus, layout em colunas, galeria com efeitos em css3, etc. Desenvolvidos com html, css e javascript/jquery. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/projects-list/\" target=\"_blank\">projects list</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--  SOURCES  -->\r\n      <!--<hr>\r\n             <h5>\r\n               <p>\r\n                 <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/flip-effect-cards\" target=\"_blank\">Cards Flip Effect CSS3</a></strong>\r\n                 - Página html desenvolvida utilizando html, css, javascript/jQuery e o plugin <a href=\"http://www.jacklmoore.com/colorbox/\" target=\"_blank\">colorbox</a>. <br />\r\n                A página contém 5 cartas que são rotacionadas quando o mouse é possicionado sobre elas, e ao clicar o efeito colorbox é aplicado sobre a carta clicada. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/flip-effect-cards/\" target=\"_blank\">flip card effect cards</a>.\r\n               </p>\r\n             </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/gallery-css3\" target=\"_blank\">Gallery CSS 3</a></strong>\r\n                  - Página html desenvolvida utilizando html, e efeitos css3. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/gallery-css3/\" target=\"_blank\">gallery css3</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/columns-layout\" target=\"_blank\">Columns layout</a></strong>\r\n                  - Desenvolvimento de estrutura html/css para construção de websites com dimensões de largura e altura do monitor de 1024px por 768px utilizando 2 e 3 colunas. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/columns-layout/\" target=\"_blank\">columns layout</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/selection-checkbox-js\" target=\"_blank\">Selection checkbox js</a></strong>\r\n                  - Desenvolvimento de página html utilizando alguns itens de formulário(radio, checkbox), a página mostra um exemplo de seleção de itens checkbox ao selecionar um item radio. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/selection-checkbox-js/\" target=\"_blank\">selection checkbox js</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n               <h5>\r\n                 <p>\r\n                   <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/megamenu\" target=\"_blank\">Megamenu</a></strong>\r\n                   - Criação de um mega menu com várias opções e dimensões definidas utilizando html e css sem javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/megamenu/\" target=\"_blank\">megamenu</a>.\r\n                 </p>\r\n               </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/table-to-list-convert\" target=\"_blank\">Table to list convert</a></strong>\r\n                      - Página em html com uma tabela(table) e a sua conversão em lista (ul - li) utilizando jQuery, esse código foi desenvolvido para mostrar como alterar o html com jQuery. A página de exemplo no github está no link <a href=\"https://brunogaudino.github.io/table-to-list-convert/\" target=\"_blank\">table to list convert</a>.\r\n                </p>\r\n                  </h5>\r\n      <hr>\r\n                  <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/cadastro-teste\" target=\"_blank\">Cadastro teste</a></strong>\r\n                      - Desenvolvimento de página de cadastro com formulário e validação de dados, nesse projeto foi utilizado um plugin de validação de dados o jquery validate que pode ser obtido no site <a href=\"http://bassistance.de/jquery-plugins/jquery-plugin-validation/\" target=\"_blank\">Bassistance</a>.\r\n                </p>\r\n                  </h5>\r\n                  <h5>\r\n                      <i class=\"fa fa-globe\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 5</a></strong>\r\n                      - Dicta causae meliore ex vel, in vix erant integre petentium. Vix ei nisl scripta recusabo,\r\n                      eam doming blandit facilisis.\r\n                  </h5>\r\n                  <h5>\r\n                      <i class=\"fa fa-cog\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 6</a></strong>\r\n                      - Inermis recusabo elaboraret mea et, dicat neglegentur vim te. Nec et sanctus scriptorem,\r\n                      usu ex sapientem gubergren. Tamquam admodum ei usu.\r\n                  </h5> -->\r\n          </section>\r\n          \r\n          <!-- social -->\r\n          <bg-social></bg-social>\r\n\r\n        </div>\r\n\r\n      </section>\r\n"

/***/ }),

/***/ "./src/app/content/lab/lab.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/lab/lab.component.ts ***!
  \**********************************************/
/*! exports provided: LabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabComponent", function() { return LabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabComponent = /** @class */ (function () {
    function LabComponent() {
    }
    LabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./lab.component.html */ "./src/app/content/lab/lab.component.html")
        })
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "./src/app/content/lab/lab.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/lab/lab.module.ts ***!
  \*******************************************/
/*! exports provided: LabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabModule", function() { return LabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab.component */ "./src/app/content/lab/lab.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LabModule = /** @class */ (function () {
    function LabModule() {
    }
    LabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ]
        })
    ], LabModule);
    return LabModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Menu Hamburger*/\r\n/*nav.navbar .container{\r\n    background: white;\r\n    padding: 20px 10px 10px 0px;\r\n    height: 100%;\r\n}\r\n  \r\n.backNav{\r\n    position: fixed;\r\n    background: rgba(10,23,55,0.5);\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0px;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n  \r\n.navbar.navbar-default{\r\n    position: fixed;\r\n    z-index: 3;\r\n    height: 100%;\r\n    width: 140px;\r\n    top: 0px;\r\n    right: -140px;\r\n    border-radius: 0px !important;\r\n}\r\n  \r\n.navbar.navbar-default .container .navbar-header,\r\n.navbar.navbar-default .container .navbar-header a{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.navbar.navbar-default #navbar ul.nav{\r\n    width: 100%;\r\n}\r\n\r\n.navbar.navbar-default #navbar ul.nav li{\r\n    width: 100%;\r\n}\r\n\r\n.navbar.navbar-default #navbar ul.nav li a{\r\n    text-align: left;\r\n}*/\r\n/*@media (max-width: 767px) {\r\n    \r\n      span.fa{\r\n        cursor: pointer;\r\n        display: inline;\r\n        margin-top: 5px;\r\n        margin-left: 20px;\r\n        padding: 3px;\r\n        right: 15px;\r\n        position: absolute;\r\n        background-color: white;\r\n        border: 1px solid black;\r\n        border-radius: 5px;\r\n            -webkit-border-radius: 5px;\r\n            -moz-border-radius: 5px;\r\n            -ms-border-radius: 5px;\r\n            -o-border-radius: 5px;\r\n      }\r\n    \r\n      span.fa:before{}\r\n    \r\n      #wrap{\r\n        position: relative;\r\n      }\r\n    \r\n      nav.navbar .container{\r\n        position: absolute;\r\n        background: white;\r\n        padding: 20px 20px 10px 30px;\r\n        height: 100%;\r\n      }\r\n    \r\n      .backNav{\r\n        position: fixed;\r\n        background: rgba(10,23,55,0.5);\r\n        height: 100%;\r\n        width: 100%;\r\n        top: 0px;\r\n        z-index: 1;\r\n        display: none;\r\n      }\r\n    \r\n      .navbar.navbar-default{\r\n        position: fixed;\r\n        z-index: 3;\r\n        height: 100%;\r\n        width: 140px;\r\n        top: 0px;\r\n        right: -140px;\r\n      }\r\n    \r\n      .navbar.navbar-default .container .navbar-header,\r\n      .navbar.navbar-default .container .navbar-header a{\r\n        text-align: right;\r\n        margin: 0px 0px 0px auto;\r\n      }\r\n    \r\n      .navbar.navbar-default #navbar ul.nav li a{\r\n        text-align: right;\r\n      }\r\n    \r\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n        color: #6b6b6b;\r\n      }\r\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n        color: #6b6b6b;\r\n      }\r\n      .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n        color: #6b6b6b;\r\n        background-color: #ffffff;\r\n      }\r\n    \r\n}  @media (max-width: 767px) */\r\n/*MENU hambuger*/\r\n/*Menu*/\r\n#menu-nav-open{\r\n  display: block;\r\n  margin-bottom: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQ0U7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQXdFOEI7QUFDOUIsZ0JBQWdCO0FBRWhCLE9BQU87QUFDUDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTWVudSBIYW1idXJnZXIqL1xyXG4vKm5hdi5uYXZiYXIgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbi5iYWNrTmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMCwyMyw1NSwwLjUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyLFxyXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5jb250YWluZXIgLm5hdmJhci1oZWFkZXIgYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgI25hdmJhciB1bC5uYXYgbGl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdiBsaSBhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSovXHJcblxyXG4vKkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgXHJcbiAgICAgIHNwYW4uZmF7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgc3Bhbi5mYTpiZWZvcmV7fVxyXG4gICAgXHJcbiAgICAgICN3cmFwe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIG5hdi5uYXZiYXIgLmNvbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuYmFja05hdntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwyMyw1NSwwLjUpO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNDBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlcixcclxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIGF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdiBsaSBhe1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcclxuICAgICAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgXHJcbn0gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgKi9cclxuLypNRU5VIGhhbWJ1Z2VyKi9cclxuXHJcbi8qTWVudSovXHJcbiNtZW51LW5hdi1vcGVue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu-nav-open\" class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div id=\"navbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home</a></li>\r\n        <li><a [routerLink]=\"['/lab']\" routerLinkActive=\"router-link-active\">Lab</a></li>\r\n        <li><a [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About</a></li>\r\n        <!--li><a [routerLink]=\"['/recommendations']\" routerLinkActive=\"router-link-active\">Recommendations</a></li-->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!--<div class=\"backNav\"></div>\r\n<span class=\"fa fa-bars fa-lg\"></span>\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      \r\n      <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-home\"></i></a>\r\n\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n        <img src=\"../assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\r\n      </a>\r\n    </div>\r\n    <div id=\"navbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a [routerLink]=\"['/lab']\" routerLinkActive=\"router-link-active\">Lab</a></li>\r\n        <li><a [routerLink]=\"['/recommendations']\" routerLinkActive=\"router-link-active\">Recommendations</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>-->\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            exports: [
                _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        /* Social\r\n  -------------------------------------------------- */\r\n  i.fa:before{\r\n    width: 30px;\r\n    font-size: 30px;\r\n    height: 30px;\r\n    display: block;\r\n    margin: 5px auto;\r\n}\r\n  #social {\r\n  padding-top: 12px;\r\n  word-spacing: 25px;\r\n  margin: 0px auto;\r\n  text-align: center;\r\n}\r\n  #social h4 > a {\r\n  color: #000000;\r\n  margin: 0px 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJRQUFRO3NEQUM4QztFQUNwRDtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtFQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgIC8qIFNvY2lhbFxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgaS5mYTpiZWZvcmV7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuI3NvY2lhbCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgd29yZC1zcGFjaW5nOiAyNXB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc29jaWFsIGg0ID4gYSB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luOiAwcHggM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"social\">\r\n    <h4>\r\n        <a href=\"https://linkedin.com/in/brunocesarweb/?locale=en_US\" target=\"blank\"><i class=\"fa fa-linkedin\"></i></a>\r\n        <a href=\"https://github.com/brunogaudino\" target=\"blank\"><i class=\"fa fa-github\"></i></a>\r\n        <a href=\"http://codepen.io/brunocesaragweb/\" target=\"blank\"><i class=\"fa fa-codepen\"></i></a>\r\n        <a href=\"https://www.behance.net/brunocesarweb\" target=\"blank\"><i class=\"fa fa-behance\"></i></a>\r\n    </h4>\r\n</section>\r\n\r\n<footer>\r\n    <div id=\"footer\">\r\n        <div class=\"container\">\r\n            <p class=\"text-muted\">\r\n                Developed using <a href=\"http://angular.io\" target=\"_blank\">Angular</a> and <a href=\"http://www.github.com/biomadeira/sustain\" target=\"_blank\">sustain</a> theme.\r\n            </p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/social/social.module.ts":
/*!*****************************************!*\
  !*** ./src/app/social/social.module.ts ***!
  \*****************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"]
            ],
            exports: [
                _social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"]
            ]
        })
    ], SocialModule);
    return SocialModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\www\brunogaudino.github.io\bg-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map