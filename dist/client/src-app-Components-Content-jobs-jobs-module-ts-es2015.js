(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-jobs-jobs-module-ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-carousel class=\"carousel\" data-slide-index ='0'>\r\n    <div *ngFor='let job of pageLogic.objectKeys(metadata[locale])' class='slideContainer'>\r\n        <div class='intro'>\r\n            <div class='intro-img'>\r\n                {{job.substring(0,1)}}\r\n            </div>\r\n            <img [src]='\"./app/assets/\" + metadata[locale][job].img_0' [ngClass]='\"img\" + job'\r\n                (load)='displayImage($event.target)' class='intro-img' />\r\n            <span class='name'>{{metadata[locale][job].company}}</span>\r\n            <i>{{metadata[locale][job].shortDescription}}</i>\r\n        </div>\r\n        <div class='content' *ngFor='let role of pageLogic.objectKeys(metadata[locale][job].roles)'>\r\n            <div style=\"font-size:20px\">\r\n                {{metadata[locale][job].roles[role].role}}\r\n            </div>\r\n            <div>\r\n                {{metadata[locale][job].roles[role].period}}\r\n            </div>\r\n            <div style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].responsabilities.title}}\r\n            </div>\r\n            <div *ngFor='let responsability of metadata[locale][job].roles[role].responsabilities.description'>\r\n                {{responsability}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].responsabilities.notes'>\r\n                {{metadata[locale][job].roles[role].responsabilities.notes}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].wins' style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].wins.title}}\r\n            </div>\r\n            <ng-container *ngIf='metadata[locale][job].roles[role].wins'>\r\n                <div *ngFor='let win of metadata[locale][job].roles[role].wins.description'>\r\n                    {{win}}\r\n                </div>\r\n            </ng-container>\r\n            <div *ngIf='metadata[locale][job].roles[role].technologies' style='margin-left:10px;font-size: 16px;'>\r\n                {{metadata[locale][job].roles[role].technologies.title}}\r\n            </div>\r\n            <div *ngIf='metadata[locale][job].roles[role].technologies'>\r\n                <span *ngFor='let technology of metadata[locale][job].roles[role].technologies.description'>\r\n                    {{technology}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-carousel>");

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
/* harmony import */ var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/page.logic.service */ "./src/app/Services/page.logic.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


// import { DataService } from 'src/app/Services/data.service';
// import { ComponentsMetadata, Lang } from 'src/app/Interfaces/interfaces';


let JobsComponent = class JobsComponent {
    constructor(pageLogic) {
        this.pageLogic = pageLogic;
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.locale = 'en_US';
        this.pageLogic.currentLocaleTranslations$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((localeTranslations) => localeTranslations.currentUrl === 'jobs'))
            .subscribe((localeTranslations) => {
            if (this.metadata[localeTranslations.locale] !== undefined) {
                this.locale = localeTranslations.locale;
                this.pageLogic.hideModalSibling('skills');
            }
            else {
                this.pageLogic.fetchComponentsMetadata('jobs').then((metadata) => {
                    this.locale = localeTranslations.locale;
                    this.metadata[this.locale] = metadata;
                    this.pageLogic.hideModalSibling('skills');
                });
            }
        });
    }
    ngOnInit() { }
    displayImage(image) {
        image.classList.add('fadeIn');
    }
};
JobsComponent.ctorParameters = () => [
    { type: src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_2__["PageLogic"] }
];
JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/jobs/jobs.component.html")).default,
        host: {
            class: 'modalComponent'
        },
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
/* harmony import */ var _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/carousel/carousel.module */ "./src/app/Components/shared/carousel/carousel.module.ts");





let JobsModule = class JobsModule {
};
JobsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"]],
        exports: [_shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
        ],
    })
], JobsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-Components-Content-jobs-jobs-module-ts-es2015.js.map