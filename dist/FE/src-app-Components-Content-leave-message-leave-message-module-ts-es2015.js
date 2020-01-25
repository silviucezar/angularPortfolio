(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-leave-message-leave-message-module-ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/leave-message/leave-message.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/leave-message/leave-message.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{metadata.sectionTitle}}</h2>");

/***/ }),

/***/ "./src/app/Components/Content/leave-message/leave-message.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/Content/leave-message/leave-message.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQ29udGVudC9sZWF2ZS1tZXNzYWdlL2xlYXZlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/Content/leave-message/leave-message.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/Content/leave-message/leave-message.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LeaveMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveMessageComponent", function() { return LeaveMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");



let LeaveMessageComponent = class LeaveMessageComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.loading = true;
        this.dataService.getRoutesMetadata().subscribe((componentsMetadata) => {
            this.loading = false;
            this.currentLocale = componentsMetadata.currentLocale;
            this.metadata[this.currentLocale] = componentsMetadata.components.leave_message[this.currentLocale];
            console.log(this.metadata[this.currentLocale]);
        });
    }
    ngOnInit() {
    }
};
LeaveMessageComponent.ctorParameters = () => [
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
LeaveMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/leave-message/leave-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave-message.component.scss */ "./src/app/Components/Content/leave-message/leave-message.component.scss")).default]
    })
], LeaveMessageComponent);



/***/ }),

/***/ "./src/app/Components/Content/leave-message/leave-message.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/Content/leave-message/leave-message.module.ts ***!
  \**************************************************************************/
/*! exports provided: LeaveMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveMessageModule", function() { return LeaveMessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _leave_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-message.component */ "./src/app/Components/Content/leave-message/leave-message.component.ts");




let LeaveMessageModule = class LeaveMessageModule {
};
LeaveMessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_leave_message_component__WEBPACK_IMPORTED_MODULE_3__["LeaveMessageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], LeaveMessageModule);



/***/ })

}]);
//# sourceMappingURL=src-app-Components-Content-leave-message-leave-message-module-ts-es2015.js.map