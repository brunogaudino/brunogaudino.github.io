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
/* harmony import */ var _content_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/recommendations/recommendations.component */ "./src/app/content/recommendations/recommendations.component.ts");
/* harmony import */ var _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/lab/lab.component */ "./src/app/content/lab/lab.component.ts");
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
        component: _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__["LabComponent"]
    },
    {
        path: 'recommendations',
        component: _content_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
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
/* harmony import */ var _recommendations_recommendations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendations/recommendations.module */ "./src/app/content/recommendations/recommendations.module.ts");
/* harmony import */ var _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab/lab.module */ "./src/app/content/lab/lab.module.ts");
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
                _recommendations_recommendations_module__WEBPACK_IMPORTED_MODULE_2__["RecommendationsModule"],
                _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__["LabModule"]
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

module.exports = "  /* Custom page Home\r\n  -------------------------------------------------- */\r\n  #about h3{\r\n    font-size: 1.3em;\r\n    margin: 10px auto;\r\n  }\r\n  .avatar {\r\n    padding-top: 5%;\r\n  }\r\n  .avatar .img-circle{\r\n    border: 10px solid #8fd6ff;\r\n    padding: 5px 10px 3px 10px;\r\n    margin: 0 auto;\r\n    max-width: 300px;\r\n    height: auto;\r\n  }\r\n  .avatar img{\r\n    min-width: 160px;\r\n    height: auto;\r\n    max-width: 80%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtzREFDb0Q7RUFDcEQ7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBDdXN0b20gcGFnZSBIb21lXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAjYWJvdXQgaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH1cclxuICBcclxuICAuYXZhdGFyIC5pbWctY2lyY2xle1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM4ZmQ2ZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAzcHggMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmF2YXRhciBpbWd7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgfSJdfQ== */"

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

module.exports = "<section id=\"lab\">\r\n\r\n  <bg-menu></bg-menu>\r\n\r\n    <div class=\"container\">\r\n          <h3>Lab</h3>\r\n          <section id=\"labProjects\">\r\n                          <article>\r\n      <!--  PROJETOS/CURSOS  -->\r\n              <h2>Course projects <span>Projects developed during Alura courses</span> </h2>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a></strong>\r\n                                      - NodeJs API development. The code is available in github and is accessible through the link <a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a></strong>\r\n                                      - Development of the home of the \"Casa do código\" website in Nodejs, as a NodeJs course project. The code is available in github and can be accessed from the Home Code link. <a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">Web application Angular</a></strong>\r\n                                      - Webapp development with <a href=\"https://angular.io/\" target=\"_blank\">angular</a>. The code is available in github and is accessible through the Webapp Angular link. <a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">webapp angular</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/website-workflow-gulp\" target=\"_blank\">Website workflow gulp</a></strong>\r\n                  - Workflow development with automatization tool <a href=\"http://gulpjs.com/\" target=\"_blank\">Gulp</a>.\r\n                                      The code is available in github and is accessible through the Website Workflow <a href=\"https://brunogaudino.github.io/website-workflow-gulp/\" target=\"_blank\">website workflow gulp</a>.\r\n                </p>\r\n              </h5>\r\n      <!--<hr>-->\r\n<!--\t\t\t\t\t\t\t\t<h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/aparecidanutricao\" target=\"_blank\">Aparecida Nutrition</a></strong>\r\n                                      - Web application development calculate body fat. A sample page can be accessed on the Aparecida nutrition link <a href=\"https://brunogaudino.github.io/aparecidanutricao/\" target=\"_blank\">Aparecida nutrition</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--<hr>-->\r\n<!--                <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/portal-news-rwd\" target=\"_blank\">News Portal Responsive</a></strong>\r\n                                      - Development a news web page responsive. A sample page can be accessed on the News Portal link <a href=\"https://brunogaudino.github.io/portal-news-rwd/\" target=\"_blank\">News Portal Responsive</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--<hr>-->\r\n<!--                <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/webpage-joao-da-silva\" target=\"_blank\">Web page João da Silva</a></strong>\r\n                                      - Development personal web page of fictional person(João da Silva) for HTML and CSS in <a href=\"http://www.alura.com.br/\">Alura course</a>. A sample page can be accessed on the João da Silva page link <a href=\"https://brunogaudino.github.io/webpage-joao-da-silva/\" target=\"_blank\">web page João da Silva</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--  PROJETOS/CURSOS  -->\r\n              <!--  PROJETOS  -->\r\n                              <h2>Projects <span>Developed projects</span></h2> \r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/developer-nodejs-project/\" target=\"_blank\">Developer nodejs project</a></strong>\r\n                                          - A project built with HTML5, CSS3, javascipt, node.js and mongodb, as a complement to the training. The code is available in github and is accessible through the link<a href = \"https://github.com/brunogaudino/developer-nodejs-project/\"target =\" _ blank \"> developer nodejs project</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <h5>\r\n                        <p>\r\n                          <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/shot-on-the-target\" target=\"_blank\">Shot on the target</a></strong>\r\n                                          - Development of a simple game with javascript in which the user needs to hit the target. This page is usually blocked by the browser for security, it is necessary to unlock to see the game by running the example page can be accessed on the link<a href = \"https://brunogaudino.github.io/shot-on-the-target/ \"target =\" _ blank \"> shot on the target </a>.\r\n                        </p>\r\n                      </h5>\r\n                      <!--<hr>-->\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/minimalist-jekyll-blog\" target=\"_blank\">Minimalist jekyll blog</a></strong>\r\n                                      - Minimalist blog development using jekyll, with posts lists, pagination, commentary with <a href=\"https://disqus.com/\" target=\"_blank\">disqus</a>, and contact form. A sample page can be accessed on the <a href=\"https://brunogaudino.github.io/minimalist-jekyll-blog/\" target=\"_blank\">minimalist jekyll blog</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <!--<hr>-->\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/framework-grid-css\" target=\"_blank\">Framework Grid CSS</a></strong>\r\n                                      - CSS framework adaptation based on grid concept, for facilitates the website interface development. A sample page can be accessed on the Framework Grid CSS. <a href=\"https://brunogaudino.github.io/framework-grid-css/\" target=\"_blank\">framework grid css</a>.\r\n                                  </p>\r\n                              </h5>\r\n                              <!--<hr>-->\r\n<!--\t\t\t\t\t\t\t\t<h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/calculate-gestation-time\" target=\"_blank\">Calculate gestation time</a></strong>\r\n                                      - Online gestation time calculator development. A sample page can be accessed on the Calculate gestation time link. <a href=\"https://brunogaudino.github.io/calculate-gestation-time/\" target=\"_blank\">Calculate Gestation Time</a>.\r\n                                  </p>\r\n                              </h5>-->\r\n                              <!--<hr>\r\n                              <h5>\r\n                                  <p>\r\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/my-patients\" target=\"_blank\">My patients</a></strong>\r\n                                      - Desenvolvimento de uma aplicação web que calcula o IMC e adiciona novos pacientes a uma tabela usando javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/my-patients/\" target=\"_blank\">my patients</a>.\r\n                                  </p>\r\n                              </h5>-->\r\n              <!--  PROJETOS  -->\r\n              <!--  GUIA  -->\r\n              <!-- <h2>Guides <span>Web pages with information guides</span> </h2>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/guide-viewit-processes\" target=\"_blank\">Guide Viewit Processes</a></strong>\r\n                                      - Web page with process documentation in Viewit Mobile. A sample page can be accessed on the Guide Viewit Processes link <a href=\"https://brunogaudino.github.io/guide-viewit-processes/\" target=\"_blank\">Guide Viewit Processes</a>.\r\n                </p>\r\n              </h5>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/simple-git-guide\" target=\"_blank\">Simple Git Guide</a></strong>\r\n                                      - Development of a simple guide with some basic git commands using html, css for query. A sample page can be accessed on the Simple Git Guide link <a href=\"https://brunogaudino.github.io/simple-git-guide/\" target=\"_blank\">Simple Git Guide</a>.\r\n                </p>\r\n              </h5> -->\r\n      <!--  GUIA  -->\r\n                          </article>\r\n      <!--<hr>-->\r\n      <!--\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/sources-exercises\" target=\"_blank\">Sources exercises</a></strong>\r\n                  - Desenvolvimento de uma lista com exercícios resolvidos. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/sources-exercises/\" target=\"_blank\">sources exercises</a>.\r\n                </p>\r\n              </h5>\r\n      -->\r\n              <!--<h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/projects-list\" target=\"_blank\">Projects list</a></strong>\r\n                  - Página com uma lista de pequenos projetos desenvolvidos e em desenvolvimento como menus, layout em colunas, galeria com efeitos em css3, etc. Desenvolvidos com html, css e javascript/jquery. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/projects-list/\" target=\"_blank\">projects list</a>.\r\n                </p>\r\n              </h5>-->\r\n      <!--  SOURCES  -->\r\n      <!--<hr>\r\n             <h5>\r\n               <p>\r\n                 <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/flip-effect-cards\" target=\"_blank\">Cards Flip Effect CSS3</a></strong>\r\n                 - Página html desenvolvida utilizando html, css, javascript/jQuery e o plugin <a href=\"http://www.jacklmoore.com/colorbox/\" target=\"_blank\">colorbox</a>. <br />\r\n                A página contém 5 cartas que são rotacionadas quando o mouse é possicionado sobre elas, e ao clicar o efeito colorbox é aplicado sobre a carta clicada. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/flip-effect-cards/\" target=\"_blank\">flip card effect cards</a>.\r\n               </p>\r\n             </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/gallery-css3\" target=\"_blank\">Gallery CSS 3</a></strong>\r\n                  - Página html desenvolvida utilizando html, e efeitos css3. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/gallery-css3/\" target=\"_blank\">gallery css3</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/columns-layout\" target=\"_blank\">Columns layout</a></strong>\r\n                  - Desenvolvimento de estrutura html/css para construção de websites com dimensões de largura e altura do monitor de 1024px por 768px utilizando 2 e 3 colunas. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/columns-layout/\" target=\"_blank\">columns layout</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/selection-checkbox-js\" target=\"_blank\">Selection checkbox js</a></strong>\r\n                  - Desenvolvimento de página html utilizando alguns itens de formulário(radio, checkbox), a página mostra um exemplo de seleção de itens checkbox ao selecionar um item radio. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/selection-checkbox-js/\" target=\"_blank\">selection checkbox js</a>.\r\n                </p>\r\n              </h5>\r\n      <hr>\r\n               <h5>\r\n                 <p>\r\n                   <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/megamenu\" target=\"_blank\">Megamenu</a></strong>\r\n                   - Criação de um mega menu com várias opções e dimensões definidas utilizando html e css sem javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/megamenu/\" target=\"_blank\">megamenu</a>.\r\n                 </p>\r\n               </h5>\r\n      <hr>\r\n              <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/table-to-list-convert\" target=\"_blank\">Table to list convert</a></strong>\r\n                      - Página em html com uma tabela(table) e a sua conversão em lista (ul - li) utilizando jQuery, esse código foi desenvolvido para mostrar como alterar o html com jQuery. A página de exemplo no github está no link <a href=\"https://brunogaudino.github.io/table-to-list-convert/\" target=\"_blank\">table to list convert</a>.\r\n                </p>\r\n                  </h5>\r\n      <hr>\r\n                  <h5>\r\n                <p>\r\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/cadastro-teste\" target=\"_blank\">Cadastro teste</a></strong>\r\n                      - Desenvolvimento de página de cadastro com formulário e validação de dados, nesse projeto foi utilizado um plugin de validação de dados o jquery validate que pode ser obtido no site <a href=\"http://bassistance.de/jquery-plugins/jquery-plugin-validation/\" target=\"_blank\">Bassistance</a>.\r\n                </p>\r\n                  </h5>\r\n                  <h5>\r\n                      <i class=\"fa fa-globe\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 5</a></strong>\r\n                      - Dicta causae meliore ex vel, in vix erant integre petentium. Vix ei nisl scripta recusabo,\r\n                      eam doming blandit facilisis.\r\n                  </h5>\r\n                  <h5>\r\n                      <i class=\"fa fa-cog\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 6</a></strong>\r\n                      - Inermis recusabo elaboraret mea et, dicat neglegentur vim te. Nec et sanctus scriptorem,\r\n                      usu ex sapientem gubergren. Tamquam admodum ei usu.\r\n                  </h5> -->\r\n          </section>\r\n\r\n        </div>\r\n\r\n      </section>"

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

/***/ "./src/app/content/recommendations/recommendations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"depositions\">\r\n\r\n    <bg-menu></bg-menu>\r\n\r\n    <div class=\"container\">\r\n\r\n        <h3>Recommendations</h3>\r\n        <p>The recommendations can be seen on the link <a href=\"https://www.linkedin.com/in/brunocesarweb\" target=\"_blank\">LinkedIn profile</a>.</p>\r\n        <div class=\"panel panel-default\">\r\n\r\n        <div class=\"panel-body\">\r\n\r\n            <h3><span>Viewit Mobile</span></h3>\r\n            <div class=\"flexslider\">\r\n                <ul class=\"slides\">\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"O Bruno é um profissional comprometido com a qualidade dos entregáveis, tem um compromisso com a empresa, pontual, organizado com um excelente conhecimento no que se dispõem.\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno is a professional committed to the quality of his work, is committed to the company, punctual, organized and with excellent knowledge.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/wilson-viewit2.jpg\" alt=\"Wilson Cunha - Director of new business - Viewit Mobile\" title=\"Wilson Cunha - Director of new business - Viewit Mobile\" />\r\n                    </figure>\r\n                    <p>Wilson Cunha - <span>Director of new business.</span></p>\r\n                    </div>\r\n                </li>\r\n                </ul>\r\n            </div>\r\n\r\n            <!--<hr>-->\r\n            <h3><span>Ongame</span></h3>\r\n            <div class=\"flexslider\">\r\n                <ul class=\"slides\">\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"Bruno é um grande profissional Front-End. Trabalhei com ele na Ongame onde pude acompanhar uma grande evolução que ele teve como Front-End e também evoluiu muito bem como desenvolvedor junior PHP. Tem ótimos conhecimentos das ferramentas necessárias para um Front-End. Tem paciência e trabalha muito bem em equipe.\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno is a great front-end professional. We worked at Ongame where I followed his great evolution in Front-end and also as junior PHP developer. Has good knowledge of the tools for a front end. He has patience and works very well as team.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/fabio-ongame.jpg\" alt=\"Fabio Guaraldo - PHP developer - Ongame\" title=\"Fabio Guaraldo - PHP developer - Ongame\" />\r\n                    </figure>\r\n                    <p>Fabio Guaraldo - <span>PHP developer.</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"O Bruno é um profissional sério, trabalhador, preocupado em aprender e ajuda bastante nos projetos da empresa.\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno is a serious professional, hardworking, interested in learning and helping a lot in the projects of the company.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/mardel-ongame.jpg\" alt=\"Mardel Cardoso - Project manager - Ongame\" title=\"Mardel Cardoso - Project manager - Ongame\" />\r\n                    </figure>\r\n                    <p>Mardel Cardoso - <span>Project manager.</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                                            <!--<p class=\"depositions\">\"Bruno é um ótimo webdesigner, os layouts eram sempre programados e entregues nos prazos corretos!\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno is a great webdesigner, the layouts were always scheduled and delivered on the correct deadlines!\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/rafael-ongame.jpg\" alt=\"Rafael Naletto - Digital design - Ongame\" title=\"Rafael Naletto - Digital design - Ongame\" />\r\n                    </figure>\r\n                    <p>Rafael Naletto - <span>Digital design.</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"Sempre solícito e eficaz! \"</p>-->\r\n                    <p class=\"depositions\">\"Always helpful and effective!\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/diogo-ongame.jpg\" alt=\"Diogo Nishimoto - Content analyst - Ongame\" title=\"Diogo Nishimoto - Content analyst - Ongame\" />\r\n                    </figure>\r\n                    <p>Diogo Nishimoto - <span>Content analyst.</span></p>\r\n                    </div>\r\n                </li>\r\n                </ul>\r\n            </div>\r\n            <!--<hr>-->\r\n            <h3><span>Technology College of State of São Paulo(Fatec)</span></h3>\r\n            <div class=\"flexslider\">\r\n                <ul class=\"slides\">\r\n                <li>\r\n                                            <!--<p class=\"depositions\">\"Bruno Cesar é um profissional notável, com grande preocupação com a qualidade de seus entregáveis e na experiência do usuário. É marcado também por sua capacidade de trabalho em equipe e organização de seu fluxo de trabalho.\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno Cesar is a remarkable professional with great concern for the quality of his deliverables and in the user experience. He is remarkable for his ability to work in teams and to organize his workflow.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/marcos-fatec.jpg\" alt=\"Marcos Vinicius Guimarães - Web Developer - Fatec\" title=\"Marcos Vinicius Guimarães - Web Developer - Fatec\" />\r\n                    </figure>\r\n                    <p>Marcos Vinicius Guimarães - <span>Web Developer.</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                                            <!--<p class=\"depositions\">\"Bruno sempre foi um aluno dedicado e responsável em suas atividades acadêmicas. Está em busca constante de novidades que possam agregar em suas ações profissionais.\"</p>-->\r\n                    <p class=\"depositions\">\"Bruno has always been a dedicated and responsible student in his academic activities. It is in constant search of novelties that can add in their professional actions.\"</p>\r\n                                            <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/luiz-fatec.jpg\" alt=\"Luiz Pena - Computing course coordinator on ETEC Osasco - Fatec\" title=\"Luiz Pena - Computing course coordinator on ETEC Osasco - Fatec\" />\r\n                    </figure>\r\n                                                <p>Luiz Pena - <span>Computing course coordinator on ETEC Osasco.</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"Tive o privilégio de conhecer o Bruno durante o curso de graduação na FATEC e desenvolvermos diversar atividades em grupo. Ele sempre foi uma referência em nossa classe, muito dedicado, pró-ativo e com espírito empreendedor. Sempre bem atualizado e com um bom relacionamento com todos, cativa todas as amizades e cria um ambiente agradável e produtivo. O Bruno é uma excelente pessoa, muito sensato, um super profissional e, particularmente, um grande amigo.\"</p>-->\r\n                    <p class=\"depositions\">\"I had the privilege to meet Bruno during the course at FATEC and to develop various group activities. He has always been a reference in our class, very dedicated, proactive and with an entrepreneurial spirit. Always well updated and with a good relationship with all, it captivates all the friendships and creates a pleasant and productive environment. Bruno is an excellent person, very sensible, a super professional and, in particular, a great friend.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/joao-fatec.jpg\" alt=\"João Gambôa - CSV Expert - Fatec\" title=\"João Gambôa - CSV Expert - Fatec\" />\r\n                    </figure>\r\n                    <p>João Gambôa - <span>CSV Expert(Computerized Systems Validation Analyst).</span></p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <!--<p class=\"depositions\">\"Além de se uma pessoa extraordinária como amigo, também é um ótimo profissional.\"</p>-->\r\n                    <p class=\"depositions\">\"Besides being an extraordinary person as a friend, he is also a great professional.\"</p>\r\n                    <div class=\"flex-caption\">\r\n                    <figure>\r\n                        <img src=\"../assets/img/recommendations/monica-fatec.jpg\" alt=\"Mônica Oliveira - Teacher at the Centro Paula Souza - Fatec\" title=\"Mônica Oliveira - Teacher at the Centro Paula Souza - Fatec\" />\r\n                    </figure>\r\n                    <p>Mônica Oliveira - <span>Teacher at the Centro Paula Souza.</span></p>\r\n                    </div>\r\n                </li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div><!-- panel-body -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/content/recommendations/recommendations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsComponent", function() { return RecommendationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecommendationsComponent = /** @class */ (function () {
    function RecommendationsComponent() {
    }
    RecommendationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./recommendations.component.html */ "./src/app/content/recommendations/recommendations.component.html")
        })
    ], RecommendationsComponent);
    return RecommendationsComponent;
}());



/***/ }),

/***/ "./src/app/content/recommendations/recommendations.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecommendationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsModule", function() { return RecommendationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _recommendations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommendations.component */ "./src/app/content/recommendations/recommendations.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommendationsModule = /** @class */ (function () {
    function RecommendationsModule() {
    }
    RecommendationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
            ]
        })
    ], RecommendationsModule);
    return RecommendationsModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nnav.navbar .container{\r\n    /*position: absolute;*/\r\n    background: white;\r\n    padding: 20px 10px 10px 0px;\r\n    height: 100%;\r\n}\r\n  \r\n.backNav{\r\n    position: fixed;\r\n    background: rgba(10,23,55,0.5);\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0px;\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n  \r\n.navbar.navbar-default{\r\n    position: fixed;\r\n    z-index: 3;\r\n    height: 100%;\r\n    width: 140px;\r\n    top: 0px;\r\n    right: -140px;\r\n    border-radius: 0px !important;\r\n}\r\n  \r\n.navbar.navbar-default .container .navbar-header,\r\n.navbar.navbar-default .container .navbar-header a{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n  \r\n.navbar.navbar-default #navbar ul.nav{\r\n    width: 100%;\r\n}\r\n  \r\n.navbar.navbar-default #navbar ul.nav li{\r\n    width: 100%;\r\n}\r\n  \r\n.navbar.navbar-default #navbar ul.nav li a{\r\n    text-align: left;\r\n}\r\n  \r\n@media (max-width: 767px) {\r\n    /*\r\n      span.fa{\r\n        cursor: pointer;\r\n        display: inline;\r\n        margin-top: 5px;\r\n        margin-left: 20px;\r\n        padding: 3px;\r\n        right: 15px;\r\n        position: absolute;\r\n        background-color: white;\r\n        border: 1px solid black;\r\n        border-radius: 5px;\r\n            -webkit-border-radius: 5px;\r\n            -moz-border-radius: 5px;\r\n            -ms-border-radius: 5px;\r\n            -o-border-radius: 5px;\r\n      }\r\n    \r\n      span.fa:before{}\r\n    \r\n      #wrap{\r\n        position: relative;\r\n      }\r\n    \r\n      nav.navbar .container{\r\n        position: absolute;\r\n        background: white;\r\n        padding: 20px 20px 10px 30px;\r\n        height: 100%;\r\n      }\r\n    \r\n      .backNav{\r\n        position: fixed;\r\n        background: rgba(10,23,55,0.5);\r\n        height: 100%;\r\n        width: 100%;\r\n        top: 0px;\r\n        z-index: 1;\r\n        display: none;\r\n      }\r\n    \r\n      .navbar.navbar-default{\r\n        position: fixed;\r\n        z-index: 3;\r\n        height: 100%;\r\n        width: 140px;\r\n        top: 0px;\r\n        right: -140px;\r\n      }\r\n    \r\n      .navbar.navbar-default .container .navbar-header,\r\n      .navbar.navbar-default .container .navbar-header a{\r\n        text-align: right;\r\n        margin: 0px 0px 0px auto;\r\n      }\r\n    \r\n      .navbar.navbar-default #navbar ul.nav li a{\r\n        text-align: right;\r\n      }\r\n    \r\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n        color: #6b6b6b;\r\n      }\r\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n        color: #6b6b6b;\r\n      }\r\n      .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n        color: #6b6b6b;\r\n        background-color: #ffffff;\r\n      }*/\r\n    \r\n}\r\n  \r\n/* @media (max-width: 767px) */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFxRUk7O0FBRVI7O0FBQUUsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmF2Lm5hdmJhciAuY29udGFpbmVye1xyXG4gICAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbi5iYWNrTmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMCwyMyw1NSwwLjUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogLTE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyLFxyXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5jb250YWluZXIgLm5hdmJhci1oZWFkZXIgYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgI25hdmJhciB1bC5uYXYgbGl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdiBsaSBhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAvKlxyXG4gICAgICBzcGFuLmZhe1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHNwYW4uZmE6YmVmb3Jle31cclxuICAgIFxyXG4gICAgICAjd3JhcHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBuYXYubmF2YmFyIC5jb250YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmJhY2tOYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsMjMsNTUsMC41KTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTQwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0IC5jb250YWluZXIgLm5hdmJhci1oZWFkZXIsXHJcbiAgICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlciBhe1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggYXV0bztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHQgI25hdmJhciB1bC5uYXYgbGkgYXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XHJcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH0qL1xyXG4gICAgXHJcbn0gLyogQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backNav\"></div>\r\n<span class=\"fa fa-bars fa-lg\"></span>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <!-- <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-home\"></i></a> -->\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n        <img src=\"../assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\r\n      </a>\r\n    </div>\r\n    <div id=\"navbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a [routerLink]=\"['/lab']\" routerLinkActive=\"router-link-active\">Lab</a></li>\r\n        <!--href=\"/lab\"  li><a href=\"/recommendations\">Recommendations</a></li>        \r\n        <li><a href=\"/skills\">Skills</a></li>\r\n        <li><a href=\"/portfolio\">Portfolio</a></li>\r\n        <li><a href=\"https://medium.com/@brunocesaragweb/\" target=\"_blank\">Blog</a></li-->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n"

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

module.exports = "        /* Social\r\n  -------------------------------------------------- */\r\n  i.fa:before{\r\n    width: 30px;\r\n    font-size: 30px;\r\n    height: 30px;\r\n    display: block;\r\n    margin: 5px auto;\r\n}\r\n  #social {\r\n  padding-top: 12px;\r\n  word-spacing: 25px;\r\n}\r\n  #social h4 > a {\r\n  color: #000000;\r\n  margin: 0px 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJRQUFRO3NEQUM4QztFQUNwRDtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAvKiBTb2NpYWxcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIGkuZmE6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbiNzb2NpYWwge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHdvcmQtc3BhY2luZzogMjVweDtcclxufVxyXG5cclxuI3NvY2lhbCBoNCA+IGEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbjogMHB4IDNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"social\">\r\n    <h4>\r\n        <a href=\"https://linkedin.com/in/brunocesarweb/?locale=en_US\" target=\"blank\"><i class=\"fa fa-linkedin\"></i></a>\r\n        <a href=\"https://github.com/brunogaudino\" target=\"blank\"><i class=\"fa fa-github\"></i></a>\r\n        <a href=\"http://codepen.io/brunocesaragweb/\" target=\"blank\"><i class=\"fa fa-codepen\"></i></a>\r\n        <a href=\"https://www.behance.net/brunocesarweb\" target=\"blank\"><i class=\"fa fa-behance\"></i></a>\r\n    </h4>\r\n</section>"

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

module.exports = __webpack_require__(/*! C:\Users\Bruno\www\brunogaudino.github.io\bg-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map