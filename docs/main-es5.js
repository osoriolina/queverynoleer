(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" <!-- <div *ngIf=\"data\">\n    <div *ngFor=\"let post of data.articles; let i = index\">\n        {{post['author']}}\n        <a routerLink=\"/post/{{i}}\" class=\"card-link\">Go post!</a>\n\n    </div>  \n\n\n</div>  -->\n<div class=\"row\">\n    <div class=\"col-12 title\">\n        QUE <i class=\"fas fa-eye\"></i> Y NO LEER\n    </div>\n</div>\n\n<hr>\n\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"data\">\n        <div class=\"col-4\" *ngFor=\"let post of data.articles; let i = index\">\n            <div class=\"card card_properties shadow-sm p-3 mb-5 bg-white rounded\" style=\"width: 18rem;\">\n                <img src=\"{{post['urlToImage']}}\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title title_description\">{{post['title']}}</h5>\n                    <p class=\"card-text text_description\">{{post['description']}}</p>\n                    <button routerLink=\"/post/{{i}}\" type=\"button\" class=\"btn btn-info\">Crea tu propia noticia</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-news/single-news.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-news/single-news.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div routerLink=\"/home/\" class=\"col-12 title\">\n        QUE <i class=\"fas fa-eye\"></i> Y NO LEER\n    </div>\n</div>\n\n<hr>\n\n<div class=\"row  cont_properties\">\n    <div class=\"col-6\">\n        <img class=\"user_img\" src=\"{{post.urlToImage}}\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n\n                <div *ngIf=\"views[0] === true\">\n                    <form #userForm=\"ngForm\">\n                        <div class=\"form-group form_cont\">\n                            <textarea class=\"textarea_prop shadow p-3 mb-5 bg-white rounded\" maxlength=\"800\"\n                                #midescription=\"ngModel\" name=\"textoUsuario\" [(ngModel)]=\"textoUsuario\" type=\"textarea\"\n                                aria-describedby=\"textoUsuarioHelp\" placeholder=\"Escribe tu propia noticia\"></textarea>\n\n                            <div class=\"btns_props\">\n                                <button (click)=\"printText()\" type=\"submit\"\n                                    class=\"btn btn-dark btn_publish mr-3\">Publicar</button>\n\n                                <button (click)=\"showView([false,true])\" type=\"submit\"\n                                    class=\"btn btn-dark btn_publish mr-3\">ver\n                                    noticia real</button>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n\n                <div *ngIf=\"views[1] === true\">\n                    <div class=\"card realNews_card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title tittle_description\">{{post.title}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">{{post.author}}</h6>\n                            <p class=\"card-text text_description \">{{post.content}}</p>\n                            <a href=\"{{post.url}}\" class=\"card-link\">Ir a noticia completa</a>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n\n\n\n\n    </div>\n\n    <div class=\"col-6 userNews_bg\">\n        <div class=\"row\">\n            <div class=\"col-12\"></div>\n            <p class=\"user_title\">The You Times</p>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <img class=\"userNews_img\" src=\"{{post.urlToImage}}\">\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"userNews_cont\">\n                    <p>{{userOutput}}</p>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n<!--\n<div *ngIf=\"post\">\n    {{post.content}}\n    {{post.author}}\n\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'news';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _single_news_single_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-news/single-news.component */ "./src/app/single-news/single-news.component.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var routerConfig = [
                { 'path': '', 'component': _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                { 'path': 'home', 'component': _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                { 'path': 'post/:id', 'component': _single_news_single_news_component__WEBPACK_IMPORTED_MODULE_5__["SingleNewsComponent"] },
                { 'path': '**', 'component': _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                        _single_news_single_news_component__WEBPACK_IMPORTED_MODULE_5__["SingleNewsComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routerConfig),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                    ],
                    providers: [_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".title {\n    height: 100px;\n    text-align: center;\n    font-family: 'Bebas Neue', cursive;\n    font-size: 40px;\n    margin-top: 40px;\n}\n\n.card_properties {\n    border: none;\n\n}\n\n.tittle_description {\n    font-family: 'Bebas Neue', cursive;\n}\n\n.text_description {\n    font-family: 'Montserrat', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNhcmRfcHJvcGVydGllcyB7XG4gICAgYm9yZGVyOiBub25lO1xuXG59XG5cbi50aXR0bGVfZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XG59XG5cbi50ZXh0X2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                //post: object[] = this._data.post;
                function HomeComponent(_http, _data, _path) {
                    var _this = this;
                    this._http = _http;
                    this._data = _data;
                    this._path = _path;
                    this.subscription = this._data.data.subscribe(function (newValue) { _this.data = newValue; });
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this._data.httpGet();
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var DataService = /** @class */ (function () {
                function DataService(_http) {
                    this._http = _http;
                    this.data = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                DataService.prototype.httpGet = function () {
                    var _this = this;
                    var url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=4ecd951b262b4b0e9ad9a0bd93669167';
                    this._http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'x-requested-with': 'XMLHttpResponse' }) })
                        .subscribe(function (result) { _this.data.next(result); });
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/single-news/single-news.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/single-news/single-news.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".title {\n    height: 100px;\n    text-align: center;\n    font-family: 'DM Serif Display', serif;\n    font-size: 40px;\n    margin-top: 20px;\n    outline: 0;\n    cursor: pointer;\n}\n\n.card_properties {\n    border: none;\n}\n\n.card-link {\n    color: #4BA0B5;\n}\n\n.form_cont{\n    display: inline-grid;\n}\n\n.tittle_description {\n    font-family: 'Bebas Neue', cursive;\n}\n\n.text_description {\n    font-family: 'Montserrat', sans-serif;\n}\n\n.user_title {\n    font-family: 'Pirata One', cursive;\n    font-size: 50px;\n    text-align: center;\n    margin-top: 20px;\n    margin-left: 260px;\n    \n}\n\n.user_img {\n    max-width: 500px;\n    margin-left: 135px;\n    margin-top: 40px;\n    \n}\n\n.userNews_img {\n    max-width: 450px;\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n    margin-left: 150px;\n}\n\n.userNews_bg {\n    background-color: #F7F6F0;\n    \n}\n\n.userNews_cont {\n    width: 450px;\n    height: 300px;\n    margin-top: 30px;\n    margin-left: 150px;\n    font-family: 'Fenix', serif;\n}\n\n.textarea_prop {\n    width: 500px;\n    height: 200px;\n    margin-left: 133px;\n    margin-top: 40px;\n    border: none;\n    outline: none;\n}\n\n.btns_props {\n    position: relative;\n    display: inline-flex;\n    margin-left: 130px;\n}\n\n.cont_properties {\n    margin: 40px;\n    padding-right: 20px;\n}\n\n.realNews_card {\n    width: 500px;\n    margin-left: 133px;\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLW5ld3Mvc2luZ2xlLW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQixFQUFFLHFCQUFxQjtJQUN0RCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1uZXdzL3NpbmdsZS1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2VyaWYgRGlzcGxheScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZF9wcm9wZXJ0aWVzIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWxpbmsge1xuICAgIGNvbG9yOiAjNEJBMEI1O1xufVxuXG4uZm9ybV9jb250e1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuXG4udGl0dGxlX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xufVxuXG4udGV4dF9kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXJfdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUGlyYXRhIE9uZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNjBweDtcbiAgICBcbn1cblxuXG4udXNlcl9pbWcge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEzNXB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgXG59XG5cbi51c2VyTmV3c19pbWcge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuLnVzZXJOZXdzX2JnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGNkYwO1xuICAgIFxufVxuXG4udXNlck5ld3NfY29udCB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdGZW5peCcsIHNlcmlmO1xufVxuXG4udGV4dGFyZWFfcHJvcCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEzM3B4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cblxuLmJ0bnNfcHJvcHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG59XG5cbi5jb250X3Byb3BlcnRpZXMge1xuICAgIG1hcmdpbjogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVhbE5ld3NfY2FyZCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMzNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/single-news/single-news.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/single-news/single-news.component.ts ***!
          \******************************************************/
        /*! exports provided: SingleNewsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNewsComponent", function () { return SingleNewsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var SingleNewsComponent = /** @class */ (function () {
                function SingleNewsComponent(_path, _data) {
                    var _this = this;
                    this._path = _path;
                    this._data = _data;
                    this.views = [true, false];
                    this.id = this._path.snapshot.params.id;
                    this._data.httpGet();
                    this.subscription = this._data.data.subscribe(function (objResult) {
                        var position = _this.id;
                        _this.post = objResult['articles'][position];
                    });
                }
                SingleNewsComponent.prototype.printText = function () {
                    console.log(this.textoUsuario);
                    this.userOutput = this.textoUsuario;
                };
                SingleNewsComponent.prototype.showView = function (valores) {
                    this.views = valores;
                };
                return SingleNewsComponent;
            }());
            SingleNewsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            SingleNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-single-news',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-news/single-news.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-news.component.css */ "./src/app/single-news/single-news.component.css")).default]
                })
            ], SingleNewsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/friday/Desktop/Neoland/02. Angular/news/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map