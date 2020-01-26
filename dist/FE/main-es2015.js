(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/Components/Content/about-me/about-me.module.ts": [
		"./src/app/Components/Content/about-me/about-me.module.ts",
		"src-app-Components-Content-about-me-about-me-module-ts"
	],
	"src/app/Components/Content/education/education.module.ts": [
		"./src/app/Components/Content/education/education.module.ts",
		"src-app-Components-Content-education-education-module-ts"
	],
	"src/app/Components/Content/jobs/jobs.module.ts": [
		"./src/app/Components/Content/jobs/jobs.module.ts",
		"src-app-Components-Content-jobs-jobs-module-ts"
	],
	"src/app/Components/Content/leave-message/leave-message.module.ts": [
		"./src/app/Components/Content/leave-message/leave-message.module.ts",
		"src-app-Components-Content-leave-message-leave-message-module-ts"
	],
	"src/app/Components/Content/references/references.module.ts": [
		"./src/app/Components/Content/references/references.module.ts",
		"src-app-Components-Content-references-references-module-ts"
	],
	"src/app/Components/Content/skills/skills.module.ts": [
		"./src/app/Components/Content/skills/skills.module.ts",
		"src-app-Components-Content-skills-skills-module-ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='appGlobalHeaderMainContainer' style='grid-area:appGlobalHeaderMainContainer'>\r\n    <app-header class='appGlobalHeader' #appGlobalHeader></app-header>\r\n    <canvas class='headerCanvas' id='headerCanvas' #headerCanvas></canvas>\r\n</div>\r\n<div class=\"appGlobalContent\" #GlobalContainer style='grid-area:appGlobalContent'>\r\n    <div class='appGlobalContentMain'>\r\n        <ng-container #about_me></ng-container>\r\n        <ng-container #skills></ng-container>\r\n        <ng-container #jobs></ng-container>\r\n        <ng-container #education></ng-container>\r\n        <ng-container #references></ng-container>\r\n        <ng-container #leave_message></ng-container>\r\n    </div>\r\n    <div class='appGlobalContentLoader'></div>\r\n</div>\r\n<div class=\"appGlobalMargin\" #GlobalLeftMargin style='grid-area:appGlobalMargin' id='appGlobalMargin'>\r\n    <canvas class=\"navBarCanvas\" id='navBarCanvas' #navBarCanvas></canvas>\r\n    <a class='categoriesUrl' *ngFor='let category of categories'\r\n        routerLink=\"{{'portfolio/' + category.url}}\">{{category[this.currentLocale + '_Title']}}<br></a>\r\n</div>\r\n<app-footer class=\"appGlobalFooter\" style='grid-area:appGlobalFooter'></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <button (click)='toggleLanguage()'>Toggle Language</button>\r\n    <input type='text'>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"appGlobalHeaderContainer\">\r\n    <div class=\"appGlobalHeaderContainerImage\">\r\n        <div></div>\r\n        <div><span></span></div>\r\n    </div>\r\n    <div class=\"appGlobalPhoneDetails\" style='display:none'>\r\n        <i class=\"fa fa-phone\"></i>\r\n        <div></div>\r\n    </div>\r\n    <div class=\"appGlobalHeaderContainerData\">\r\n        <div class='appGlobalHeaderContainerDataText name'>\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div class='appHeaderRowContent' *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata[currentLocale].intro_header_first_name}}\r\n                {{metadata[currentLocale].intro_header_last_name}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>{{metadata[currentLocale].intro_header_current_role}}</div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata[currentLocale].intro_header_phone_no}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata[currentLocale].intro_header_email}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata[currentLocale].intro_header_birth_date}}:\r\n                {{metadata[currentLocale].intro_header_birth_date}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata[currentLocale].intro_header_age}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</h1>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Classes/canvasSetup.ts":
/*!****************************************!*\
  !*** ./src/app/Classes/canvasSetup.ts ***!
  \****************************************/
/*! exports provided: CanvasSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSetup", function() { return CanvasSetup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CanvasSetup {
    constructor(navBarCanvas, headerCanvas) {
        this.navBarCanvas = navBarCanvas;
        this.headerCanvas = headerCanvas;
        this.navBar = {
            element: this.navBarCanvas,
            ctx: this.navBarCanvas.getContext('2d'),
            settings: {
                previousIndex: '',
                currentIndex: '',
                heightRef: '',
                pointsConfig: []
            },
            width: '',
            height: '',
            functionality: {
                drawMenuCanvas: () => void {}
            }
        };
        this.header = {
            element: this.headerCanvas,
            ctx: this.headerCanvas.getContext('2d'),
            functionality: {
                drawInitialCanvas: () => void {}
            }
        };
    }
}


/***/ }),

/***/ "./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/Content lazy ^\.\/.*\/.*\.module$ namespace object ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about-me/about-me.module": [
		"./src/app/Components/Content/about-me/about-me.module.ts",
		"src-app-Components-Content-about-me-about-me-module-ts"
	],
	"./education/education.module": [
		"./src/app/Components/Content/education/education.module.ts",
		"src-app-Components-Content-education-education-module-ts"
	],
	"./jobs/jobs.module": [
		"./src/app/Components/Content/jobs/jobs.module.ts",
		"src-app-Components-Content-jobs-jobs-module-ts"
	],
	"./leave-message/leave-message.module": [
		"./src/app/Components/Content/leave-message/leave-message.module.ts",
		"src-app-Components-Content-leave-message-leave-message-module-ts"
	],
	"./references/references.module": [
		"./src/app/Components/Content/references/references.module.ts",
		"src-app-Components-Content-references-references-module-ts"
	],
	"./skills/skills.module": [
		"./src/app/Components/Content/skills/skills.module.ts",
		"src-app-Components-Content-skills-skills-module-ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Components/Loaders/dynamic-component-loader.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Loaders/dynamic-component-loader.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicComponentLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentLoaderComponent", function() { return DynamicComponentLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicComponentLoaderComponent = class DynamicComponentLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
DynamicComponentLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-component-loader',
        template: `<div class='appGlobalContentLoader'>
      <div class="appGlobalContentLoaderAnimation"></div>
    </div>`,
        styles: [".appGlobalContentLoader {\n        display: block;\n        width  : 100%;\n        height : 10.4vh;\n        padding: 4px\n      }\n\n    .appGlobalContentLoaderAnimation {\n        width        : 100%;\n        height       : 100%;\n        animation    : 1.5s pulsate infinite ease-in-out;\n        border-radius: 5px;\n    }\n\n    @keyframes pulsate {\n      0% {\n        background: transparent;\n      }\n\n      50% {\n        background: lightblue;\n      }\n\n      100% {\n        background: transparent;\n      }\n    }\n    "]
    })
], DynamicComponentLoaderComponent);



/***/ }),

/***/ "./src/app/Components/Loaders/header-text-loader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Components/Loaders/header-text-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTextLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTextLoaderComponent", function() { return HeaderTextLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderTextLoaderComponent = class HeaderTextLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderTextLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-text-loader',
        template: `<div class='rectLoading'></div>`,
        styles: ["\n  .rectLoading {\n    background: linear-gradient(90deg,\n      deepskyblue,\n      transparent 50%,\n      transparent 55%,\n      deepskyblue 60%,\n      transparent 60%,\n      deepskyblue 60%);\n      border-radius: 30px;\n      animation    : slide 20s linear infinite;\n      position: relative;\n      width: 100%;\n      height:100%\n  }\n\n  @keyframes slide {\n    0% {\n      background-position: -1500px 0;\n    }\n\n    100% {\n      background-position: 1500px 0;\n    }\n  }\n  "]
    })
], HeaderTextLoaderComponent);



/***/ }),

/***/ "./src/app/Components/Root/app.component.scss":
/*!****************************************************!*\
  !*** ./src/app/Components/Root/app.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".categoriesUrl {\n  display: block;\n  width: 100%;\n  height: 10.4vh;\n  padding: 4px;\n  line-height: 10.4vh;\n  text-align: center;\n  text-decoration: none;\n  position: relative;\n  top: -100%;\n}\n\n.appGlobalHeader {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9Sb290L0U6XFxhbmd1bGFyUG9ydGZvbGlvXFxGRS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcUm9vdFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL1Jvb3QvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvUm9vdC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllc1VybCB7XHJcbiAgZGlzcGxheSAgICAgICAgOiBibG9jaztcclxuICB3aWR0aCAgICAgICAgICA6IDEwMCU7XHJcbiAgaGVpZ2h0ICAgICAgICAgOiAxMC40dmg7XHJcbiAgcGFkZGluZyAgICAgICAgOiA0cHg7XHJcbiAgbGluZS1oZWlnaHQgICAgOiAxMC40dmg7XHJcbiAgdGV4dC1hbGlnbiAgICAgOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uICAgICAgIDogcmVsYXRpdmU7XHJcbiAgdG9wICAgICAgICAgICAgOiAtMTAwJTtcclxufVxyXG5cclxuLmFwcEdsb2JhbEhlYWRlciB7XHJcbiAgZ3JpZC1jb2x1bW4gICAgICAgICAgOiAxO1xyXG4gIGdyaWQtcm93ICAgICAgICAgICAgIDogMTtcclxuICBtYXJnaW4gICAgICAgICAgICAgICA6IDA7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93cyAgIDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbn0iLCIuY2F0ZWdvcmllc1VybCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMC40dmg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbGluZS1oZWlnaHQ6IDEwLjR2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTAwJTtcbn1cblxuLmFwcEdsb2JhbEhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/Root/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Components/Root/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/init.service */ "./src/app/Services/init.service.ts");
/* harmony import */ var _Services_locale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/locale.service */ "./src/app/Services/locale.service.ts");
/* harmony import */ var src_app_Services_url_listener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/url-listener.service */ "./src/app/Services/url-listener.service.ts");





let AppComponent = class AppComponent {
    constructor(localeService, initService, domRootElementRef, urlListenerService) {
        this.localeService = localeService;
        this.initService = initService;
        this.domRootElementRef = domRootElementRef;
        this.urlListenerService = urlListenerService;
        this.title = 'ads';
        this.categories = [];
        this.currentLocale = 'en_US';
        this.loadedCSS = false;
        this.localeService.getCurrentLocale().subscribe((localeValue) => {
            this.categories = [];
            for (const localeValueProps in localeValue.categoriesTitle) {
                this.categories.push(localeValue.categoriesTitle[localeValueProps]);
            }
            this.currentLocale = localeValue.locale;
        });
    }
    ngOnInit() {
        this.urlListenerService.syncLazyLoadWithUrlListening({
            about_me: this.about_me,
            skills: this.skills,
            jobs: this.jobs,
            education: this.education,
            references: this.references,
            leave_message: this.leave_message
        });
        this.urlListenerService.listen();
        this.initService.init(this.domRootElementRef, true);
    }
    ngAfterViewInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _Services_locale_service__WEBPACK_IMPORTED_MODULE_3__["LocaleService"] },
    { type: _Services_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: src_app_Services_url_listener_service__WEBPACK_IMPORTED_MODULE_4__["UrlListenerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('about_me', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "about_me", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('skills', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "skills", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jobs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "jobs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('education', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "education", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('references', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "references", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leave_message', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], AppComponent.prototype, "leave_message", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html")).default,
        host: {
            "id": "appGlobalGrid",
            'class': 'extended'
        },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/Components/Root/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/Components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_locale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/locale.service */ "./src/app/Services/locale.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");




let FooterComponent = class FooterComponent {
    constructor(locale, dataService) {
        this.locale = locale;
        this.dataService = dataService;
    }
    ngOnInit() {
    }
    toggleLanguage() {
        this.dataService.setCurrentRouteDataUsingLang(this.locale.setCurrentLocale());
    }
};
FooterComponent.ctorParameters = () => [
    { type: _Services_locale_service__WEBPACK_IMPORTED_MODULE_2__["LocaleService"] },
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/Components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appGlobalHeaderContainerData {\n  grid-template-rows: 30fr repeat(5, 14fr);\n}\n\n.appGlobalHeaderContainer {\n  z-index: 1;\n  display: grid;\n  font-weight: normal;\n  margin: 0;\n}\n\n.appGlobalHeaderContainerImage div {\n  grid-column: 2;\n  grid-row: 2;\n}\n\n.appGlobalHeaderContainerImage div:nth-child(1) {\n  border-radius: 50%;\n  background: linear-gradient(deepskyblue, dodgerblue, dodgerblue, dodgerblue, deepskyblue);\n  -webkit-animation: 2s spiiiin linear infinite;\n  animation: 2s spiiiin linear infinite;\n}\n\n.appGlobalHeaderContainerImage div:nth-child(2) span {\n  background: deepskyblue;\n  grid-row: 2;\n  grid-column: 2;\n  z-index: 1;\n  border-radius: 50%;\n}\n\n.appGlobalHeaderContainerData {\n  display: grid;\n  text-align: right;\n  font-family: \"open sans\";\n  align-items: center;\n  font-size: 1rem;\n}\n\n.appGlobalHeaderContainerDataText {\n  grid-column: 2;\n  width: 100%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvRTpcXGFuZ3VsYXJQb3J0Zm9saW9cXEZFL3NyY1xcYXBwXFxDb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5RkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwZnIgcmVwZWF0KDUsIDE0ZnIpO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVyIHtcclxuICB6LWluZGV4ICAgIDogMTtcclxuICBkaXNwbGF5ICAgIDogZ3JpZDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbiAgICAgOiAwXHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXYge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93ICAgOiAyO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVySW1hZ2UgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICA6IDUwJTtcclxuICBiYWNrZ3JvdW5kICAgICAgIDogbGluZWFyLWdyYWRpZW50KGRlZXBza3libHVlLCBkb2RnZXJibHVlLCBkb2RnZXJibHVlLCBkb2RnZXJibHVlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IDJzIHNwaWlpaW4gbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbiAgICAgICAgOiAycyBzcGlpaWluIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lckltYWdlIGRpdjpudGgtY2hpbGQoMikgc3BhbiB7XHJcbiAgYmFja2dyb3VuZCAgIDogZGVlcHNreWJsdWU7XHJcbiAgZ3JpZC1yb3cgICAgIDogMjtcclxuICBncmlkLWNvbHVtbiAgOiAyO1xyXG4gIHotaW5kZXggICAgICA6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVyRGF0YSB7XHJcbiAgZGlzcGxheSAgICA6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbiA6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplICA6IDFyZW07XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhVGV4dCB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgd2lkdGggICAgICA6IDEwMCU7XHJcbiAgaGVpZ2h0ICAgICA6IDUwJTtcclxufSIsIi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMGZyIHJlcGVhdCg1LCAxNGZyKTtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lckltYWdlIGRpdiB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lckltYWdlIGRpdjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChkZWVwc2t5Ymx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZGVlcHNreWJsdWUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMnMgc3BpaWlpbiBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogMnMgc3BpaWlpbiBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXY6bnRoLWNoaWxkKDIpIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiBkZWVwc2t5Ymx1ZTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAyO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhVGV4dCB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.loadingHeader = true;
        this.dataService.getRoutesMetadata().subscribe((componentsMetadata) => {
            console.log('mtd', componentsMetadata);
            this.loadingHeader = false;
            this.currentLocale = componentsMetadata.currentLocale;
            this.metadata[this.currentLocale] = componentsMetadata.header[this.currentLocale];
        });
    }
    ngOnInit() { }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('headerMetadata') &&
            changes.headerMetadata.previousValue !== undefined &&
            changes.headerMetadata.isFirstChange)
            this.loadingHeader = false;
    }
    ObjectKeys(obj) {
        return Object.keys(obj);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ display: 'block', opacity: '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ display: 'block', opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/Components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/Services/canvas.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/canvas.service.ts ***!
  \********************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CanvasService = class CanvasService {
};
CanvasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanvasService);



/***/ }),

/***/ "./src/app/Services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_Services_locale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/locale.service */ "./src/app/Services/locale.service.ts");
/* harmony import */ var _lazy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy.service */ "./src/app/Services/lazy.service.ts");






let DataService = class DataService {
    constructor(httpService, localeService, lazyService) {
        this.httpService = httpService;
        this.localeService = localeService;
        this.lazyService = lazyService;
        this.componentsMetadata = {
            header: { ro_RO: undefined, en_US: undefined },
            components: {
                about_me: { ro_RO: undefined, en_US: undefined },
                skills: { ro_RO: undefined, en_US: undefined },
                jobs: { ro_RO: undefined, en_US: undefined },
                education: { ro_RO: undefined, en_US: undefined },
                references: { ro_RO: undefined, en_US: undefined },
                leave_message: { ro_RO: undefined, en_US: undefined }
            },
            footer: { ro_RO: undefined, en_US: undefined },
            dataToFetch: '',
            currentLocale: ''
        };
        this.componentsMetadata$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isInitialLoad = {
            ro_RO: true,
            en_US: true
        };
        this.localeService.getCurrentLocale().subscribe((localeValue) => {
            this.componentsMetadata.currentLocale = localeValue.locale;
        });
    }
    setCurrentRouteDataUsingLang(locale) {
        this.componentsMetadata.currentLocale = locale;
        this.setCurrentRouteDataUsingUrl(this.componentsMetadata.dataToFetch);
    }
    setCurrentRouteDataUsingUrl(dataToFetch) {
        const locale = this.componentsMetadata.currentLocale;
        const templateKeys = Object.keys(this.componentsMetadata.components);
        const componentIndex = templateKeys.indexOf(dataToFetch);
        const currentLoadStatusIsInitial = this.isInitialLoad[locale];
        if (this.componentsMetadata.components[templateKeys[componentIndex - 1 === -1 ? 0 : componentIndex - 1]][locale] !== undefined &&
            this.componentsMetadata.components[templateKeys[componentIndex]][locale] !== undefined &&
            this.componentsMetadata.components[templateKeys[componentIndex + 1 === templateKeys.length ? componentIndex : componentIndex + 1]][locale] !== undefined)
            return this.componentsMetadata$.next(this.componentsMetadata);
        this.httpService.doGetRequest("/", {
            locale: locale,
            dataToFetch: dataToFetch,
            isInitialLoad: this.isInitialLoad[this.componentsMetadata.currentLocale]
        })
            .then((feData) => {
            console.log(feData);
            this.componentsMetadata.dataToFetch = dataToFetch;
            const currentMetadata = feData;
            if (currentLoadStatusIsInitial) {
                this.componentsMetadata.header[locale] = currentMetadata.headerData;
                this.componentsMetadata.footer[locale] = currentMetadata.footerData;
                this.isInitialLoad[locale] = false;
            }
            for (const componentKey in currentMetadata.componentsData) {
                const key = componentKey;
                if (this.componentsMetadata.components[key][locale] === undefined) {
                    this.componentsMetadata.components[key][locale] = currentMetadata.componentsData[key];
                }
            }
            this.lazyService.load(dataToFetch).then(() => {
                this.componentsMetadata$.next(this.componentsMetadata);
            });
        })
            .catch(e => {
            console.log(e);
        });
    }
    getRoutesMetadata() {
        return this.componentsMetadata$;
    }
};
DataService.ctorParameters = () => [
    { type: src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_Services_locale_service__WEBPACK_IMPORTED_MODULE_4__["LocaleService"] },
    { type: _lazy_service__WEBPACK_IMPORTED_MODULE_5__["LazyService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/Services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.doGetRequest = (url, body) => {
            return new Promise((res, rej) => {
                this.http.get(`http://localhost:8080/api${url}`, {
                    params: body
                }).subscribe(value => {
                    res(value);
                });
            });
        };
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/Services/init.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/init.service.ts ***!
  \******************************************/
/*! exports provided: InitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitService", function() { return InitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _Classes_canvasSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Classes/canvasSetup */ "./src/app/Classes/canvasSetup.ts");
/* harmony import */ var _canvas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas.service */ "./src/app/Services/canvas.service.ts");





let InitService = class InitService {
    constructor(canvasService, _document) {
        this.canvasService = canvasService;
        this._document = _document;
        this.wasInit = false;
        this.viewport = {
            activeOrientation: '',
            inactiveOrientation: '',
            CSS: {
                portrait: {
                    loaded: false,
                    element: this._document.querySelector("#portrait-style")
                },
                landscape: {
                    loaded: false,
                    element: this._document.querySelector("#landscape-style")
                }
            }
        };
    }
    init(domRootElementRef, isInit) {
        this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
        this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
        this.enableCurrentOrientationCSS(domRootElementRef)
            .then(() => {
            if (isInit) {
                this.canvasSetup = new _Classes_canvasSetup__WEBPACK_IMPORTED_MODULE_3__["CanvasSetup"](this._document.querySelector('#navBarCanvas'), this._document.querySelector('#navBarCanvas'));
                this.setScrollEvent();
                this.setResizeEvent(domRootElementRef);
                this.wasInit = true;
            }
            this.canvasInit();
        })
            .catch(() => {
            //load error here (usually most probably because internet connection)
        });
        // initialSetup.urlSubscription.subscribe(url => { if (url.dataToFetch !== null) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url.dataToFetch); });
        // this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas);
        // this.canvasObj = this.canvasService.getCanvas();
        // this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef;
    }
    canvasInit() {
    }
    setAppStyle(domRootElementRef) {
        if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
            this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
            this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
            if (this.viewport.CSS[this.viewport.activeOrientation].loaded === false) {
                this.toggleGlobalLoading(true);
            }
        }
        this.enableCurrentOrientationCSS(domRootElementRef).then(() => { this.canvasInit(); });
    }
    enableCurrentOrientationCSS(domRootElementRef, count) {
        domRootElementRef.nativeElement.style.width = `${this._document.documentElement.clientWidth}px`;
        domRootElementRef.nativeElement.style.height = `${this._document.documentElement.clientHeight}px`;
        const self = this;
        const activeOrientation = this.viewport.activeOrientation;
        const inactiveOrientation = this.viewport.inactiveOrientation;
        return new Promise((resolve, reject) => {
            if (this.viewport.CSS[activeOrientation].element.href === '') {
                this.viewport.CSS[activeOrientation].element.href = `${this.viewport.activeOrientation}-css.css`;
                this.viewport.CSS[activeOrientation].element.disabled = false;
                this.viewport.CSS[activeOrientation].element.addEventListener('load', () => {
                    this.viewport.CSS[activeOrientation].loaded = true;
                    this.toggleGlobalLoading();
                    onSuccesfullCSSLoad(true);
                });
                this.viewport.CSS[activeOrientation].element.addEventListener('error', () => {
                    setTimeout(() => {
                        if (count === 10)
                            return this.enableCurrentOrientationCSS(domRootElementRef, count ? 0 : count++);
                        reject();
                    }, 500);
                });
            }
            else {
                onSuccesfullCSSLoad();
            }
            function onSuccesfullCSSLoad(currentLayoutJustLoaded) {
                if (currentLayoutJustLoaded) {
                    self.viewport.CSS[inactiveOrientation].element.disabled = true;
                }
                else {
                    self.viewport.CSS[activeOrientation].element.disabled = false;
                    self.viewport.CSS[inactiveOrientation].element.disabled = true;
                }
                resolve();
            }
        });
    }
    setScrollEvent() {
        const self = this;
        let touchStartY;
        window.onwheel = (event) => {
            toggleHeader(event);
        };
        // if (window.ontouchmove === null) {
        //   window.ontouchstart = (event: TouchEvent) => {
        //     touchStartY = event.touches[0].clientY;
        //   };
        //   window.ontouchend = (event: TouchEvent) => {
        //     toggleHeader(event);
        //   }
        // }
        function toggleHeader(event) {
            self._document.querySelector("#appGlobalGrid").className = (() => {
                if (event instanceof WheelEvent) {
                    return event.deltaY > 0 ? 'contracted' : "extended";
                }
                else if (event instanceof TouchEvent) {
                    return touchStartY > event.changedTouches[0].clientY ? 'contracted' : "extended";
                }
                else {
                    return '';
                }
            })();
        }
    }
    setResizeEvent(root) {
        window.onresize = () => {
            if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
                this.setAppStyle(root);
            }
            setTimeout(() => { this.setAppStyle(root); }, 100);
        };
    }
    toggleGlobalLoading(displayLoading) {
        if (displayLoading) {
            this._document.querySelector("#appGlobalLoader").classList.toggle('active');
        }
        else {
            setTimeout(() => {
                this._document.querySelector("#appGlobalLoader").classList.toggle('active');
            }, 500);
        }
    }
};
InitService.ctorParameters = () => [
    { type: _canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], InitService);



/***/ }),

/***/ "./src/app/Services/lazy.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/lazy.service.ts ***!
  \******************************************/
/*! exports provided: LazyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyService", function() { return LazyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyService = class LazyService {
    constructor(c) {
        this.c = c;
        this.componentsTemplate = {
            about_me: { path: 'about-me', module: 'AboutMeModule', containerRef: undefined, isLoaded: false },
            skills: { path: 'skills', module: 'SkillsModule', containerRef: undefined, isLoaded: false },
            jobs: { path: 'jobs', module: 'JobsModule', containerRef: undefined, isLoaded: false },
            education: { path: 'education', module: 'EducationModule', containerRef: undefined, isLoaded: false },
            references: { path: 'references', module: 'ReferencesModule', containerRef: undefined, isLoaded: false },
            leave_message: { path: 'leave-message', module: 'LeaveMessageModule', containerRef: undefined, isLoaded: false }
        };
    }
    load(currentUrl) {
        return new Promise((resolve) => {
            const currentComponentsToLoad = this.componentsToLoad(currentUrl);
            const loadedComponents = [];
            for (const componentName of currentComponentsToLoad) {
                const path = this.componentsTemplate[componentName].path;
                const key = componentName;
                const module = this.componentsTemplate[key].module;
                loadedComponents.push(__webpack_require__("./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$")(`./${path}/${path}.module`).then((m) => {
                    const moduleInstance = this.c.compileModuleAndAllComponentsSync(m[module]).componentFactories[0];
                    this.componentsTemplate[key].containerRef.createComponent(moduleInstance);
                    this.componentsTemplate[key].isLoaded = true;
                }));
            }
            Promise.all(loadedComponents).then(() => resolve());
        });
    }
    componentsToLoad(middleComponent) {
        const componentsTemplateKeys = Object.keys(this.componentsTemplate);
        return componentsTemplateKeys.filter((componentName, index) => {
            if ((componentName === middleComponent ||
                componentsTemplateKeys.indexOf(middleComponent) === index - 1 ||
                componentsTemplateKeys.indexOf(middleComponent) === index + 1) &&
                this.componentsTemplate[componentName].isLoaded === false)
                return componentName;
        });
    }
    setContainerRefs(containerRefs) {
        for (const containerRef in containerRefs) {
            this.componentsTemplate[containerRef].containerRef = containerRefs[containerRef];
        }
    }
};
LazyService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] }
];
LazyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LazyService);



/***/ }),

/***/ "./src/app/Services/locale.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/locale.service.ts ***!
  \********************************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LocaleService = class LocaleService {
    constructor() {
        this.currentLocale$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            locale: 'en_US',
            categoriesTitle: {
                about_me: {
                    ro_RO_Title: 'Despre Mine',
                    en_US_Title: 'About Me',
                    url: 'about-me'
                },
                skills: {
                    ro_RO_Title: 'Aptitudini',
                    en_US_Title: 'Skills',
                    url: 'skills'
                },
                jobs: {
                    ro_RO_Title: 'Experienta Profesionala',
                    en_US_Title: 'Jobs',
                    url: 'jobs'
                },
                education: {
                    ro_RO_Title: 'Educatie',
                    en_US_Title: 'Education',
                    url: 'education'
                },
                references: {
                    ro_RO_Title: 'Referinte',
                    en_US_Title: 'References',
                    url: 'references'
                },
                leave_message: {
                    ro_RO_Title: 'Lasati Un Mesaj',
                    en_US_Title: 'Leave Message',
                    url: 'leave-message'
                }
            }
        });
    }
    getCurrentLocale() { return this.currentLocale$; }
    ;
    setCurrentLocale() {
        const currentLocaleValue = this.currentLocale$.value;
        currentLocaleValue.locale = currentLocaleValue.locale === 'ro_RO' ? 'en_US' : 'ro_RO';
        this.currentLocale$.next(currentLocaleValue);
        return currentLocaleValue.locale;
    }
    ;
};
LocaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocaleService);



/***/ }),

/***/ "./src/app/Services/url-listener.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/url-listener.service.ts ***!
  \**************************************************/
/*! exports provided: UrlListenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlListenerService", function() { return UrlListenerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var _lazy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy.service */ "./src/app/Services/lazy.service.ts");







let UrlListenerService = class UrlListenerService {
    constructor(router, dataService, lazyService) {
        this.router = router;
        this.dataService = dataService;
        this.lazyService = lazyService;
        this.urlSubscriptionBehaviorSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            dataToFetch: 'about_me',
            path: 'about-me'
        });
    }
    syncLazyLoadWithUrlListening(containerRefs) {
        this.lazyService.setContainerRefs(containerRefs);
    }
    listen() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(event => {
            this.urlSubscriptionBehaviorSubject$.next({
                dataToFetch: event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : event.url.replace('-', '_'),
                path: event["url"].replace("/portfolio/", "")
            });
            this.dataService.setCurrentRouteDataUsingUrl(this.urlSubscriptionBehaviorSubject$.value.dataToFetch);
        });
    }
};
UrlListenerService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _lazy_service__WEBPACK_IMPORTED_MODULE_6__["LazyService"] }
];
UrlListenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UrlListenerService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Root/app.component */ "./src/app/Components/Root/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_Loaders_dynamic_component_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Loaders/dynamic-component-loader.component */ "./src/app/Components/Loaders/dynamic-component-loader.component.ts");
/* harmony import */ var _Components_Loaders_header_text_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Loaders/header-text-loader.component */ "./src/app/Components/Loaders/header-text-loader.component.ts");












const AppRoutes = [
    {
        path: "",
        redirectTo: "portfolio/about-me",
        pathMatch: "full"
    }, {
        path: "portfolio",
        redirectTo: "portfolio/about-me",
        pathMatch: "full"
    },
    {
        path: "portfolio",
        component: _Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        children: [{
                path: 'about-me',
                children: []
            }, {
                path: "skills",
                children: []
            }, {
                path: "jobs",
                children: []
            }, {
                path: "education",
                children: []
            }, {
                path: "references",
                children: []
            }, {
                path: "leave-message",
                children: []
            }]
    },
    {
        path: "*",
        redirectTo: "portfolio/about-me",
        pathMatch: "full"
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _Components_Loaders_dynamic_component_loader_component__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentLoaderComponent"],
            _Components_Loaders_header_text_loader_component__WEBPACK_IMPORTED_MODULE_11__["HeaderTextLoaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(AppRoutes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/environments/environment.ts":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/environments/environment */ "./src/app/environments/environment.ts");





if (_app_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angularPortfolio\FE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map