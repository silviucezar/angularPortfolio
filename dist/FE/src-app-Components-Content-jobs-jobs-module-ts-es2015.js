(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-jobs-jobs-module-ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nunc quam, nec volutpat odio consectetur rutrum.\r\nSed vulputate libero a malesuada facilisis. Aliquam in ligula dui. Mauris sit amet tortor at sem tincidunt scelerisque.\r\nMauris at lacus eget nunc convallis sodales. Donec consectetur, libero sed maximus efficitur, justo orci dignissim\r\nrisus, ac vestibulum sapien enim ac sapien. Maecenas cursus non libero vel tincidunt. Quisque tempor pulvinar leo, at\r\ntincidunt erat viverra ultricies. Cras aliquet urna accumsan, dignissim enim id, volutpat turpis. Ut iaculis enim augue,\r\nsit amet vestibulum justo interdum dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per\r\ninceptos himenaeos.\r\n\r\nDuis ex libero, ullamcorper sit amet magna nec, imperdiet pellentesque sem. Nulla vitae turpis sit amet eros\r\npellentesque malesuada et quis purus. Quisque interdum sapien ipsum, ac rhoncus tortor congue eu. Integer elementum\r\ngravida auctor. Nunc ornare consectetur porta. Sed tempor risus non tortor sodales cursus. Donec posuere convallis est.\r\nPraesent est diam, ornare quis nulla ac, condimentum elementum nisi. Pellentesque consectetur sollicitudin enim, sed\r\nplacerat purus sollicitudin nec. Morbi justo neque, placerat sed rhoncus eu, mattis at ex. Vivamus vestibulum eros et\r\nlobortis dictum. Vestibulum in turpis nec dui fermentum vestibulum. Nullam tempor ipsum quis ipsum blandit convallis.\r\nNam id enim mattis, fermentum felis sed, congue odio. Ut nec sollicitudin nisl.");

/***/ }),

/***/ "./src/app/Components/Content/jobs/jobs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/Content/jobs/jobs.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29udGVudC9qb2JzL2pvYnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/Content/jobs/jobs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/Content/jobs/jobs.component.ts ***!
  \***********************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");



let JobsComponent = class JobsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.loading = true;
        this.dataService.getRoutesMetadata().subscribe((componentsMetadata) => {
            this.loading = false;
            this.currentLocale = componentsMetadata.currentLocale;
            this.metadata[this.currentLocale] = componentsMetadata.components.jobs[this.currentLocale];
        });
    }
    ngOnInit() { }
};
JobsComponent.ctorParameters = () => [
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jobs.component.scss */ "./src/app/Components/Content/jobs/jobs.component.scss")).default]
    })
], JobsComponent);



/***/ }),

/***/ "./src/app/Components/Content/jobs/jobs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Components/Content/jobs/jobs.module.ts ***!
  \********************************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.component */ "./src/app/Components/Content/jobs/jobs.component.ts");




let JobsModule = class JobsModule {
};
JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], JobsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-Components-Content-jobs-jobs-module-ts-es2015.js.map