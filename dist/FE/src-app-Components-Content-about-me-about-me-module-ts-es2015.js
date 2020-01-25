(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-about-me-about-me-module-ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/about-me/about-me.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/about-me/about-me.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{finishedLoading ? metadata[locale].about_me_intro_part_one : ''}}</p>\r\n<p>{{finishedLoading ? metadata[locale].about_me_intro_part_two : ''}}</p>\r\n<p>{{finishedLoading ? metadata[locale].about_me_current_goal : ''}}</p>\r\n<p>{{finishedLoading ? metadata[locale].about_me_hobbies : ''}}</p>");

/***/ }),

/***/ "./src/app/Components/Content/about-me/about-me.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/Content/about-me/about-me.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29udGVudC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/Content/about-me/about-me.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/Content/about-me/about-me.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");



let AboutMeComponent = class AboutMeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'FE';
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.finishedLoading = false;
        this.dataService.getRoutesMetadata().subscribe((componentsMetadata) => {
            this.finishedLoading = true;
            this.locale = componentsMetadata.currentLocale;
            this.metadata[this.locale] = componentsMetadata.components.about_me[this.locale];
        });
    }
    ngOnInit() { }
    ngAfterViewInit() { }
};
AboutMeComponent.ctorParameters = () => [
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/about-me/about-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.scss */ "./src/app/Components/Content/about-me/about-me.component.scss")).default]
    })
], AboutMeComponent);



/***/ }),

/***/ "./src/app/Components/Content/about-me/about-me.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Components/Content/about-me/about-me.module.ts ***!
  \****************************************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me.component */ "./src/app/Components/Content/about-me/about-me.component.ts");




let AboutMeModule = class AboutMeModule {
};
AboutMeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
    })
], AboutMeModule);



/***/ })

}]);
//# sourceMappingURL=src-app-Components-Content-about-me-about-me-module-ts-es2015.js.map