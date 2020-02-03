function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


    __webpack_exports__["default"] = "<app-carousel [slidesCount]='slidesCount' class=\"carousel\">\r\n    <div *ngFor='let job of objectKeys(metadata[locale])' style='overflow-y: auto'>\r\n        <div class='intro'>\r\n            <div class='intro-img'>\r\n                {{job.substring(0,1)}}\r\n            </div>\r\n            <img [src]='\"./app/assets/\" + metadata[locale][job].img_0' [ngClass]='\"img\" + job'\r\n                (load)='displayImage($event.target)' class='intro-img' />\r\n            <span class='name'>{{metadata[locale][job].company}}</span>\r\n            <i>{{metadata[locale][job].shortDescription}}</i>\r\n        </div>\r\n        <div class='content' *ngFor='let role of objectKeys(metadata[locale][job].roles)'>\r\n            <div style=\"font-size:20px\">\r\n                {{metadata[locale][job].roles[role].role}}\r\n            </div>\r\n            <div>\r\n                {{metadata[locale][job].roles[role].period}}\r\n            </div>\r\n            <div style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].responsabilities.title}}\r\n            </div>\r\n            <div *ngFor='let responsability of metadata[locale][job].roles[role].responsabilities.description'>\r\n                {{responsability}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].responsabilities.notes'>\r\n                {{metadata[locale][job].roles[role].responsabilities.notes}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].wins' style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].wins.title}}\r\n            </div>\r\n            <ng-container *ngIf='metadata[locale][job].roles[role].wins'>\r\n                <div *ngFor='let win of metadata[locale][job].roles[role].wins.description'>\r\n                    {{win}}\r\n                </div>\r\n            </ng-container>\r\n            <div *ngIf='metadata[locale][job].roles[role].technologies' style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].technologies.title}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].technologies'>\r\n                <span *ngFor='let technology of metadata[locale][job].roles[role].technologies.description'>\r\n                    {{technology}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-carousel>";
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
    /* harmony import */


    var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/page.logic.service */
    "./src/app/Services/page.logic.service.ts");

    var JobsComponent =
    /*#__PURE__*/
    function (_src_app_Services_pag) {
      _inherits(JobsComponent, _src_app_Services_pag);

      function JobsComponent(dataService) {
        var _this;

        _classCallCheck(this, JobsComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(JobsComponent).call(this));
        _this.dataService = dataService;
        _this.metadata = {
          ro_RO: undefined,
          en_US: undefined
        };
        _this.slidesCount = 0;

        _this.dataService.getRoutesMetadata().subscribe(function (componentsMetadata) {
          _this.locale = componentsMetadata.currentLocale;
          _this.metadata[_this.locale] = componentsMetadata.components.jobs[_this.locale];
          _this.slidesCount = _this.objectKeys(_this.metadata[_this.locale]).length;
          console.log(_this.metadata);
        });

        return _this;
      }

      _createClass(JobsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayImage",
        value: function displayImage(image) {
          image.classList.add('fadeIn');
        }
      }]);

      return JobsComponent;
    }(src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__["PageLogic"]);

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
      host: {
        class: 'modalComponent'
      },
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
    /* harmony import */


    var _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/carousel/carousel.module */
    "./src/app/Components/shared/carousel/carousel.module.ts");

    var JobsModule = function JobsModule() {
      _classCallCheck(this, JobsModule);
    };

    JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
      exports: [_shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]]
    })], JobsModule);
    /***/
  }
}]);
//# sourceMappingURL=src-app-Components-Content-jobs-jobs-module-ts-es5.js.map