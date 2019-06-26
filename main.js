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
/* harmony import */ var _content_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/about/about.component */ "./src/app/content/about/about.component.ts");
/* harmony import */ var _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/lab/lab.component */ "./src/app/content/lab/lab.component.ts");
/* harmony import */ var _content_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/resume/resume.component */ "./src/app/content/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ResumeComponent } from "./content/resume/resume.component";
var appRoutes = [
    {
        path: '',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _content_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'lab',
        component: _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__["LabComponent"]
    },
    {
        path: 'resume',
        component: _content_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"]
    }
    /*    {
            path: 'mention',
            component: MentionComponent
        },
        {
            path: 'professional',
            component: ProfessionalComponent
        },
        {
            path: 'pastimes',
            component: PastimesComponent
        },
        {
            path: '**',
            component: HomeComponent
        }
    */
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

module.exports = ""

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
        this.title = 'bootstrap-app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
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

module.exports = ""

/***/ }),

/***/ "./src/app/content/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/content/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"hide\">\r\n  \r\n  <bg-logo-presentation></bg-logo-presentation>\r\n\r\n  <bg-menu></bg-menu>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row text-align-center margin-top20\">\r\n  \r\n      <div class=\"col-1\"></div>\r\n  \r\n      <div class=\"col-10\">\r\n        \r\n        <h1 class=\"margin-bottom20\">About me</h1>\r\n        <p class=\"text-align-left\">I was born in São Paulo capital but I am live in metropolitan region of São Paulo in the city of Guarulhos.</p>\r\n        <p class=\"text-align-left\">I graduated in public school from elementary school to high school and also in College I studied at Fatec(Technology College of State of São Paulo) and I got the Technician's license.</p>\r\n        \r\n        <h2 class=\"text-align-left margin-top20 margin-bottom20\">I.T. area</h2>\r\n        <p class=\"text-align-left\">I am a analyst developer web front-end, worked in companies like Ongame(the first brazilian publish games), and also Viewit Mobile a companie focused in m-commerce solutions with clients like Ricardo Eletro, E-fácil, Ponto Frio, etc.</p>\r\n        <p class=\"text-align-left\">I am try to adapt the changes required in the work environment.</p>\r\n        <p class=\"text-align-left\">I am committed to developing the work, focused on achieving the goals set by the team, and willing to meet new technologies</p>\r\n        \r\n        <h2 class=\"text-align-left margin-top20 margin-bottom20\">Education</h2>\r\n        <p class=\"text-align-left\">I acted as coordinator of the technical course of computer of the Technical School Camargo Aranha(Etec), and professor teaching the disciplines of Programming Logic, Computerized Applications for Accounting.</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-1\"></div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <bg-social-network></bg-social-network>\r\n\r\n  <bg-footer></bg-footer>\r\n\r\n</main>\r\n\r\n<bg-load-spinner></bg-load-spinner>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/content/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/content/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/content/about/about.component.ts");
/* harmony import */ var src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/menu/menu.module */ "./src/app/shared/component/menu/menu.module.ts");
/* harmony import */ var src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/social-network/social-network.module */ "./src/app/shared/component/social-network/social-network.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/load-spinner/load-spinner.module */ "./src/app/shared/component/load-spinner/load-spinner.module.ts");
/* harmony import */ var src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/logo-presentation/logo-presentation.module */ "./src/app/shared/component/logo-presentation/logo-presentation.module.ts");
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
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__["SocialNetworkModule"],
                src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
                src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_8__["LogoPresentationModule"]
            ],
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
            ],
            exports: [
                _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
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
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.module */ "./src/app/content/about/about.module.ts");
/* harmony import */ var _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab/lab.module */ "./src/app/content/lab/lab.module.ts");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.module */ "./src/app/content/resume/resume.module.ts");
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
                _about_about_module__WEBPACK_IMPORTED_MODULE_2__["AboutModule"],
                _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__["LabModule"],
                _resume_resume_module__WEBPACK_IMPORTED_MODULE_4__["ResumeModule"]
            ],
            exports: [],
            declarations: []
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

module.exports = ".border-size-color{\r\n  border: 5px solid #81C0E6;\r\n  width: 257px;\r\n}"

/***/ }),

/***/ "./src/app/content/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"hide\">\r\n  <bg-menu></bg-menu>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row text-align-center margin-top20\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <span class=\"border-size-color p-4 d-block rounded-circle\">\r\n          <img class=\"d-block\" width=\"200\" src=\"assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\r\n        </span>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n\r\n    <div class=\"row text-align-center margin-top20\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-10\">\r\n        <h5><strong>Bruno Gaudino</strong> analyst developer web front-end.</h5>\r\n        <h5><strong>Technician's license </strong> by Fatec(Technology College of State of São Paulo).</h5>\r\n        <h5>Web development with <span class=\"font-weight-bold\">HTML</span>, <span class=\"font-weight-bold\">CSS</span>, <span class=\"font-weight-bold\">JavaScript</span>/<span class=\"font-weight-bold\">jQuery</span>.</h5>\r\n        <h5>Versioning control with <span class=\"font-weight-bold\">Git</span>.</h5>\r\n        <h5>Front-end performance with <span class=\"font-weight-bold\">Gulp</span>.</h5>\r\n        <h5>Specialist in <span class=\"font-weight-bold\">web accessibility</span>.</h5>\r\n        <h5><span class=\"font-weight-bold\">Node.js</span> and <span class=\"font-weight-bold\">Angular</span> frameworks.</h5>\r\n      </div>\r\n      <div class=\"col-1\"></div>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <bg-social-network></bg-social-network>\r\n\r\n  <bg-footer></bg-footer>\r\n</main>\r\n\r\n<bg-load-spinner></bg-load-spinner>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/content/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/menu/menu.module */ "./src/app/shared/component/menu/menu.module.ts");
/* harmony import */ var src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/social-network/social-network.module */ "./src/app/shared/component/social-network/social-network.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/load-spinner/load-spinner.module */ "./src/app/shared/component/load-spinner/load-spinner.module.ts");
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
                src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__["SocialNetworkModule"],
                src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/content/lab/lab.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/lab/lab.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/lab/lab.component.html":
/*!************************************************!*\
  !*** ./src/app/content/lab/lab.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"hide\">\n  \n  <bg-logo-presentation></bg-logo-presentation>\n\n  <bg-menu></bg-menu>\n\n  <div class=\"container\">\n    <div class=\"row text-align-center margin-top20\">\n      <div class=\"col-12\">        \n        <h1 class=\"margin-bottom20\">Lab</h1>\n        <p class=\"text-align-left\">In the section Lab contains some projects than I developed.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row text-align-center margin-top20\">\n        <div class=\"col-md-12 col-12 margin-bottom20\">\n          <h2>Course projects</h2>\n          <p>Projects developed during courses.</p>\n        </div>\n        <div class=\"col-md-4 col-12 margin-bottom20\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-2x fa-github\"></i><h3>API Payment</h3>\n            </div>\n            <div class=\"card-body text-align-left\">\n              <blockquote class=\"blockquote mb-0\">\n                <p>NodeJs API development. The code is available in github and is accessible through the link below.</p>\n                <footer><cite title=\"Link api payment\"><a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a></cite></footer>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-12 margin-bottom20\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-2x fa-github\"></i><h3>Casa do código</h3>\n            </div>\n            <div class=\"card-body text-align-left\">\n              <blockquote class=\"blockquote mb-0\">\n                <p>Development of the home of the \"Casa do código\" website in Nodejs, as a NodeJs course project. The code is available in github and can be accessed from the Home Code link.</p>\n                <footer><cite title=\"Link api payment\"><a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a></cite></footer> \n              </blockquote>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-12 margin-bottom20\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-2x fa-github\"></i><h3>Webapp Angular</h3>\n            </div>\n            <div class=\"card-body text-align-left\">\n              <blockquote class=\"blockquote mb-0\">\n                <p>Web application development with angular. The code is available in github and is accessible through the Webapp Angular link.</p>\n                <footer><cite title=\"Link api payment\"><a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">webapp angular</a></cite></footer> \n              </blockquote>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4 col-12 margin-bottom20\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <i class=\"fa fa-2x fa-github\"></i><h3>Workflow gulp</h3>\n            </div>\n            <div class=\"card-body text-align-left\">\n              <blockquote class=\"blockquote mb-0\">\n                <p>Workflow development with automatization tool gulp. The code is available in github and is accessible through the Website Workflow link below.</p>\n                <footer><cite title=\"Link api payment\"><a href=\"https://brunogaudino.github.io/website-workflow-gulp/\" target=\"_blank\">website workflow gulp</a>, <a href=\"http://gulpjs.com/\" target=\"_blank\">gulp</a></cite></footer> \n              </blockquote>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <div class=\"row text-align-center margin-top20\">\n          <div class=\"col-md-12 col-12 margin-bottom20\">\n            <h2>Course projects</h2>\n            <p>Projects developed during courses.</p>\n          </div>\n          <div class=\"col-md-4 col-12 margin-bottom20\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <i class=\"fa fa-2x fa-github\"></i><h3>Developer nodejs project</h3>\n              </div>\n              <div class=\"card-body text-align-left\">\n                <blockquote class=\"blockquote mb-0\">\n                  <p>A project built with HTML5, CSS3, javascipt, node.js and mongodb, as a complement to the training. The code is available in github and is accessible through the link developer nodejs project.</p>\n                  <footer>\n                    <cite title=\"Link api payment\"><a href= \"https://github.com/brunogaudino/developer-nodejs-project/\"target =\" _ blank \">developer nodejs project</a></cite>\n                  </footer>\n                </blockquote>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-4 col-12 margin-bottom20\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <i class=\"fa fa-2x fa-github\"></i><h3>Shot on the target</h3>\n              </div>\n              <div class=\"card-body text-align-left\">\n                <blockquote class=\"blockquote mb-0\">                \n                  <p>Development of a simple game with javascript in which the user needs to hit the target. This page is usually blocked by the browser for security, it is necessary to unlock to see the game by running the example page can be accessed on the link shot on the target.</p>\n                  <footer>\n                    <cite title=\"Link api payment\"><a href=\"https://brunogaudino.github.io/shot-on-the-target/ \"target =\" _ blank \">shot on the target </a></cite>\n                  </footer>\n                </blockquote>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-4 col-12 margin-bottom20\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <i class=\"fa fa-2x fa-github\"></i><h3>Minimalist jekyll blog</h3>\n              </div>\n              <div class=\"card-body text-align-left\">\n                <blockquote class=\"blockquote mb-0\">\n                  <p>Minimalist blog development using jekyll, with posts lists, pagination, commentary with disqus, and contact form. A sample page can be accessed on the minimalist jekyll blog.</p>\n                  <footer>\n                    <cite title=\"Link api payment\"><a href=\"https://brunogaudino.github.io/minimalist-jekyll-blog/\" target=\"_blank\">minimalist jekyll blog</a>, <a href=\"https://disqus.com/\" target=\"_blank\">disqus</a></cite>\n                  </footer>\n                </blockquote>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-md-4 col-12 margin-bottom20\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <i class=\"fa fa-2x fa-github\"></i><h3>Framework Grid CSS</h3>\n                </div>\n                <div class=\"card-body text-align-left\">\n                  <blockquote class=\"blockquote mb-0\">\n                    <p>CSS framework adaptation based on grid concept, for facilitates the website interface development. A sample page can be accessed on the Framework Grid CSS.</p>\n                    <footer>\n                      <cite title=\"Link api payment\"><a href=\"https://brunogaudino.github.io/framework-grid-css/\" target=\"_blank\">framework grid css</a></cite>\n                    </footer>\n                  </blockquote>\n                </div>\n              </div>\n            </div>\n  \n      </div>\n    </div>\n\n  <bg-social-network></bg-social-network>\n\n  <bg-footer></bg-footer>\n\n</main>\n\n<bg-load-spinner></bg-load-spinner>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabComponent = /** @class */ (function () {
    function LabComponent() {
    }
    LabComponent.prototype.ngOnInit = function () { };
    LabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./lab.component.html */ "./src/app/content/lab/lab.component.html"),
            styles: [__webpack_require__(/*! ./lab.component.css */ "./src/app/content/lab/lab.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/menu/menu.module */ "./src/app/shared/component/menu/menu.module.ts");
/* harmony import */ var src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/social-network/social-network.module */ "./src/app/shared/component/social-network/social-network.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/load-spinner/load-spinner.module */ "./src/app/shared/component/load-spinner/load-spinner.module.ts");
/* harmony import */ var src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/logo-presentation/logo-presentation.module */ "./src/app/shared/component/logo-presentation/logo-presentation.module.ts");
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
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_5__["SocialNetworkModule"],
                src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
                src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_8__["LogoPresentationModule"]
            ],
            declarations: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ],
            exports: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ]
        })
    ], LabModule);
    return LabModule;
}());



/***/ }),

/***/ "./src/app/content/resume/resume.component.css":
/*!*****************************************************!*\
  !*** ./src/app/content/resume/resume.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/resume/resume.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/resume/resume.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"hide\">\n  \n    <bg-logo-presentation></bg-logo-presentation>\n  \n    <bg-menu></bg-menu>\n  \n    <div class=\"container\">\n      <div class=\"row text-align-center margin-top20\">\n        <div class=\"col-12\">        \n          <h1 class=\"margin-bottom20\">Resume</h1>\n          <p class=\"text-align-left\">Section Resume contains informations about my work experience and works realized in companies.</p>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"container\">\n    <div class=\"row text-align-center margin-top20\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-10 card padding-top15 padding-bottom15\">\n        <h2 class=\"margin-bottom20\">I.T. Companies</h2>       \n        <div class=\"accordion text-align-left\" id=\"accordion-course\">\n\n          <div class=\"card\">\n            <div class=\"card-header\" id=\"headingOne\">\n              <h2 class=\"mb-0\">\n                <i class=\"fa fa-xs fa-laptop\"></i>\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                  BRQ Digital Solutions\n                </button>\n              </h2>\n            </div>\n        \n            <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion-course\">\n              <div class=\"card-body\">\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;\n                  <strong>\n                    <a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a>\n                  </strong> \n                  - NodeJs API development. The code is available in github and is accessible through the link \n                  <a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a>. \n                </p>\n              </div>\n            </div>\n          </div>\n         \n          <div class=\"card\">\n            <div class=\"card-header\" id=\"headingTwo\">\n              <h2 class=\"mb-0\">\n                <i class=\"fa fa-xs fa-mobile\"></i>\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  Viewit Mobile\n                </button>\n              </h2>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion-course\">\n              <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-header\" id=\"headingThree\">\n              <h2 class=\"mb-0\">\n                <i class=\"fa fa-xs fa-gamepad\"></i>\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  Ongame Entertainment\n                </button>\n              </h2>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion-course\">\n              <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <div class=\"row text-align-center margin-top20\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-10 card padding-top15 padding-bottom15\">\n          <h2 class=\"margin-bottom20\">Education experience</h2>\n          <div class=\"accordion text-align-left\" id=\"accordion-projects\">\n            \n            <div class=\"card\">\n              <div class=\"card-header\" id=\"headingOne\">\n                <h2 class=\"mb-0\">\n                  <i class=\"fa fa-xs fa-book\"></i>\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                    ETEC - Carmargo Aranha\n                  </button>\n                </h2>\n              </div>\n          \n              <div id=\"collapse1\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion-projects\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                  <h2 class=\"mb-0\">\n                    <i class=\"fa fa-xs fa-desktop\"></i>\n                    <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                      Escotec\n                    </button>\n                  </h2>\n                </div>\n            \n                <div id=\"collapse1\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion-projects\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n    </div>\n\n   <div class=\"container\">\n    <div class=\"row text-align-center margin-top20\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-10 card padding-top15 padding-bottom15\">\n        <h2 class=\"margin-bottom20\">Others companies</h2>\n        <div class=\"accordion text-align-left\" id=\"accordion-projects\">\n\n          <div class=\"card\">\n            <div class=\"card-header\" id=\"headingOne\">\n              <h2 class=\"mb-0\">\n                <i class=\"fa fa-xs fa-building\"></i>\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                  Collapsible Group Item #1\n                </button>\n              </h2>\n            </div>\n        \n            <div id=\"collapse1\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion-projects\">\n              <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-header\" id=\"headingTwo\">\n              <h2 class=\"mb-0\">\n                <i class=\"fa fa-xs fa-industry\"></i>\n                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  Collapsible Group Item #2\n                </button>\n              </h2>\n            </div>\n            <div id=\"collapse2\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion-projects\">\n              <div class=\"card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n  </div>\n\n  <bg-social-network></bg-social-network>\n\n  <bg-footer></bg-footer>\n\n</main>\n\n<bg-load-spinner></bg-load-spinner>\n"

/***/ }),

/***/ "./src/app/content/resume/resume.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/resume/resume.component.ts ***!
  \****************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () { };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/content/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/content/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/content/resume/resume.module.ts":
/*!*************************************************!*\
  !*** ./src/app/content/resume/resume.module.ts ***!
  \*************************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/menu/menu.module */ "./src/app/shared/component/menu/menu.module.ts");
/* harmony import */ var src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/social-network/social-network.module */ "./src/app/shared/component/social-network/social-network.module.ts");
/* harmony import */ var src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/footer/footer.module */ "./src/app/shared/component/footer/footer.module.ts");
/* harmony import */ var src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/load-spinner/load-spinner.module */ "./src/app/shared/component/load-spinner/load-spinner.module.ts");
/* harmony import */ var src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/logo-presentation/logo-presentation.module */ "./src/app/shared/component/logo-presentation/logo-presentation.module.ts");
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume.component */ "./src/app/content/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ResumeModule = /** @class */ (function () {
    function ResumeModule() {
    }
    ResumeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                src_app_shared_component_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__["MenuModule"],
                src_app_shared_component_social_network_social_network_module__WEBPACK_IMPORTED_MODULE_4__["SocialNetworkModule"],
                src_app_shared_component_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                src_app_shared_component_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
                src_app_shared_component_logo_presentation_logo_presentation_module__WEBPACK_IMPORTED_MODULE_7__["LogoPresentationModule"]
            ],
            declarations: [
                _resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]
            ],
            exports: [
                _resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]
            ]
        })
    ], ResumeModule);
    return ResumeModule;
}());



/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar-fixed-bottom\">\r\n  <p class=\"text-center\"><em>Developed using <a href=\"https://angular.io/\" alt=\"Angular link\" title=\"Angular link\" target=\"_blank\">Angular</a> and <a href=\"https://getbootstrap.com/\" alt=\"Bootstrap link\" title=\"Bootstrap link\" target=\"_blank\">Bootstrap</a>!</em></p>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/footer/footer.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/component/footer/footer.module.ts ***!
  \**********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/component/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/component/load-spinner/load-spinner.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/shared/component/load-spinner/load-spinner.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-spinner{\r\n  position: fixed;\r\n  z-index: 999;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: black;\r\n  opacity: 0.9;\r\n}\r\n.central-spinner{\r\n  left:50%;\r\n  top:50%;\r\n  position: relative;\r\n  margin-left:-60px; /* -1/2 width */\r\n  margin-top:-60px; /* -1/2 height */\r\n}"

/***/ }),

/***/ "./src/app/shared/component/load-spinner/load-spinner.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/load-spinner/load-spinner.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\nhttps://github.com/hackafro/angular-epic-spinners\r\n-->\r\n\r\n<div class=\"wrap-spinner\">\r\n  <div class=\"central-spinner\">\r\n    <app-atom-spinner\r\n      [animationDuration]=\"1000\"\r\n      [size]=\"130\"\r\n      [color]=\"'#8fd6ff'\">\r\n    </app-atom-spinner>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/component/load-spinner/load-spinner.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/load-spinner/load-spinner.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function() { return LoadSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadSpinnerComponent = /** @class */ (function () {
    function LoadSpinnerComponent() {
    }
    LoadSpinnerComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.hide').fadeIn('slow');
            jquery__WEBPACK_IMPORTED_MODULE_1__(".wrap-spinner").fadeOut('fast');
        }, 1000);
    };
    LoadSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-load-spinner',
            template: __webpack_require__(/*! ./load-spinner.component.html */ "./src/app/shared/component/load-spinner/load-spinner.component.html"),
            styles: [__webpack_require__(/*! ./load-spinner.component.css */ "./src/app/shared/component/load-spinner/load-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadSpinnerComponent);
    return LoadSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/load-spinner/load-spinner.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/component/load-spinner/load-spinner.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoadSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerModule", function() { return LoadSpinnerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-epic-spinners */ "./node_modules/angular-epic-spinners/fesm5/angular-epic-spinners.js");
/* harmony import */ var _load_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-spinner.component */ "./src/app/shared/component/load-spinner/load-spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadSpinnerModule = /** @class */ (function () {
    function LoadSpinnerModule() {
    }
    LoadSpinnerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_epic_spinners__WEBPACK_IMPORTED_MODULE_2__["AtomSpinnerModule"]
            ],
            exports: [
                _load_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadSpinnerComponent"],
                angular_epic_spinners__WEBPACK_IMPORTED_MODULE_2__["AtomSpinnerModule"]
            ],
            declarations: [
                _load_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadSpinnerComponent"]
            ]
        })
    ], LoadSpinnerModule);
    return LoadSpinnerModule;
}());



/***/ }),

/***/ "./src/app/shared/component/logo-presentation/logo-presentation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/logo-presentation/logo-presentation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"py-2 text-center\">\r\n    <!-- <img class=\"d-block mx-auto mb-4\" src=\"/docs/4.3/assets/brand/bootstrap-solid.svg\" alt=\"Teste\" width=\"72\" height=\"72\"> -->\r\n    <img width=\"80\" src=\"assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\r\n    <p class=\"lead\">Analyst developer web front-end</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/component/logo-presentation/logo-presentation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/component/logo-presentation/logo-presentation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LogoPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPresentationComponent", function() { return LogoPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoPresentationComponent = /** @class */ (function () {
    function LogoPresentationComponent() {
    }
    LogoPresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-logo-presentation',
            template: __webpack_require__(/*! ./logo-presentation.component.html */ "./src/app/shared/component/logo-presentation/logo-presentation.component.html")
        })
    ], LogoPresentationComponent);
    return LogoPresentationComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/logo-presentation/logo-presentation.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/component/logo-presentation/logo-presentation.module.ts ***!
  \********************************************************************************/
/*! exports provided: LogoPresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPresentationModule", function() { return LogoPresentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logo_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo-presentation.component */ "./src/app/shared/component/logo-presentation/logo-presentation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogoPresentationModule = /** @class */ (function () {
    function LogoPresentationModule() {
    }
    LogoPresentationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _logo_presentation_component__WEBPACK_IMPORTED_MODULE_1__["LogoPresentationComponent"]
            ],
            exports: [
                _logo_presentation_component__WEBPACK_IMPORTED_MODULE_1__["LogoPresentationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], LogoPresentationModule);
    return LogoPresentationModule;
}());



/***/ }),

/***/ "./src/app/shared/component/menu/menu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/component/menu/menu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/component/menu/menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/component/menu/menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/lab']\" routerLinkActive=\"router-link-active\">Lab</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/resume']\" routerLinkActive=\"router-link-active\">Resume</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" [routerLink]=\"['/mention']\" routerLinkActive=\"router-link-active\">Mention</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" [routerLink]=\"['/professional']\" routerLinkActive=\"router-link-active\">Professional</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" [routerLink]=\"['/pastimes']\" routerLinkActive=\"router-link-active\">Pastimes</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/component/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/component/menu/menu.component.ts ***!
  \*********************************************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/shared/component/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/menu/menu.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/component/menu/menu.module.ts ***!
  \******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/shared/component/menu/menu.component.ts");
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
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
            ],
            exports: [
                _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/shared/component/social-network/social-network.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/shared/component/social-network/social-network.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/component/social-network/social-network.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/component/social-network/social-network.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row text-align-center margin-top20\">\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-10\">\r\n      <ul class=\"list-inline\">\r\n        <li class=\"d-inline p-2\"><a title=\"LinkedIn\" alt=\"LinkedIn\" href=\"https://linkedin.com/in/brunocesarweb/?locale=en_US\" target=\"blank\"><i class=\"fa fa-linkedin fa-2x\"></i></a></li>\r\n        <li class=\"d-inline p-2\"><a title=\"GitHub\" alt=\"GitHub\" href=\"https://github.com/brunogaudino\" target=\"blank\"><i class=\"fa fa-github fa-2x\" ></i></a></li>\r\n        <li class=\"d-inline p-2\"><a title=\"CodePen\" alt=\"CodePen\" href=\"http://codepen.io/brunocesaragweb/\" target=\"blank\"><i class=\"fa fa-codepen fa-2x\"></i></a></li>\r\n        <li class=\"d-inline p-2\"><a title=\"Behance\" alt=\"Behance\" href=\"https://www.behance.net/brunocesarweb\" target=\"blank\"><i class=\"fa fa-behance fa-2x\"></i></a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/component/social-network/social-network.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/social-network/social-network.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SocialNetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkComponent", function() { return SocialNetworkComponent; });
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

var SocialNetworkComponent = /** @class */ (function () {
    function SocialNetworkComponent() {
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    SocialNetworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-social-network',
            template: __webpack_require__(/*! ./social-network.component.html */ "./src/app/shared/component/social-network/social-network.component.html"),
            styles: [__webpack_require__(/*! ./social-network.component.css */ "./src/app/shared/component/social-network/social-network.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialNetworkComponent);
    return SocialNetworkComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/social-network/social-network.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/component/social-network/social-network.module.ts ***!
  \**************************************************************************/
/*! exports provided: SocialNetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkModule", function() { return SocialNetworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_network_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-network.component */ "./src/app/shared/component/social-network/social-network.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocialNetworkModule = /** @class */ (function () {
    function SocialNetworkModule() {
    }
    SocialNetworkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _social_network_component__WEBPACK_IMPORTED_MODULE_2__["SocialNetworkComponent"]
            ],
            exports: [
                _social_network_component__WEBPACK_IMPORTED_MODULE_2__["SocialNetworkComponent"]
            ]
        })
    ], SocialNetworkModule);
    return SocialNetworkModule;
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

module.exports = __webpack_require__(/*! C:\www\brunogaudino.github.io\source-app\bootstrap-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map