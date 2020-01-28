function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-jobs-jobs-module-ts"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContentJobsJobsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h2>{{metadata.sectionTitle}}</h2> -->dsadasdasdasd";
    /***/
  },

  /***/
  "./src/app/Components/Content/jobs/jobs.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/Content/jobs/jobs.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContentJobsJobsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29udGVudC9qb2JzL2pvYnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/Content/jobs/jobs.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/Content/jobs/jobs.component.ts ***!
    \***********************************************************/

  /*! exports provided: JobsComponent */

  /***/
  function srcAppComponentsContentJobsJobsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsComponent", function () {
      return JobsComponent;
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


    var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/data.service */
    "./src/app/Services/data.service.ts");

    var JobsComponent =
    /*#__PURE__*/
    function () {
      function JobsComponent(dataService) {
        var _this = this;

        _classCallCheck(this, JobsComponent);

        this.dataService = dataService;
        this.metadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        this.loading = true;
        this.dataService.getRoutesMetadata().subscribe(function (componentsMetadata) {
          _this.loading = false;
          _this.currentLocale = componentsMetadata.currentLocale;
          _this.metadata[_this.currentLocale] = componentsMetadata.components.jobs[_this.currentLocale];
        });
      }

      _createClass(JobsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JobsComponent;
    }();

    JobsComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobs.component.scss */
      "./src/app/Components/Content/jobs/jobs.component.scss")).default]
    })], JobsComponent);
    /***/
  },

  /***/
  "./src/app/Components/Content/jobs/jobs.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Components/Content/jobs/jobs.module.ts ***!
    \********************************************************/

  /*! exports provided: JobsModule */

  /***/
  function srcAppComponentsContentJobsJobsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsModule", function () {
      return JobsModule;
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


    var _jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jobs.component */
    "./src/app/Components/Content/jobs/jobs.component.ts");

    var JobsModule = function JobsModule() {
      _classCallCheck(this, JobsModule);
    };

    JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], JobsModule);
    /***/
  }
}]);
//# sourceMappingURL=src-app-Components-Content-jobs-jobs-module-ts-es5.js.map