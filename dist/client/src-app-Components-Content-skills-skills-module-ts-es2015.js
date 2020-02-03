(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Components-Content-skills-skills-module-ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/skills/skills.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/skills/skills.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-carousel [slidesCount]='slidesCount' class=\"carousel\">\r\n    <div *ngFor='let skillCategory of objectKeys(metadata[locale])' style='overflow-y: auto;padding:10px'>\r\n        <div class='intro'>\r\n            <div class='intro-img'>\r\n                {{skillCategory.substring(0,1)}}\r\n            </div>\r\n            <img [src]='\"./app/assets/\" + metadata[locale][skillCategory].img_0' [ngClass]='\"img\" + skillCategory'\r\n                (load)='displayImage($event.target)' class='intro-img' />\r\n            <span class='name'>{{skillCategory}}</span>\r\n        </div>\r\n        <ng-container  *ngIf='skillCategory !== \"otherSkills\"'>\r\n            <div class='content' *ngFor='let skill of objectKeys(metadata[locale][skillCategory].skill)'>\r\n                    <div style=\"font-size:20px\">\r\n                        {{metadata[locale][skillCategory].skill[skill].title}}\r\n                    </div>\r\n                    <div style=\"font-size:20px\" *ngIf='skill === \"angular\"'>\r\n                        <img [src]='\"./app/assets/\" + metadata[locale][skillCategory].skill[skill].img'\r\n                            [ngClass]='\"img\" + skillCategory' (load)='displayImage($event.target)' class='intro-img' />\r\n                    </div>\r\n                    <div *ngFor='let skillDescription of metadata[locale][skillCategory].skill[skill].description'>\r\n                        {{skillDescription}}\r\n                    </div>\r\n            </div>\r\n            <div style='font-size:16px;margin: 0 0 10px 10px;'>\r\n                {{metadata[locale][skillCategory].knowledgeSummary.title}}\r\n            </div>\r\n            <span *ngFor='let knowledgeSummary of metadata[locale][skillCategory].knowledgeSummary.description'>\r\n                &#8226;{{knowledgeSummary}}\r\n            </span>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf='skillCategory === \"otherSkills\"'>\r\n            <div style='font-size:16px;margin: 0 0 10px 10px;'>\r\n                {{ metadata[locale][skillCategory].title}}\r\n            </div>\r\n            <div *ngFor='let otherSkillsDescription of metadata[locale][skillCategory].description'>\r\n                &#8226; {{otherSkillsDescription}}\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</app-carousel>");

/***/ }),

/***/ "./src/app/Components/Content/skills/skills.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/Content/skills/skills.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slides {\n  grid-template-rows: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9Db250ZW50L3NraWxscy9FOlxcYW5ndWxhclBvcnRmb2xpb1xcRkUvc3JjXFxhcHBcXENvbXBvbmVudHNcXENvbnRlbnRcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL0NvbnRlbnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL0NvbnRlbnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXMge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxufSIsIi5zbGlkZXMge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/Content/skills/skills.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/Content/skills/skills.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/page.logic.service */ "./src/app/Services/page.logic.service.ts");




let SkillsComponent = class SkillsComponent extends src_app_Services_page_logic_service__WEBPACK_IMPORTED_MODULE_3__["PageLogic"] {
    constructor(dataService, rootElement) {
        super();
        this.dataService = dataService;
        this.rootElement = rootElement;
        this.metadata = { ro_RO: undefined, en_US: undefined };
        this.slidesCount = 0;
        this.dataService.getRoutesMetadata().subscribe((componentsMetadata) => {
            this.locale = componentsMetadata.currentLocale;
            this.metadata[this.locale] = componentsMetadata.components.skills[this.locale];
            console.log(this.metadata[this.locale]);
            this.slidesCount = this.objectKeys(this.metadata[this.locale]).length;
            console.log(this.slidesCount);
        });
    }
    ngOnInit() { }
    displayImage(image) {
        image.classList.add('fadeIn');
    }
};
SkillsComponent.ctorParameters = () => [
    { type: src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Content/skills/skills.component.html")).default,
        host: {
            class: 'modalComponent'
        },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/Components/Content/skills/skills.component.scss")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/Components/Content/skills/skills.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Components/Content/skills/skills.module.ts ***!
  \************************************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills.component */ "./src/app/Components/Content/skills/skills.component.ts");
/* harmony import */ var _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/carousel/carousel.module */ "./src/app/Components/shared/carousel/carousel.module.ts");





let SkillsModule = class SkillsModule {
};
SkillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]],
        exports: [_shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
        ]
    })
], SkillsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-Components-Content-skills-skills-module-ts-es2015.js.map