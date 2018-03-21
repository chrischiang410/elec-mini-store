webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  color: darkgray;\n  margin-top: -20px;\n  padding-left: 2px;\n}\n\nh4 {\n  margin-bottom: 5px;\n}\n\nnav>span {\n  cursor: pointer\n}\n\nnav>span:first-child {\n  color:indianred\n}\n\nnav>span:nth-child(2) {\n  color:darkorange\n}\n\nnav>span:nth-child(3) {\n  color:darkseagreen\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n   {{title}} Book Store\n  </h1>\n  <h3>Novels、Comic Books and all the Fashion Magazine </h3>\n</div>\n\n<hr>\n\n<h4>Choose the Category</h4>\n<nav>\n  <span routerLink=\"/novel\">Novel</span> ｜\n  <span routerLink=\"/comic\">Comic books</span> ｜\n  <span routerLink=\"/magazine\">Magazine</span>\n</nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Chris\'';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_example_module__ = __webpack_require__("../../../../../src/app/example/example.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__example_example_routing__ = __webpack_require__("../../../../../src/app/example/example.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__example_example_module__["a" /* ExampleModule */],
            __WEBPACK_IMPORTED_MODULE_5__example_example_routing__["a" /* ExampleRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/example/comic/comic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  width:40%\n}\ndiv > span:first-child {\n  display: inline-block;\n  width: 100px;\n  text-align: left;\n  margin-right: 5px;\n};\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example/comic/comic.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Most views：</h3>\n<div *ngFor=\"let item of comicList\">\n  <span>{{item.bookname}}</span>\n  <span>$ {{item.price}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/example/comic/comic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_service__ = __webpack_require__("../../../../../src/app/example/example.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicComponent = (function () {
    function ComicComponent(eService) {
        this.eService = eService;
        this.comicList = [];
    }
    ComicComponent.prototype.ngOnInit = function () {
        this.getComic();
    };
    ComicComponent.prototype.getComic = function () {
        var _this = this;
        this.eService.getComic().subscribe(function (res) {
            _this.comicList = res.data;
        });
    };
    return ComicComponent;
}());
ComicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comic',
        template: __webpack_require__("../../../../../src/app/example/comic/comic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/example/comic/comic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */]) === "function" && _a || Object])
], ComicComponent);

var _a;
//# sourceMappingURL=comic.component.js.map

/***/ }),

/***/ "../../../../../src/app/example/example.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_service__ = __webpack_require__("../../../../../src/app/example/example.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__novel_novel_component__ = __webpack_require__("../../../../../src/app/example/novel/novel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comic_comic_component__ = __webpack_require__("../../../../../src/app/example/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/example/magazine/magazine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__novel_novel_component__["a" /* NovelComponent */], __WEBPACK_IMPORTED_MODULE_5__comic_comic_component__["a" /* ComicComponent */], __WEBPACK_IMPORTED_MODULE_6__magazine_magazine_component__["a" /* MagazineComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__example_service__["a" /* ExampleService */]]
    })
], ExampleModule);

//# sourceMappingURL=example.module.js.map

/***/ }),

/***/ "../../../../../src/app/example/example.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novel_novel_component__ = __webpack_require__("../../../../../src/app/example/novel/novel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comic_comic_component__ = __webpack_require__("../../../../../src/app/example/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/example/magazine/magazine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: null,
        children: [
            { path: '', redirectTo: 'novel', pathMatch: 'full' },
            { path: 'novel', component: __WEBPACK_IMPORTED_MODULE_2__novel_novel_component__["a" /* NovelComponent */] },
            { path: 'comic', component: __WEBPACK_IMPORTED_MODULE_3__comic_comic_component__["a" /* ComicComponent */] },
            { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_4__magazine_magazine_component__["a" /* MagazineComponent */] },
            { path: '**', redirectTo: 'novel' }
        ]
    }
];
var ExampleRoutingModule = (function () {
    function ExampleRoutingModule() {
    }
    return ExampleRoutingModule;
}());
ExampleRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], ExampleRoutingModule);

//# sourceMappingURL=example.routing.js.map

/***/ }),

/***/ "../../../../../src/app/example/example.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleService = (function () {
    function ExampleService(http) {
        this.http = http;
        this.novelUrl = 'https://jsonbin.org/chrischiang410/getNovelList';
        this.comicUrl = 'https://jsonbin.org/chrischiang410/getComicList';
        this.magUrl = 'https://jsonbin.org/chrischiang410/getMagList';
    }
    ExampleService.prototype.getNovel = function () {
        return this.http.get(this.novelUrl);
    };
    ExampleService.prototype.getComic = function () {
        return this.http.get(this.comicUrl);
    };
    ExampleService.prototype.getMag = function () {
        return this.http.get(this.magUrl);
    };
    return ExampleService;
}());
ExampleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ExampleService);

var _a;
//# sourceMappingURL=example.service.js.map

/***/ }),

/***/ "../../../../../src/app/example/magazine/magazine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  width:40%\n}\ndiv > span:first-child {\n  display: inline-block;\n  width: 100px;\n  text-align: left;\n  margin-right: 5px;\n};\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>You may like this：</h3>\n<div *ngFor=\"let item of magList\">\n  <span>{{item.bookname}}</span>\n  <span>$ {{item.price}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/example/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_service__ = __webpack_require__("../../../../../src/app/example/example.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MagazineComponent = (function () {
    function MagazineComponent(eService) {
        this.eService = eService;
        this.magList = [];
    }
    MagazineComponent.prototype.ngOnInit = function () {
        this.getMag();
    };
    MagazineComponent.prototype.getMag = function () {
        var _this = this;
        this.eService.getMag().subscribe(function (res) {
            _this.magList = res.data;
        });
    };
    return MagazineComponent;
}());
MagazineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-magazine',
        template: __webpack_require__("../../../../../src/app/example/magazine/magazine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/example/magazine/magazine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */]) === "function" && _a || Object])
], MagazineComponent);

var _a;
//# sourceMappingURL=magazine.component.js.map

/***/ }),

/***/ "../../../../../src/app/example/novel/novel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_service__ = __webpack_require__("../../../../../src/app/example/example.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NovelComponent = (function () {
    function NovelComponent(eService) {
        this.eService = eService;
        this.novelList = [];
    }
    NovelComponent.prototype.ngOnInit = function () {
        this.novelTitle = 'Top 3 Novels';
        this.getNovel();
    };
    NovelComponent.prototype.getNovel = function () {
        var _this = this;
        this.eService.getNovel().subscribe(function (res) {
            _this.novelList = res.data;
        });
    };
    return NovelComponent;
}());
NovelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-novel',
        template: "<h3>{{novelTitle}}\uFF1A</h3>\n  <div *ngFor=\"let item of novelList\">\n    <span>{{item.bookname}}</span>\n    <span>$ {{item.price}}</span>\n  </div>\n  ",
        styles: ["\n    div {\n      width:40%\n    }\n    div > span:first-child {\n      display: inline-block;\n      width: 100px;\n      text-align: left;\n      margin-right: 5px;\n    };\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__example_service__["a" /* ExampleService */]) === "function" && _a || Object])
], NovelComponent);

var _a;
//# sourceMappingURL=novel.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map