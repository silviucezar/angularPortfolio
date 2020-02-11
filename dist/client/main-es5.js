function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "src/app/Components/Content/about-me/about-me.module.ts": ["./src/app/Components/Content/about-me/about-me.module.ts", "src-app-Components-Content-about-me-about-me-module-ts"],
      "src/app/Components/Content/education/education.module.ts": ["./src/app/Components/Content/education/education.module.ts", "src-app-Components-Content-education-education-module-ts"],
      "src/app/Components/Content/jobs/jobs.module.ts": ["./src/app/Components/Content/jobs/jobs.module.ts", "common", "src-app-Components-Content-jobs-jobs-module-ts"],
      "src/app/Components/Content/leave-message/leave-message.module.ts": ["./src/app/Components/Content/leave-message/leave-message.module.ts", "src-app-Components-Content-leave-message-leave-message-module-ts"],
      "src/app/Components/Content/references/references.module.ts": ["./src/app/Components/Content/references/references.module.ts", "src-app-Components-Content-references-references-module-ts"],
      "src/app/Components/Content/skills/skills.module.ts": ["./src/app/Components/Content/skills/skills.module.ts", "common", "src-app-Components-Content-skills-skills-module-ts"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRootAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='skillsJobsModal' [ngClass]='{\"active\" : (skillsState) || (jobsState)}'>\r\n    <div class='skillsModalTabs'>\r\n        <a routerLink='portfolio/skills' class='skillsJobsToggle' style='grid-column:1'\r\n            [ngClass]='{\"modalTabsActiveRoute\" : currentUrl === \"skills\"}'>{{locale === 'ro_RO' ? 'Aptitudini' : 'Skills'}}</a>\r\n        <a routerLink='portfolio/jobs' class='skillsJobsToggle' style='grid-column:2'\r\n            [ngClass]='{\"modalTabsActiveRoute\" : currentUrl === \"jobs\"}'>{{locale === 'ro_RO' ? 'Joburi' : 'Jobs'}}</a>\r\n        <a [routerLink]='\"portfolio/\" + pageLogic.previousUrl' class='skillsJobsToggle' class='closeBtn modalBtn'></a>\r\n        <div [ngClass]='{\"activeModalGrid\": skillsState,\"inactiveModalGrid\": !skillsState }'>\r\n            <ng-container #skills></ng-container>\r\n        </div>\r\n        <div [ngClass]='{\"activeModalGrid\": jobsState,\"inactiveModalGrid\": !jobsState }'>\r\n            <ng-container #jobs></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class='appGlobalHeaderMainContainer' style='grid-area:appGlobalHeaderMainContainer'>\r\n    <app-header class='appGlobalHeader' [metadata]='headerMetadata[locale]'></app-header>\r\n</div>\r\n<div class=\"appGlobalContent\" #appGlobalContent>\r\n    <ng-container #about_me></ng-container>\r\n    <div class='fadeMeIn'>\r\n        <a routerLink='portfolio/skills' class='skillsJobsToggle contentButton'\r\n            (click)='pageLogic.setPreviousUrl(currentUrl)' style>{{menuMetadata[locale] ? menuMetadata[locale][1] : ''}}</a>\r\n        <a routerLink='portfolio/jobs' class='skillsJobsToggle contentButton'\r\n            (click)='pageLogic.setPreviousUrl(currentUrl)'>{{menuMetadata[locale] ? menuMetadata[locale][2] : ''}}</a>\r\n    </div>\r\n    <ng-container #education></ng-container>\r\n    <ng-container #references></ng-container>\r\n    <ng-container #leave_message></ng-container>\r\n</div>\r\n<div class=\"appGlobalMargin\" id='appGlobalMargin'>\r\n    <a [ngClass]='{\"current\" : currentUrl === \"about-me\"}' routerLink=\"{{'portfolio/about-me'}}\" class='categoriesUrl'>\r\n        {{menuMetadata[locale] ? menuMetadata[locale][0] : ''}}\r\n    </a>\r\n    <a [ngClass]='{\"current\" : currentUrl === \"education\"}' routerLink=\"{{'portfolio/education'}}\"\r\n        class='categoriesUrl'>\r\n        {{menuMetadata[locale] ? menuMetadata[locale][3] : ''}}\r\n    </a>\r\n    <a [ngClass]='{\"current\" : currentUrl === \"references\"}' routerLink=\"{{'portfolio/references'}}\"\r\n        class='categoriesUrl'>\r\n        {{menuMetadata[locale] ? menuMetadata[locale][4] : ''}}\r\n    </a>\r\n    <a [ngClass]='{\"current\" : currentUrl === \"leave-message\"}' routerLink=\"{{'portfolio/leave-message'}}\"\r\n        class='categoriesUrl'>\r\n        {{menuMetadata[locale] ? menuMetadata[locale][5] : ''}}\r\n    </a>\r\n</div>\r\n<app-footer class=\"appGlobalFooter\" style='grid-area:appGlobalFooter' [metadata]='footerMetadata[locale]'\r\n    [locale]='locale'></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-dynamic-component-loader class='loader' [ngClass]='{\"active\" : loadingMetadata}'>\r\n</app-dynamic-component-loader>\r\n<div class='toggleLocaleStyle' (click)='toggleLanguage()'>\r\n    <div class='localeImage icon' [ngClass]='locale'></div>\r\n</div>\r\n<div class='contactIcon' [ngClass]='{\"closeBtn\" : isContactActive}' (click)='toggleContact()'></div>\r\n<div class='contactContainer icon'>\r\n    <a class='phone commonButtonClass icon' href='tel:{{metadata?.phone_no}}'></a>\r\n    <a class='linkedin commonButtonClass icon' target='_blank' [href]='metadata?.linked_in'></a>\r\n    <a class='downloadcv commonButtonClass icon'></a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"appGlobalHeaderContainer\">\r\n    <div class=\"appGlobalHeaderContainerImage\">\r\n        <div class='rotateDiv' [ngClass]='{\"inactive\" : metadata}'></div>\r\n        <div><img [src]='\"./app/assets/\" + metadata?.intro_header_image' alt='I'/></div>\r\n    </div>\r\n    <div class=\"appGlobalHeaderContainerData\">\r\n        <div class='appGlobalHeaderContainerDataText name'>\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div class='appHeaderRowContent' *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata?.intro_header_first_name}}\r\n                {{metadata?.intro_header_last_name}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>{{metadata?.intro_header_current_role}}</div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata?.intro_header_phone_no}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata?.intro_header_email}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata?.intro_header_birth_date}}\r\n            </div>\r\n        </div>\r\n        <div class=\"contractedHeaderHiddenData appGlobalHeaderContainerDataText\">\r\n            <app-header-text-loader *ngIf='loadingHeader' [@fadeInOut]></app-header-text-loader>\r\n            <div *ngIf='!loadingHeader' [@fadeInOut]>\r\n                {{metadata?.intro_header_age}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</h1>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$":
  /*!*******************************************************************************!*\
    !*** ./src/app/Components/Content lazy ^\.\/.*\/.*\.module$ namespace object ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppComponentsContentLazyRecursiveModule$(module, exports, __webpack_require__) {
    var map = {
      "./about-me/about-me.module": ["./src/app/Components/Content/about-me/about-me.module.ts", "src-app-Components-Content-about-me-about-me-module-ts"],
      "./education/education.module": ["./src/app/Components/Content/education/education.module.ts", "src-app-Components-Content-education-education-module-ts"],
      "./jobs/jobs.module": ["./src/app/Components/Content/jobs/jobs.module.ts", "common", "src-app-Components-Content-jobs-jobs-module-ts"],
      "./leave-message/leave-message.module": ["./src/app/Components/Content/leave-message/leave-message.module.ts", "src-app-Components-Content-leave-message-leave-message-module-ts"],
      "./references/references.module": ["./src/app/Components/Content/references/references.module.ts", "src-app-Components-Content-references-references-module-ts"],
      "./skills/skills.module": ["./src/app/Components/Content/skills/skills.module.ts", "common", "src-app-Components-Content-skills-skills-module-ts"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/Components/Loaders/dynamic-component-loader.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Components/Loaders/dynamic-component-loader.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DynamicComponentLoaderComponent */

  /***/
  function srcAppComponentsLoadersDynamicComponentLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicComponentLoaderComponent", function () {
      return DynamicComponentLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DynamicComponentLoaderComponent =
    /*#__PURE__*/
    function () {
      function DynamicComponentLoaderComponent() {
        _classCallCheck(this, DynamicComponentLoaderComponent);
      }

      _createClass(DynamicComponentLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DynamicComponentLoaderComponent;
    }();

    DynamicComponentLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dynamic-component-loader',
      template: '',
      styles: [":host {\n      position        : relative;\n      width           : 100%;\n      height          : 100%;\n      top             : 0;\n      left            : 0;\n      background-size : cover;\n      animation: 1s rotate linear infinite\n    }\n\n    @keyframes rotate {\n      from {\n        transform:rotate(0deg);\n      }\n\n      to {\n        transform:rotate(360deg);\n      }\n    }\n    "]
    })], DynamicComponentLoaderComponent);
    /***/
  },

  /***/
  "./src/app/Components/Loaders/header-text-loader.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/Loaders/header-text-loader.component.ts ***!
    \********************************************************************/

  /*! exports provided: HeaderTextLoaderComponent */

  /***/
  function srcAppComponentsLoadersHeaderTextLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderTextLoaderComponent", function () {
      return HeaderTextLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderTextLoaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderTextLoaderComponent() {
        _classCallCheck(this, HeaderTextLoaderComponent);
      }

      _createClass(HeaderTextLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderTextLoaderComponent;
    }();

    HeaderTextLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-text-loader',
      template: "<div class='rectLoading'></div>",
      styles: ["\n  .rectLoading {\n    background: linear-gradient(90deg,\n      deepskyblue,\n      transparent 50%,\n      transparent 55%,\n      deepskyblue 60%,\n      transparent 60%,\n      deepskyblue 60%);\n      border-radius: 30px;\n      animation    : slide 20s linear infinite;\n      position: relative;\n      width: 100%;\n      height:100%\n  }\n\n  @keyframes slide {\n    0% {\n      background-position: -1500px 0;\n    }\n\n    100% {\n      background-position: 1500px 0;\n    }\n  }\n  "]
    })], HeaderTextLoaderComponent);
    /***/
  },

  /***/
  "./src/app/Components/Root/app.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/Components/Root/app.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRootAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: white;\n  text-decoration: none;\n}\n\n.categoriesUrl {\n  display: block;\n  width: 90%;\n  height: 95%;\n  text-align: center;\n  line-height: 7.5vmin;\n  position: relative;\n  left: 5%;\n}\n\n.current {\n  font-size: 16px;\n}\n\n.categoriesUrl:before,\n.categoriesUrl:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 85%;\n  top: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  left: 0;\n}\n\n.categoriesUrl:before,\n.current:before {\n  border-top: 2px solid #9ee8dc;\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.categoriesUrl:after,\n.current:after {\n  border-bottom: 2px solid #9ee8dc;\n  right: 0;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.categoriesUrl:hover:before,\n.categoriesUrl:hover:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.current:before,\n.current:after {\n  border-top: 2px solid #534aff;\n  border-bottom: 2px solid #534aff;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.appGlobalContent {\n  grid-area: appGlobalContent;\n  overflow: hidden;\n}\n\n.appGlobalMargin {\n  grid-area: appGlobalMargin;\n  display: grid;\n  grid-template-rows: repeat(6, 8vmin);\n}\n\n.appGlobalHeader {\n  grid-column: 1;\n  grid-row: 1;\n  margin: 0;\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: 100%;\n}\n\n.appGlobalFooter {\n  position: relative;\n  display: inline-block;\n  line-height: 30px;\n  text-align: center;\n  z-index: 4;\n  display: grid;\n  padding: 15px;\n  grid-template-columns: repeat(3, 30px) auto;\n  grid-gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9Sb290L0U6XFxhbmd1bGFyUG9ydGZvbGlvXFxGRS9zcmNcXGFwcFxcQ29tcG9uZW50c1xcUm9vdFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL1Jvb3QvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVBOztFQUVFLDZCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0NGOztBREVBOztFQUVFLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTs7RUFFRSwyQkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL1Jvb3QvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXNVcmwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA3LjV2bWluO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1JTtcclxufVxyXG5cclxuLmN1cnJlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXNVcmw6YmVmb3JlLFxyXG4uY2F0ZWdvcmllc1VybDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllc1VybDpiZWZvcmUsXHJcbi5jdXJyZW50OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM5ZWU4ZGM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzVXJsOmFmdGVyLFxyXG4uY3VycmVudDphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5ZWU4ZGM7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllc1VybDpob3ZlcjpiZWZvcmUsXHJcbi5jYXRlZ29yaWVzVXJsOmhvdmVyOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uY3VycmVudDpiZWZvcmUsXHJcbi5jdXJyZW50OmFmdGVyIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzUzNGFmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUzNGFmZjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxDb250ZW50IHtcclxuICBncmlkLWFyZWE6IGFwcEdsb2JhbENvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFwcEdsb2JhbE1hcmdpbiB7XHJcbiAgZ3JpZC1hcmVhOiBhcHBHbG9iYWxNYXJnaW47XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCA4dm1pbik7XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxGb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwcHgpIGF1dG87XHJcbiAgZ3JpZC1nYXA6IDE1cHg7XHJcbn1cclxuIiwiYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2F0ZWdvcmllc1VybCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNy41dm1pbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1JTtcbn1cblxuLmN1cnJlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXRlZ29yaWVzVXJsOmJlZm9yZSxcbi5jYXRlZ29yaWVzVXJsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODUlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGxlZnQ6IDA7XG59XG5cbi5jYXRlZ29yaWVzVXJsOmJlZm9yZSxcbi5jdXJyZW50OmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjOWVlOGRjO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbn1cblxuLmNhdGVnb3JpZXNVcmw6YWZ0ZXIsXG4uY3VycmVudDphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOWVlOGRjO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xufVxuXG4uY2F0ZWdvcmllc1VybDpob3ZlcjpiZWZvcmUsXG4uY2F0ZWdvcmllc1VybDpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5jdXJyZW50OmJlZm9yZSxcbi5jdXJyZW50OmFmdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM1MzRhZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTM0YWZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYXBwR2xvYmFsQ29udGVudCB7XG4gIGdyaWQtYXJlYTogYXBwR2xvYmFsQ29udGVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFwcEdsb2JhbE1hcmdpbiB7XG4gIGdyaWQtYXJlYTogYXBwR2xvYmFsTWFyZ2luO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCA4dm1pbik7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG59XG5cbi5hcHBHbG9iYWxGb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogNDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzBweCkgYXV0bztcbiAgZ3JpZC1nYXA6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/Root/app.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/Components/Root/app.component.ts ***!
    \**************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsRootAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/init.service */
    "./src/app/Services/init.service.ts");
    /* harmony import */


    var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/page.logic.service */
    "./src/app/Services/page.logic.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(initService, domRootElementRef, pageLogic) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.initService = initService;
        this.domRootElementRef = domRootElementRef;
        this.pageLogic = pageLogic;
        this.title = 'ads';
        this.locale = 'en_US';
        this.skillsState = false;
        this.jobsState = false;
        this.headerMetadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        this.menuMetadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        this.footerMetadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        this.pageLogic.currentLocaleTranslations$.subscribe(function (localeTranslations) {
          console.log(_this.currentUrl);
          _this.currentUrl = localeTranslations.currentUrl;
          if (_this.headerMetadata[localeTranslations.locale] !== undefined) return _this.locale = localeTranslations.locale;

          _this.pageLogic.fetchInitialMetadata().then(function (data) {
            _this.locale = localeTranslations.locale;
            _this.headerMetadata[_this.locale] = data.headerMetadata;
            _this.menuMetadata[_this.locale] = data.menuMetadata;
            _this.footerMetadata[_this.locale] = data.footerMetadata;
            console.log(_this.footerMetadata);
          });
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.initService.init(this.domRootElementRef, {
            about_me: this.about_me,
            skills: this.skills,
            jobs: this.jobs,
            education: this.education,
            references: this.references,
            leave_message: this.leave_message
          });
          this.pageLogic.skillsState$.subscribe(function (state) {
            return _this2.skillsState = state;
          });
          this.pageLogic.jobsState$.subscribe(function (state) {
            return _this2.jobsState = state;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _Services_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__["PageLogic"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('about_me', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "about_me", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('skills', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "skills", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jobs', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "jobs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('education', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "education", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('references', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "references", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('leave_message', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], AppComponent.prototype, "leave_message", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Root/app.component.html")).default,
      host: {
        "id": "appGlobalGrid",
        'class': 'extended'
      },
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/Components/Root/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/Components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon {\n  cursor: pointer;\n  position: relative;\n}\n\n.loader {\n  background-image: url('loadingcomponent.png');\n  -webkit-transition: 1s;\n  transition: 1s;\n  width: 30px;\n  opacity: 0;\n  height: 30px;\n}\n\n.toggleLocaleStyle {\n  position: relative;\n  width: 30px;\n  height: 30px;\n}\n\n.contactIcon {\n  width: 30px;\n  height: 30px;\n  background-image: url('contact.png');\n  border-radius: 50%;\n  z-index: 3;\n  background-size: cover;\n}\n\n.contactContainer {\n  background: white;\n  position: absolute;\n  left: 100px;\n  top: 10px;\n  width: 0;\n  opacity: 0;\n  height: 38px;\n  z-index: 2;\n  padding: 5px 0 5px 40px;\n  display: grid;\n  grid-template-columns: repeat(3, 30px);\n  grid-template-rows: auto;\n  grid-gap: 5px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.contactIcon.closeBtn ~ .contactContainer {\n  width: 150px;\n  opacity: 1;\n  border-radius: 15px;\n}\n\n.phone {\n  background-image: url('phone.png');\n}\n\n.linkedin {\n  background-image: url('li.png');\n}\n\n.downloadcv {\n  background-image: url('dlcv.png');\n}\n\n.commonButtonClass {\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.active {\n  opacity: 1;\n}\n\n.toggleLocaleStyle div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.en_US:before,\n.ro_RO:before,\n.en_US:after,\n.ro_RO:after {\n  content: \"\";\n  background-image: url('en_US.png');\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-size: cover;\n}\n\n.ro_RO:before {\n  background-image: url('ro_RO.png');\n}\n\n.en_US:after {\n  background-image: url('ro_RO.png');\n  -webkit-animation: 0.2s popInENAnimation ease-out;\n          animation: 0.2s popInENAnimation ease-out;\n}\n\n.ro_RO:after {\n  background-image: url('en_US.png');\n  -webkit-animation: 0.2s popInROAnimation ease-out;\n          animation: 0.2s popInROAnimation ease-out;\n}\n\n@-webkit-keyframes popInENAnimation {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes popInENAnimation {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes popInROAnimation {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes popInROAnimation {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvRTpcXGFuZ3VsYXJQb3J0Zm9saW9cXEZFL3NyY1xcYXBwXFxDb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQ0FBQTtBQ0FKOztBREdBO0VBQ0ksK0JBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKOztBREdBOzs7O0VBSUksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLGtDQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7RUNBTjtFREdFO0lBQ0ksMkJBQUE7WUFBQSxtQkFBQTtFQ0ROO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7RUNBTjtFREdFO0lBQ0ksMkJBQUE7WUFBQSxtQkFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7RUNGTjtFREtFO0lBQ0ksMkJBQUE7WUFBQSxtQkFBQTtFQ0hOO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLDJCQUFBO1lBQUEsbUJBQUE7RUNGTjtFREtFO0lBQ0ksMkJBQUE7WUFBQSxtQkFBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9sb2FkaW5nY29tcG9uZW50LnBuZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnRvZ2dsZUxvY2FsZVN0eWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMHB4OyAgICBcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3RJY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9jb250YWN0LnBuZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY29udGFjdENvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBoZWlnaHQ6MzhweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggNDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIGdyaWQtZ2FwOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOi41cztcclxuXHJcbn1cclxuXHJcbi5jb250YWN0SWNvbi5jbG9zZUJ0biB+IC5jb250YWN0Q29udGFpbmVyIHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9waG9uZS5wbmcpO1xyXG59XHJcblxyXG4ubGlua2VkaW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9saS5wbmcpO1xyXG59XHJcblxyXG4uZG93bmxvYWRjdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2RsY3YucG5nKTtcclxufVxyXG5cclxuLmNvbW1vbkJ1dHRvbkNsYXNzIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMVxyXG59XHJcblxyXG4udG9nZ2xlTG9jYWxlU3R5bGUgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICA6IDEwMCU7XHJcbiAgICB0b3AgICAgIDogMDtcclxuICAgIGxlZnQgICAgOiAwO1xyXG59XHJcblxyXG4uZW5fVVM6YmVmb3JlLFxyXG4ucm9fUk86YmVmb3JlLFxyXG4uZW5fVVM6YWZ0ZXIsXHJcbi5yb19STzphZnRlciB7XHJcbiAgICBjb250ZW50ICAgICAgICAgOiAnJztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZW5fVVMucG5nKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxufVxyXG5cclxuLnJvX1JPOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3JvX1JPLnBuZyk7XHJcbn1cclxuXHJcbi5lbl9VUzphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3JvX1JPLnBuZyk7XHJcbiAgICBhbmltYXRpb24gICAgICAgOiAuMnMgcG9wSW5FTkFuaW1hdGlvbiBlYXNlLW91dFxyXG59XHJcblxyXG4ucm9fUk86YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9lbl9VUy5wbmcpO1xyXG4gICAgYW5pbWF0aW9uICAgICAgIDogLjJzIHBvcEluUk9BbmltYXRpb24gZWFzZS1vdXRcclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3BJbkVOQW5pbWF0aW9uIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMClcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcEluUk9BbmltYXRpb24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbn0iLCIuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9hZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9sb2FkaW5nY29tcG9uZW50LnBuZyk7XG4gIHRyYW5zaXRpb246IDFzO1xuICB3aWR0aDogMzBweDtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udG9nZ2xlTG9jYWxlU3R5bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jb250YWN0SWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvY29udGFjdC5wbmcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb250YWN0Q29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMzhweDtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDQwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5jb250YWN0SWNvbi5jbG9zZUJ0biB+IC5jb250YWN0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ucGhvbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3Bob25lLnBuZyk7XG59XG5cbi5saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbGkucG5nKTtcbn1cblxuLmRvd25sb2FkY3Yge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2RsY3YucG5nKTtcbn1cblxuLmNvbW1vbkJ1dHRvbkNsYXNzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRvZ2dsZUxvY2FsZVN0eWxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uZW5fVVM6YmVmb3JlLFxuLnJvX1JPOmJlZm9yZSxcbi5lbl9VUzphZnRlcixcbi5yb19STzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZW5fVVMucG5nKTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucm9fUk86YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9yb19STy5wbmcpO1xufVxuXG4uZW5fVVM6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3JvX1JPLnBuZyk7XG4gIGFuaW1hdGlvbjogMC4ycyBwb3BJbkVOQW5pbWF0aW9uIGVhc2Utb3V0O1xufVxuXG4ucm9fUk86YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2VuX1VTLnBuZyk7XG4gIGFuaW1hdGlvbjogMC4ycyBwb3BJblJPQW5pbWF0aW9uIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcEluRU5BbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvcEluUk9BbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/page.logic.service */
    "./src/app/Services/page.logic.service.ts");
    /* harmony import */


    var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/http.service */
    "./src/app/Services/http.service.ts");
    /* harmony import */


    var src_app_Services_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/init.service */
    "./src/app/Services/init.service.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(pageLogic, http, initService) {
        var _this3 = this;

        _classCallCheck(this, FooterComponent);

        this.pageLogic = pageLogic;
        this.http = http;
        this.initService = initService;
        this.metadata = undefined;
        this.isContactActive = false;
        this.loadingMetadata = true;
        this.http.activeRequestsCount$.subscribe(function (requestDetails) {
          _this3.loadingMetadata = Boolean(requestDetails.activeRequestCount);

          if (requestDetails.activeRequestCount === 0) {
            _this3.initService.removeGlobalLoading(true);

            _this3.pageLogic.fadeInContent();

            console.log(requestDetails.url);

            if (!requestDetails.url.match(/skills|jobs|initial/)) {
              _this3.pageLogic.resetSkillsJobsModal();
            }
          }

          ;
        });
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleLanguage",
        value: function toggleLanguage() {
          this.locale = this.locale === 'ro_RO' ? 'en_US' : 'ro_RO';
          this.pageLogic.updateMetadataParams(this.locale);
        }
      }, {
        key: "toggleContact",
        value: function toggleContact() {
          this.isContactActive = !this.isContactActive;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__["PageLogic"]
      }, {
        type: src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: src_app_Services_init_service__WEBPACK_IMPORTED_MODULE_4__["InitService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "metadata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "locale", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/Components/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/Components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".appGlobalHeaderContainerData {\n  grid-template-rows: 30fr repeat(5, 14fr);\n}\n\n.appGlobalHeaderContainer {\n  z-index: 1;\n  display: grid;\n  font-weight: normal;\n  margin: 0;\n}\n\n.appGlobalHeaderContainerImage div {\n  grid-column: 2;\n  grid-row: 2;\n}\n\n.appGlobalHeaderContainerImage div:nth-child(1) {\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, left bottom, from(deepskyblue), color-stop(dodgerblue), color-stop(dodgerblue), color-stop(dodgerblue), to(deepskyblue));\n  background: linear-gradient(deepskyblue, dodgerblue, dodgerblue, dodgerblue, deepskyblue);\n  -webkit-animation: 2s spiiiin linear infinite;\n  animation: 2s spiiiin linear infinite;\n}\n\n.appGlobalHeaderContainerImage div:nth-child(1).inactive {\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.appGlobalHeaderContainerImage div:nth-child(2) img {\n  width: 100%;\n  background: deepskyblue;\n  grid-row: 2;\n  grid-column: 2;\n  z-index: 1;\n  border-radius: 50%;\n}\n\n.appGlobalHeaderContainerData {\n  display: grid;\n  text-align: right;\n  font-family: \"open sans\";\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 0.85rem;\n}\n\n.appGlobalHeaderContainerDataText {\n  grid-column: 2;\n  width: 100%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvRTpcXGFuZ3VsYXJQb3J0Zm9saW9cXEZFL3NyY1xcYXBwXFxDb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx1S0FBQTtFQUFBLHlGQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwZnIgcmVwZWF0KDUsIDE0ZnIpO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVyIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXYge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVySW1hZ2UgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChkZWVwc2t5Ymx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZGVlcHNreWJsdWUpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAycyBzcGlpaWluIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IDJzIHNwaWlpaW4gbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVySW1hZ2UgZGl2Om50aC1jaGlsZCgxKS5pbmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTowO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb246LjVzXHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcblxyXG4uYXBwR2xvYmFsSGVhZGVyQ29udGFpbmVyRGF0YVRleHQge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbiIsIi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMGZyIHJlcGVhdCg1LCAxNGZyKTtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lckltYWdlIGRpdiB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbn1cblxuLmFwcEdsb2JhbEhlYWRlckNvbnRhaW5lckltYWdlIGRpdjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChkZWVwc2t5Ymx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZG9kZ2VyYmx1ZSwgZGVlcHNreWJsdWUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMnMgc3BpaWlpbiBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogMnMgc3BpaWlpbiBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXY6bnRoLWNoaWxkKDEpLmluYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJJbWFnZSBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBkZWVwc2t5Ymx1ZTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAyO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5hcHBHbG9iYWxIZWFkZXJDb250YWluZXJEYXRhVGV4dCB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.metadata = undefined;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "metadata", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        display: 'block',
        opacity: '0'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        display: 'block',
        opacity: '1'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/Components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/Services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/http.service */
    "./src/app/Services/http.service.ts");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(httpService) {
        _classCallCheck(this, DataService);

        this.httpService = httpService;
      }

      _createClass(DataService, [{
        key: "fetchRouteMetadata",
        value: function fetchRouteMetadata(dataToFetch, locale) {
          return this.httpService.doGetRequest("getMetadata", {
            locale: locale,
            dataToFetch: dataToFetch
          });
        }
      }, {
        key: "sendFeedback",
        value: function sendFeedback(feedback) {
          return this.httpService.doPostRequest('sendFeedback', {
            feedback: feedback
          });
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/Services/http.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/http.service.ts ***!
    \******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.requestDetails = {
          activeRequestCount: 0,
          url: ''
        };
        this.activeRequestsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.requestDetails);
      }

      _createClass(HttpService, [{
        key: "doGetRequest",
        value: function doGetRequest(url, body) {
          var _this4 = this;

          this.requestDetails.activeRequestCount = this.requestDetails.activeRequestCount + 1;
          this.activeRequestsCount$.next(this.requestDetails);
          return this.http.get("".concat(location.origin, "/api/").concat(url), {
            params: body
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this4.requestDetails.activeRequestCount = _this4.requestDetails.activeRequestCount - 1;

            if (url === 'getMetadata') {
              _this4.requestDetails.url = body.dataToFetch;

              _this4.activeRequestsCount$.next(_this4.requestDetails);
            }
          })).toPromise();
        }
      }, {
        key: "doPostRequest",
        value: function doPostRequest(url, postBody) {
          return this.http.post("".concat(location.origin, "/api/").concat(url), postBody).toPromise();
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/Services/init.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/init.service.ts ***!
    \******************************************/

  /*! exports provided: InitService */

  /***/
  function srcAppServicesInitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitService", function () {
      return InitService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _lazy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lazy.service */
    "./src/app/Services/lazy.service.ts");
    /* harmony import */


    var _page_logic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page.logic.service */
    "./src/app/Services/page.logic.service.ts");
    /* harmony import */


    var _url_listener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./url-listener.service */
    "./src/app/Services/url-listener.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var InitService =
    /*#__PURE__*/
    function () {
      function InitService(_document, lazyService, pageLogic, urlListener) {
        _classCallCheck(this, InitService);

        this._document = _document;
        this.lazyService = lazyService;
        this.pageLogic = pageLogic;
        this.urlListener = urlListener;
        this.scrollInit = true;
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
        this.currentUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('about-me');
      }

      _createClass(InitService, [{
        key: "init",
        value: function init(domRootElementRef, containerRefs) {
          var _this5 = this;

          this.lazyService.setContainerRefs(containerRefs);
          this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
          this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
          this.enableCurrentOrientationCSS(domRootElementRef).then(function () {
            _this5.setResizeEvent(domRootElementRef);
          });
        }
      }, {
        key: "setAppStyle",
        value: function setAppStyle(domRootElementRef) {
          var _this6 = this;

          this.addGlobalLoading();

          if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
            this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
            this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';

            if (this.viewport.CSS[this.viewport.activeOrientation].loaded === false) {
              this.setContentComponentsPosition();
              this.removeGlobalLoading();
            }
          }

          this.enableCurrentOrientationCSS(domRootElementRef).then(function () {
            _this6.removeGlobalLoading();

            _this6.setContentComponentsPosition();
          });
        }
      }, {
        key: "enableCurrentOrientationCSS",
        value: function enableCurrentOrientationCSS(domRootElementRef, count) {
          var _this7 = this;

          domRootElementRef.nativeElement.style.width = "".concat(this._document.documentElement.clientWidth, "px");
          domRootElementRef.nativeElement.style.height = "".concat(this._document.documentElement.clientHeight, "px");
          var self = this;
          var activeOrientation = this.viewport.activeOrientation;
          var inactiveOrientation = this.viewport.inactiveOrientation;
          return new Promise(function (resolve, reject) {
            if (_this7.viewport.CSS[activeOrientation].element.href === '') {
              _this7.viewport.CSS[activeOrientation].element.href = "".concat(_this7.viewport.activeOrientation, "-css.css");
              _this7.viewport.CSS[activeOrientation].element.disabled = false;

              _this7.viewport.CSS[activeOrientation].element.addEventListener('load', function () {
                _this7.viewport.CSS[activeOrientation].loaded = true;
                onSuccesfullCSSLoad(true);
              });

              _this7.viewport.CSS[activeOrientation].element.addEventListener('error', function () {
                setTimeout(function () {
                  if (count === 10) return _this7.enableCurrentOrientationCSS(domRootElementRef, count ? 0 : count++);
                  reject();
                }, 500);
              });
            } else {
              onSuccesfullCSSLoad();
            }

            function onSuccesfullCSSLoad(currentLayoutJustLoaded) {
              if (currentLayoutJustLoaded) {
                self.viewport.CSS[inactiveOrientation].element.disabled = true;
              } else {
                self.viewport.CSS[activeOrientation].element.disabled = false;
                self.viewport.CSS[inactiveOrientation].element.disabled = true;
              }

              resolve();
            }
          });
        }
      }, {
        key: "setScrollEvent",
        value: function setScrollEvent() {
          var _this8 = this;

          this.scrollInit = false;

          var globalContentContainer = this._document.querySelector(".appGlobalContent");

          var self = this;
          var touchStartY;
          var touchStartX;
          var containerScrollTop;
          this.setContentComponentsPosition();

          try {
            globalContentContainer.scrollTo({
              top: this.viewport.contentComponentsPosition[this.urlListener.currentCompoentKey].component.offsetTop - 500,
              behavior: "auto"
            });
          } catch (e) {}

          ;
          this.urlListener.urlSubscriptionBehaviorSubject$.subscribe(function (urlSubscription) {
            if (urlSubscription.dataToFetch.match(/skills|jobs/)) return;
            _this8.urlSubscription = urlSubscription;
            setTimeout(function () {
              globalContentContainer.scrollTo({
                top: urlSubscription.dataToFetch === 'about_me' ? 0 : _this8.viewport.contentComponentsPosition[urlSubscription.dataToFetch].component.offsetTop - 200,
                behavior: "smooth"
              });
              setTimeout(function () {
                self.pageLogic.fadeInContent();
              }, 200);
            }, self._document.querySelector("#appGlobalGrid").className === 'contracted' ? 0 : 100);
            self._document.querySelector("#appGlobalGrid").className = 'contracted';
          });

          window.onwheel = function (event) {
            containerScrollTop = globalContentContainer.scrollTop;
            triggerContentScroll(event);
          };

          if (window.ontouchmove === null) {
            window.ontouchstart = function (event) {
              touchStartY = event.touches[0].clientY;
              touchStartX = event.touches[0].clientX;
              containerScrollTop = globalContentContainer.scrollTop;
            };

            window.ontouchend = function (event) {
              return triggerContentScroll(event);
            };
          }

          function triggerContentScroll(event) {
            self.setContentComponentsPosition();
            self.pageLogic.fadeInContent();

            if (self.pageLogic.skillsState$.value || self.pageLogic.jobsState$.value) {
              if (event instanceof TouchEvent) {
                var carousel = self._document.querySelector(".carousel");

                if (event.changedTouches[0].clientY > carousel.getBoundingClientRect().top && !event.target.className.match(/((previous|next)content)|closeBtn/)) {
                  if (event.changedTouches[0].clientX <= touchStartX) {
                    self.displaySlidesContent(1);
                  } else {
                    self.displaySlidesContent(-1);
                  }
                }
              }
            } else {
              if (containerScrollTop && containerScrollTop !== 0) return;

              self._document.querySelector("#appGlobalGrid").className = function () {
                if (event instanceof WheelEvent) {
                  return event.deltaY > 0 ? 'contracted' : "extended";
                } else if (event instanceof TouchEvent) {
                  return touchStartY > event.changedTouches[0].clientY ? 'contracted' : "extended";
                } else {
                  return '';
                }
              }();
            }
          }
        }
      }, {
        key: "setResizeEvent",
        value: function setResizeEvent(root) {
          var _this9 = this;

          window.onresize = function () {
            if (_this9.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
              _this9.setAppStyle(root);
            } else {
              setTimeout(function () {
                _this9.setAppStyle(root);
              }, 100);
            }
          };
        }
      }, {
        key: "addGlobalLoading",
        value: function addGlobalLoading() {
          this._document.querySelector("#appGlobalLoader").classList.add('active');
        }
      }, {
        key: "removeGlobalLoading",
        value: function removeGlobalLoading(initScroll) {
          var _this10 = this;

          setTimeout(function () {
            _this10._document.querySelector("#appGlobalLoader").classList.remove('active');
          }, 500);
          if (this.scrollInit && initScroll) this.setScrollEvent();
        }
      }, {
        key: "displaySlidesContent",
        value: function displaySlidesContent(indexQuantifier) {
          var carousel = this._document.querySelector('.activeModalGrid .carousel');

          var slidesContainer = this._document.querySelector('.activeModalGrid .slides');

          var slidesCount = this._document.querySelectorAll('.activeModalGrid .slideContainer').length;

          var slideIndex = parseInt(carousel.getAttribute('data-slide-index'));

          switch (true) {
            case slideIndex + indexQuantifier === slidesCount:
              slideIndex = 0;
              break;

            case slideIndex + indexQuantifier === -1:
              slideIndex = slidesCount - 1;
              break;

            default:
              slideIndex = slideIndex + indexQuantifier;
          }

          carousel.setAttribute('data-slide-index', slideIndex.toString());
          slidesContainer.style.transform = "translateX(".concat(-(slidesContainer.getBoundingClientRect().width * slideIndex), "px)");
        }
      }, {
        key: "setContentComponentsPosition",
        value: function setContentComponentsPosition() {
          this.viewport.contentComponentsPosition = {
            about_me: {
              url: 'about-me',
              component: this._document.querySelector("#about_me")
            },
            education: {
              url: 'education',
              component: this._document.querySelector("#education")
            },
            references: {
              url: 'references',
              component: this._document.querySelector("#references")
            },
            leave_message: {
              url: 'leave_message',
              component: this._document.querySelector("#leave_message")
            }
          };
        }
      }]);

      return InitService;
    }();

    InitService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _lazy_service__WEBPACK_IMPORTED_MODULE_3__["LazyService"]
      }, {
        type: _page_logic_service__WEBPACK_IMPORTED_MODULE_4__["PageLogic"]
      }, {
        type: _url_listener_service__WEBPACK_IMPORTED_MODULE_5__["UrlListenerService"]
      }];
    };

    InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], InitService);
    /***/
  },

  /***/
  "./src/app/Services/lazy.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/lazy.service.ts ***!
    \******************************************/

  /*! exports provided: LazyService */

  /***/
  function srcAppServicesLazyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyService", function () {
      return LazyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LazyService =
    /*#__PURE__*/
    function () {
      function LazyService(c) {
        _classCallCheck(this, LazyService);

        this.c = c;
        this.componentsTemplate = {
          about_me: {
            path: 'about-me',
            module: 'AboutMeModule',
            containerRef: undefined,
            isLoaded: false
          },
          skills: {
            path: 'skills',
            module: 'SkillsModule',
            containerRef: undefined,
            isLoaded: false
          },
          jobs: {
            path: 'jobs',
            module: 'JobsModule',
            containerRef: undefined,
            isLoaded: false
          },
          education: {
            path: 'education',
            module: 'EducationModule',
            containerRef: undefined,
            isLoaded: false
          },
          references: {
            path: 'references',
            module: 'ReferencesModule',
            containerRef: undefined,
            isLoaded: false
          },
          leave_message: {
            path: 'leave-message',
            module: 'LeaveMessageModule',
            containerRef: undefined,
            isLoaded: false
          }
        };
      }

      _createClass(LazyService, [{
        key: "load",
        value: function load(currentUrl) {
          var _this11 = this;

          var currentComponentsToLoad = this.componentsToLoad(currentUrl || 'about_me');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = currentComponentsToLoad[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var componentName = _step.value;

              if (this.componentsTemplate[componentName].isLoaded !== true) {
                (function () {
                  var path = _this11.componentsTemplate[componentName].path;
                  var key = componentName;
                  var module = _this11.componentsTemplate[key].module;

                  __webpack_require__("./src/app/Components/Content lazy recursive ^\\.\\/.*\\/.*\\.module$")("./".concat(path, "/").concat(path, ".module")).then(function (m) {
                    var moduleInstance = _this11.c.compileModuleAndAllComponentsSync(m[module]).componentFactories[path.match(/skills|jobs/) ? 1 : 0];

                    _this11.componentsTemplate[key].containerRef.createComponent(moduleInstance);

                    _this11.componentsTemplate[key].isLoaded = true;
                  });
                })();
              }

              ;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "componentsToLoad",
        value: function componentsToLoad(middleComponent) {
          var metadataToReturn = [];

          switch (middleComponent) {
            case 'about_me':
            case 'education':
            case 'references':
              metadataToReturn = ['about_me', 'education', 'references'];
              break;

            case 'skills':
              metadataToReturn = ['skills'];
              break;

            case 'jobs':
              metadataToReturn = ['jobs'];
              break;

            case 'leave_message':
              metadataToReturn = ['references', 'leave_message'];
              break;
          }

          return metadataToReturn;
        }
      }, {
        key: "setContainerRefs",
        value: function setContainerRefs(containerRefs) {
          for (var containerRef in containerRefs) {
            this.componentsTemplate[containerRef].containerRef = containerRefs[containerRef];
          }
        }
      }]);

      return LazyService;
    }();

    LazyService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]
      }];
    };

    LazyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LazyService);
    /***/
  },

  /***/
  "./src/app/Services/page.logic.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Services/page.logic.service.ts ***!
    \************************************************/

  /*! exports provided: PageLogic */

  /***/
  function srcAppServicesPageLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLogic", function () {
      return PageLogic;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/Services/data.service.ts");
    /* harmony import */


    var _url_listener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./url-listener.service */
    "./src/app/Services/url-listener.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PageLogic =
    /*#__PURE__*/
    function () {
      function PageLogic(dataService, urlListenerService, _document) {
        var _this12 = this;

        _classCallCheck(this, PageLogic);

        this.dataService = dataService;
        this.urlListenerService = urlListenerService;
        this._document = _document;
        this.skillsState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.jobsState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentLocaleTranslations$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.locale = 'en_US';
        this.previousUrl = 'about-me';
        this.urlListenerService.start();
        this.updateMetadataParams();
        this.urlListenerService.urlSubscriptionBehaviorSubject$.subscribe(function () {
          return _this12.updateMetadataParams();
        });
      }

      _createClass(PageLogic, [{
        key: "sendFeedback",
        value: function sendFeedback(feedback) {
          return this.dataService.sendFeedback(feedback);
        }
      }, {
        key: "fetchComponentsMetadata",
        value: function fetchComponentsMetadata(metadata) {
          return this.dataService.fetchRouteMetadata(metadata, this.locale);
        }
      }, {
        key: "fetchInitialMetadata",
        value: function fetchInitialMetadata() {
          return this.dataService.fetchRouteMetadata('initial', this.locale);
        }
      }, {
        key: "objectKeys",
        value: function objectKeys(object) {
          try {
            return Object.keys(object);
          } catch (e) {
            return [];
          }

          ;
        }
      }, {
        key: "updateMetadataParams",
        value: function updateMetadataParams(locale) {
          var localeTranslations = {
            locale: locale || this.locale || 'en_US',
            currentUrl: this.urlListenerService.currentUrl
          };
          this.locale = localeTranslations.locale;
          this.currentLocaleTranslations$.next(localeTranslations);
        }
      }, {
        key: "setPreviousUrl",
        value: function setPreviousUrl(previousUrl) {
          this.previousUrl = previousUrl;
        }
      }, {
        key: "closeSkillsJobsModal",
        value: function closeSkillsJobsModal() {
          this.skillsState$.next(false);
          this.jobsState$.next(false);
        }
      }, {
        key: "hideModalSibling",
        value: function hideModalSibling(sibling) {
          this["".concat(sibling, "State$")].next(false);
          this["".concat(sibling === 'skills' ? 'jobs' : 'skills', "State$")].next(true);
        }
      }, {
        key: "setModalTabsState",
        value: function setModalTabsState(tab) {
          this["".concat(tab === 'skills' ? 'jobs' : 'skills', "State$")].next(true);
        }
      }, {
        key: "resetSkillsJobsModal",
        value: function resetSkillsJobsModal() {
          this.skillsState$.next(false);
          this.jobsState$.next(false);
        }
      }, {
        key: "fadeInContent",
        value: function fadeInContent() {
          var _this13 = this;

          setTimeout(function () {
            var contentContainer = _this13._document.querySelector('.appGlobalContent');

            contentContainer.querySelectorAll('.fadeMeIn:not(.fadedIn)').forEach(function (element, index) {
              if (element.getBoundingClientRect().top < contentContainer.getBoundingClientRect().bottom) {
                setTimeout(function () {
                  element.classList.add('fadedIn');
                }, 75 * index);
              }
            });
          }, 200);
        }
      }]);

      return PageLogic;
    }();

    PageLogic.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _url_listener_service__WEBPACK_IMPORTED_MODULE_4__["UrlListenerService"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    PageLogic = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))], PageLogic);
    /***/
  },

  /***/
  "./src/app/Services/url-listener.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/Services/url-listener.service.ts ***!
    \**************************************************/

  /*! exports provided: UrlListenerService */

  /***/
  function srcAppServicesUrlListenerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlListenerService", function () {
      return UrlListenerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _lazy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lazy.service */
    "./src/app/Services/lazy.service.ts");

    var UrlListenerService =
    /*#__PURE__*/
    function () {
      function UrlListenerService(router, lazyService) {
        _classCallCheck(this, UrlListenerService);

        this.router = router;
        this.lazyService = lazyService;
        this.urlSubscriptionBehaviorSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.currentUrl = 'about-me';
        this.currentCompoentKey = 'about_me';
      }

      _createClass(UrlListenerService, [{
        key: "start",
        value: function start() {
          var _this14 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (event) {
            var localUrlSubscription = {
              dataToFetch: event.url !== "/" ? event.url.replace("/portfolio/", '').replace('-', '_') : 'about_me',
              path: event.url !== "/" ? event.url.replace("/portfolio/", "") : 'about-me'
            };
            _this14.currentUrl = localUrlSubscription.path;
            _this14.currentCompoentKey = localUrlSubscription.dataToFetch;

            _this14.urlSubscriptionBehaviorSubject$.next(localUrlSubscription);

            _this14.lazyService.load(localUrlSubscription.dataToFetch);
          });
        }
      }]);

      return UrlListenerService;
    }();

    UrlListenerService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _lazy_service__WEBPACK_IMPORTED_MODULE_5__["LazyService"]
      }];
    };

    UrlListenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UrlListenerService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/Root/app.component */
    "./src/app/Components/Root/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/header/header.component */
    "./src/app/Components/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/footer/footer.component */
    "./src/app/Components/footer/footer.component.ts");
    /* harmony import */


    var _Components_Loaders_dynamic_component_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Components/Loaders/dynamic-component-loader.component */
    "./src/app/Components/Loaders/dynamic-component-loader.component.ts");
    /* harmony import */


    var _Components_Loaders_header_text_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Components/Loaders/header-text-loader.component */
    "./src/app/Components/Loaders/header-text-loader.component.ts");

    var AppRoutes = [{
      path: "",
      redirectTo: "portfolio/about-me",
      pathMatch: "full"
    }, {
      path: "portfolio",
      redirectTo: "portfolio/about-me",
      pathMatch: "full"
    }, {
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
    }, {
      path: "*",
      redirectTo: "portfolio/about-me",
      pathMatch: "full"
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _Components_Loaders_dynamic_component_loader_component__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentLoaderComponent"], _Components_Loaders_header_text_loader_component__WEBPACK_IMPORTED_MODULE_11__["HeaderTextLoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(AppRoutes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_Components_Root_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/environments/environment.ts":
  /*!*********************************************!*\
    !*** ./src/app/environments/environment.ts ***!
    \*********************************************/

  /*! exports provided: environment */

  /***/
  function srcAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/environments/environment */
    "./src/app/environments/environment.ts");

    if (_app_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\angularPortfolio\FE\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map