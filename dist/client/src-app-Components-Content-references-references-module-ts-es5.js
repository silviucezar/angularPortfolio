function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-references-references-module-ts"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/references/references.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/references/references.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentReferencesReferencesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>{{metadata.sectionTitle}}</h2>";
    /***/
  },

  /***/
  "./src/app/Components/Content/references/references.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/Content/references/references.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentReferencesReferencesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29udGVudC9yZWZlcmVuY2VzL3JlZmVyZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/Content/references/references.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/Content/references/references.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ReferencesComponent */

  /***/
  function srcAppComponentsContentReferencesReferencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function () {
      return ReferencesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferencesComponent =
    /*#__PURE__*/
    function () {
      function ReferencesComponent(viewContainerRef) {
        _classCallCheck(this, ReferencesComponent);

        this.viewContainerRef = viewContainerRef;
      }

      _createClass(ReferencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferencesComponent;
    }();

    ReferencesComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    ReferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-references',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./references.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/references/references.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./references.component.scss */
      "./src/app/Components/Content/references/references.component.scss")).default]
    })], ReferencesComponent);
    /***/
  },

  /***/
  "./src/app/Components/Content/references/references.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/Content/references/references.module.ts ***!
    \********************************************************************/

  /*! exports provided: ReferencesModule */

  /***/
  function srcAppComponentsContentReferencesReferencesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesModule", function () {
      return ReferencesModule;
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


    var _references_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./references.component */
    "./src/app/Components/Content/references/references.component.ts");

    var ReferencesModule = function ReferencesModule() {
      _classCallCheck(this, ReferencesModule);
    };

    ReferencesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_references_component__WEBPACK_IMPORTED_MODULE_3__["ReferencesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], ReferencesModule);
    /***/
  }
}]);
//# sourceMappingURL=src-app-Components-Content-references-references-module-ts-es5.js.map