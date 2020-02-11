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


    __webpack_exports__["default"] = "<p class='fadeMeIn'>{{ metadata[locale]?.references[0]}}</p>\r\n<p class='fadeMeIn'>{{ metadata[locale]?.references[1]}}</p>\r\n<p class='fadeMeIn'>{{ metadata[locale]?.references[2]}}</p>\r\n<p class='fadeMeIn'>{{ metadata[locale]?.references[3]}}</p>";
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
    /* harmony import */


    var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/page.logic.service */
    "./src/app/Services/page.logic.service.ts");

    var ReferencesComponent =
    /*#__PURE__*/
    function () {
      function ReferencesComponent(pageLogic) {
        var _this = this;

        _classCallCheck(this, ReferencesComponent);

        this.pageLogic = pageLogic;
        this.metadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        this.locale = 'en_US';
        this.pageLogic.currentLocaleTranslations$.subscribe(function (localeTranslations) {
          if (_this.metadata[localeTranslations.locale] !== undefined) return _this.locale = localeTranslations.locale;

          _this.pageLogic.fetchComponentsMetadata('references').then(function (metadata) {
            _this.locale = localeTranslations.locale;
            _this.metadata[_this.locale] = metadata;
          });
        });
      }

      _createClass(ReferencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferencesComponent;
    }();

    ReferencesComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__["PageLogic"]
      }];
    };

    ReferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-references',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./references.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/references/references.component.html")).default,
      host: {
        style: 'position:relative',
        id: "references"
      },
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