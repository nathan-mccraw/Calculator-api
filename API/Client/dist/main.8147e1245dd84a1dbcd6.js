(self["webpackChunkmy_first_angular_app"] = self["webpackChunkmy_first_angular_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1933:
/*!***************************************************!*\
  !*** ./src/app/AddUser/addUserModal.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserModalComponent": () => (/* binding */ AddUserModalComponent)
/* harmony export */ });
/* harmony import */ var _Model_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/user.model */ 7524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/HttpServices/users.service */ 7543);
/* harmony import */ var _services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/currentUser.service */ 3858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);






class AddUserModalComponent {
    constructor(activeModal, userService, currentUserService) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.currentUserService = currentUserService;
        this.newUser = new _Model_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
    }
    createNewUser() {
        this.userService.PostNewUser(this.newUser).subscribe((userFetched) => {
            this.newUser = userFetched;
            this.currentUserService.updateCurrentUser(userFetched);
            this.activeModal.close();
        }, (error) => {
            alert(`Invalid Input: ${error.error}\n\nPlease try again.`);
        });
    }
}
AddUserModalComponent.ɵfac = function AddUserModalComponent_Factory(t) { return new (t || AddUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_2__.CurrentUserService)); };
AddUserModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddUserModalComponent, selectors: [["app-addUserModal"]], decls: 29, vars: 4, consts: [[1, "modal-header", "justify-content-end"], ["type", "button", "aria-label", "Close", 1, "close", "btn", "btn-outline-secondary", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-center", 3, "ngSubmit"], ["id", "addUserLogo", 1, "fa", "fa-pied-piper-pp", "mb-2", "mt-2"], [1, "h3", "mb-3", "fw-normal"], [1, "input-group", "mb-3"], [1, "input-group-text"], [1, "fa", "fa-user-circle", 2, "font-size", "1.5rem"], [1, "form-floating", "flex-grow-1"], ["name", "username", "type", "text", "id", "username", "placeholder", "Username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "floatingInput"], [1, "form-floating", "mb-3"], ["name", "firstName", "type", "text", "id", "firstName", "placeholder", "First Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["name", "lastName", "type", "text", "id", "lastName", "placeholder", "Last Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", 3, "disabled"]], template: function AddUserModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddUserModalComponent_Template_button_click_1_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddUserModalComponent_Template_form_ngSubmit_5_listener() { return ctx.createNewUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddUserModalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.newUser.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddUserModalComponent_Template_input_ngModelChange_18_listener($event) { return ctx.newUser.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddUserModalComponent_Template_input_ngModelChange_23_listener($event) { return ctx.newUser.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Add User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newUser.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid || _r1.invalid || _r2.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["#addUserLogo[_ngcontent-%COMP%] {\n  font-size: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFVzZXJNb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhZGRVc2VyTW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRVc2VyTG9nbyB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6475:
/*!***************************************************************!*\
  !*** ./src/app/CalculationsHistory/history-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageComponent": () => (/* binding */ HistoryPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/HttpServices/calculate.service */ 8667);
/* harmony import */ var _services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/DataServices/calculationsData.service */ 5792);
/* harmony import */ var _services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/clientParams.service */ 7729);
/* harmony import */ var _sortForm_sortForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortForm/sortForm.component */ 7770);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table/table.component */ 1876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







function HistoryPageComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HistoryPageComponent_div_6_button_4_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const page_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.onPageNumberClick(page_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", page_r4, " ");
} }
function HistoryPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HistoryPageComponent_div_6_button_4_Template, 2, 1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Page: ", ctx_r0.clientParams.pageIndex + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.clientParams.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Showing: ", ctx_r0.clientParams.pageSize * ctx_r0.clientParams.pageIndex, "-", ctx_r0.clientParams.pageSize * (ctx_r0.clientParams.pageIndex + 1), "");
} }
function HistoryPageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HistoryPageComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.clientParams.isPrevDisabled);
} }
function HistoryPageComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HistoryPageComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.clientParams.isNextDisabled);
} }
class HistoryPageComponent {
    constructor(calcService, calcDataService, clientParamsService) {
        this.calcService = calcService;
        this.calcDataService = calcDataService;
        this.clientParamsService = clientParamsService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.clientParamsService.clientParams.subscribe((params) => (this.clientParams = params)));
        this.subscriptions.push(this.calcDataService.calculationsData.subscribe((newCalcData) => (this.calcsData = newCalcData)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    refreshTable() {
        this.calcService.getCalculations(this.clientParams).subscribe((newCalcData) => {
            this.calcsData.calcDTOs = newCalcData;
            this.calcDataService.updateCalcData(this.calcsData);
        }, (error) => alert('Unable to get Calculations'), () => {
            this.calcsData.isDataLoading = false;
            this.calcDataService.updateCalcData(this.calcsData);
        });
    }
    nextPage() {
        this.clientParams.pageIndex += 1;
        this.refreshTable();
    }
    prevPage() {
        this.clientParams.pageIndex -= 1;
        this.refreshTable();
    }
    onPageNumberClick(pageNumber) {
        this.clientParams.pageIndex = pageNumber - 1;
        this.refreshTable();
    }
}
HistoryPageComponent.ɵfac = function HistoryPageComponent_Factory(t) { return new (t || HistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_0__.CalculateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_1__.CalculationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_2__.ClientParamsService)); };
HistoryPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HistoryPageComponent, selectors: [["app-history-page"]], decls: 12, vars: 4, consts: [[1, "container", "h-75"], [1, "row", "justify-content-center"], [1, "col-auto", "mt-1"], [1, "tableFooter"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "tableNav", "d-flex", "justify-content-center", "align-items-center", "mt-4"], ["class", "btn btn-secondary pageBtn me-auto", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-secondary pageBtn ms-auto", 3, "disabled", "click", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], ["role", "group", "aria-label", "Page number buttons", 1, "btn-group", "ms-4", "me-4", "mt-2"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-secondary", "pageBtn", "me-auto", 3, "disabled", "click"], [1, "btn", "btn-secondary", "pageBtn", "ms-auto", 3, "disabled", "click"]], template: function HistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-sortForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HistoryPageComponent_div_6_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HistoryPageComponent_button_8_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HistoryPageComponent_button_11_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.clientParams.count > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.clientParams.count > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Results: ", ctx.clientParams.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.clientParams.count > 0);
    } }, directives: [_sortForm_sortForm_component__WEBPACK_IMPORTED_MODULE_3__.SortFormComponent, _table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".pageBtn[_ngcontent-%COMP%] {\n  background-color: rgb(105, 151, 211);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6Imhpc3RvcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxNTEsIDIxMSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7770:
/*!********************************************************************!*\
  !*** ./src/app/CalculationsHistory/sortForm/sortForm.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFormComponent": () => (/* binding */ SortFormComponent)
/* harmony export */ });
/* harmony import */ var _Model_formState_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Model/formState.model */ 5323);
/* harmony import */ var src_app_Model_clientParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/clientParams.model */ 7880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/DataServices/sortForm.service */ 2619);
/* harmony import */ var _services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/DataServices/calculationsData.service */ 5792);
/* harmony import */ var _services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/HttpServices/calculate.service */ 8667);
/* harmony import */ var src_app_services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/DataServices/clientParams.service */ 7729);
/* harmony import */ var _services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/HttpServices/users.service */ 7543);
/* harmony import */ var _services_HttpServices_operators_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/HttpServices/operators.service */ 3016);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);











function SortFormComponent_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SortFormComponent_div_26_div_3_Template_input_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const user_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r6.UpdateUsersListInForm(user_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("for", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("name", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", user_r5.username, " ");
} }
function SortFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Filter By User:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SortFormComponent_div_26_div_3_Template, 4, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.formData.usersList);
} }
function SortFormComponent_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SortFormComponent_div_27_div_3_Template_input_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const op_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r11.UpdateOperatorsListInForm(op_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("name", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("id", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("for", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](op_r9);
} }
function SortFormComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Filter By Operation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SortFormComponent_div_27_div_3_Template, 4, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.formData.operatorsList);
} }
function SortFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Filter By Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_div_28_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.formState.dateFilterCriteria = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "On Selected Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Before Selected Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "After Selected Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_div_28_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.formState.dateFilter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r3.formState.dateFilterCriteria);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r3.formState.dateFilter);
} }
class SortFormComponent {
    constructor(formService, calcDataService, calcService, clientParamsService, usersService, operatorsService) {
        this.formService = formService;
        this.calcDataService = calcDataService;
        this.calcService = calcService;
        this.clientParamsService = clientParamsService;
        this.usersService = usersService;
        this.operatorsService = operatorsService;
        this.users = [];
        this.operatorsList = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.formService.formState.subscribe((newState) => (this.formState = newState)));
        this.subscriptions.push(this.formService.formData.subscribe((newData) => (this.formData = newData)));
        this.subscriptions.push(this.clientParamsService.clientParams.subscribe((newParams) => (this.clientParams = newParams)));
        this.subscriptions.push(this.calcDataService.calculationsData.subscribe((newCalcsData) => (this.calcsData = newCalcsData)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    onUserFilterClick() {
        console.log(this.formState);
        this.getUpdatedUsersList();
        if (this.formState.isUserFilter === false) {
            this.formState.userFilter = [];
        }
        this.formService.updateFormState(this.formState);
    }
    onDateFilterClick() {
        console.log(this.formState);
        if (this.formState.isDateFilter === false) {
            this.formState.dateFilter = null;
            this.formState.dateFilterCriteria = 'On Selected Date';
        }
        this.formService.updateFormState(this.formState);
        console.log(this.formService.formState);
    }
    onOperatorFilterClick() {
        this.getUpdatedOperatorsList();
        if (this.formState.isOperatorFilter === false) {
            this.formState.operatorFilter = [];
        }
        this.formService.updateFormState(this.formState);
    }
    getUpdatedUsersList() {
        this.usersService
            .getAllUsers()
            .subscribe((updatedUsers) => (this.formData.usersList = updatedUsers));
    }
    getUpdatedOperatorsList() {
        this.operatorsService
            .getOperators()
            .subscribe((updatedOperators) => (this.formData.operatorsList = updatedOperators));
    }
    UpdateUsersListInForm(userId) {
        const index = this.formState.userFilter.indexOf(userId);
        if (index === -1) {
            this.formState.userFilter.push(userId);
        }
        else {
            this.formState.userFilter.splice(index, 1);
        }
    }
    UpdateOperatorsListInForm(operator) {
        const index = this.formState.operatorFilter.indexOf(operator);
        if (index === -1) {
            this.formState.operatorFilter.push(operator);
        }
        else {
            this.formState.operatorFilter.splice(index, 1);
        }
    }
    resetSortForm() {
        const newFormState = new _Model_formState_model__WEBPACK_IMPORTED_MODULE_0__.FormState();
        this.formService.updateFormState(newFormState);
    }
    resetTable() {
        const newClientParams = new src_app_Model_clientParams_model__WEBPACK_IMPORTED_MODULE_1__.ClientParams();
        this.clientParamsService.broadcastClientParamsChange(newClientParams);
        this.refreshTable();
    }
    refreshTable() {
        this.calcService.getCalculations(this.clientParams).subscribe((newCalcData) => {
            this.calcsData.calcDTOs = newCalcData;
        }, (error) => alert('Unable to get Calculations'), () => {
            this.calcsData.isDataLoading = false;
            this.calcDataService.updateCalcData(this.calcsData);
        });
    }
    onSubmit() {
        if (!isNaN(this.formState.search)) {
            this.formService.updateFormState(this.formState);
            this.refreshTable();
        }
        else {
            alert('Invalid search, only value decimal numbers are accepted');
        }
    }
}
SortFormComponent.ɵfac = function SortFormComponent_Factory(t) { return new (t || SortFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_2__.SortFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_3__.CalculationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_4__.CalculateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_5__.ClientParamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_HttpServices_operators_service__WEBPACK_IMPORTED_MODULE_7__.OperatorsService)); };
SortFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SortFormComponent, selectors: [["app-sortForm"]], decls: 35, vars: 7, consts: [[1, "mb-2", 3, "ngSubmit"], ["f", "ngForm"], ["id", "searchGroup"], [1, "input-group"], [1, "input-group-text", "input-group-sm"], [1, "fa", "fa-search"], [1, "form-floating", "flex-grow-1"], ["name", "search", "type", "text", "placeholder", " ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], ["type", "submit", 1, "btn", "btn-secondary"], ["id", "filterGroup", 1, "d-flex", "mt-2"], [1, "h5", "ps-2", "me-2"], ["role", "group", "aria-label", "Filter by user, operator type, or date", 1, "btn-group", "btn-group-sm"], ["type", "checkbox", "id", "filterUser", "name", "filterUser", 1, "btn-check", 3, "ngModel", "ngModelChange", "click"], ["for", "filterUser", 1, "btn", "btn-outline-secondary"], ["type", "checkbox", "id", "filterOperation", "name", "filterOperation", 1, "btn-check", 3, "ngModel", "ngModelChange", "click"], ["for", "filterOperation", 1, "btn", "btn-outline-secondary"], ["type", "checkbox", "id", "filterDate", "name", "filterDate", 1, "btn-check", 3, "ngModel", "ngModelChange", "click"], ["for", "filterDate", 1, "btn", "btn-outline-secondary"], ["id", "sortByUsers", "class", "d-flex align-items-center ms-4 mt-2", 4, "ngIf"], ["id", "sortByOperatoration", "class", "d-flex align-items-center ms-4 mt-2", 4, "ngIf"], ["id", "sortByDate", "class", "d-flex w-100 ms-4 mt-2", 4, "ngIf"], ["id", "resetButtons", 1, "mt-4", "d-flex", "justify-content-end"], ["role", "group", "aria-label", "reset buttons", 1, "btn-group"], ["type", "button", 1, "btn", "btn-danger", "me-4", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["id", "sortByUsers", 1, "d-flex", "align-items-center", "ms-4", "mt-2"], [1, "h5", "me-2"], ["class", "me-4", 4, "ngFor", "ngForOf"], [1, "me-4"], [3, "for"], ["type", "checkbox", 1, "me-1", 3, "name", "value", "click"], ["id", "sortByOperatoration", 1, "d-flex", "align-items-center", "ms-4", "mt-2"], ["class", "me-2", 4, "ngFor", "ngForOf"], [1, "me-2"], ["type", "checkbox", "value", "op", 1, "btn-check", 3, "name", "id", "click"], [1, "btn", "btn-outline-secondary", 3, "for"], ["id", "sortByDate", 1, "d-flex", "w-100", "ms-4", "mt-2"], [1, "h5", "me-2", "col-auto"], ["name", "filterDateCriteria", 1, "form-select", "form-select-sm", 2, "width", "auto", 3, "ngModel", "ngModelChange"], ["value", "On Selected Date", "selected", ""], ["value", "Before Selected Date"], ["value", "After Selected Date"], ["type", "date", "name", "dateFilter", 1, "col-auto", 3, "ngModel", "ngModelChange"]], template: function SortFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function SortFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.formState.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Enter Numbers to Search Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Filter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_Template_input_ngModelChange_17_listener($event) { return ctx.formState.isUserFilter = $event; })("click", function SortFormComponent_Template_input_click_17_listener() { return ctx.onUserFilterClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_Template_input_ngModelChange_20_listener($event) { return ctx.formState.isOperatorFilter = $event; })("click", function SortFormComponent_Template_input_click_20_listener() { return ctx.onOperatorFilterClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SortFormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.formState.isDateFilter = $event; })("click", function SortFormComponent_Template_input_click_23_listener() { return ctx.onDateFilterClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, SortFormComponent_div_26_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, SortFormComponent_div_27_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SortFormComponent_div_28_Template, 11, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SortFormComponent_Template_button_click_31_listener() { return ctx.resetTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Reset Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SortFormComponent_Template_button_click_33_listener() { return ctx.resetSortForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " Reset Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formState.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formState.isUserFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formState.isOperatorFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.formState.isDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formState.isUserFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formState.isOperatorFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formState.isDateFilter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0Rm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1876:
/*!**************************************************************!*\
  !*** ./src/app/CalculationsHistory/table/table.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _Model_calculationsData_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/calculationsData.model */ 664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataServices/calculationsData.service */ 5792);
/* harmony import */ var _services_DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/DataServices/sortForm.service */ 2619);
/* harmony import */ var _services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/HttpServices/calculate.service */ 8667);
/* harmony import */ var _services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/DataServices/clientParams.service */ 7729);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







function TableComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "LOADING");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TableComponent_ng_template_23_tbody_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calc_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](calc_r7.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", calc_r7.firstOperand, " ", calc_r7.operator, " ", calc_r7.secondOperand, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](calc_r7.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.formatDate(calc_r7.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.formatTime(calc_r7.date));
} }
function TableComponent_ng_template_23_tbody_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TableComponent_ng_template_23_tbody_0_tr_1_Template, 11, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.calcsData.calcDTOs);
} }
function TableComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TableComponent_ng_template_23_tbody_0_Template, 2, 1, "tbody", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.calcsData.calcDTOs.length > 0)("ngIfElse", _r3);
} }
function TableComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No Data to Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TableComponent {
    constructor(calcDataService, sortFormDataService, calcHttpService, cp) {
        this.calcDataService = calcDataService;
        this.sortFormDataService = sortFormDataService;
        this.calcHttpService = calcHttpService;
        this.cp = cp;
        this.calcsData = new _Model_calculationsData_model__WEBPACK_IMPORTED_MODULE_0__.CalculationsData();
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.calcDataService.calculationsData.subscribe((newCalcs) => (this.calcsData = newCalcs)));
        this.subscriptions.push(this.sortFormDataService.formState.subscribe((newState) => (this.formState = newState)));
        this.subscriptions.push(this.cp.clientParams.subscribe((newParams) => (this.clientParams = newParams)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    sortForm(sortParam) {
        if (this.formState.orderBy === sortParam) {
            this.formState.sortOrder =
                this.formState.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            this.formState.orderBy = sortParam;
            this.formState.sortOrder = 'ASC';
        }
        this.sortFormDataService.updateFormState(this.formState);
        this.calcHttpService.getCalculations(this.clientParams).subscribe((newCalcData) => {
            this.calcsData.calcDTOs = newCalcData;
            this.calcDataService.updateCalcData(this.calcsData);
        }, (error) => alert('Unable to get Calculations'), () => {
            this.calcsData.isDataLoading = false;
            this.calcDataService.updateCalcData(this.calcsData);
        });
    }
    formatDate(date) {
        const formattedDate = new Date(date).toLocaleDateString();
        return formattedDate;
    }
    formatTime(date) {
        const time = new Date(date).toLocaleTimeString();
        return time;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_1__.CalculationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_2__.SortFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_3__.CalculateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_4__.ClientParamsService)); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 27, vars: 2, consts: [[1, "table-responsive", "mh-75", "overflow-auto"], [1, "table", "table-secondary", "table-striped", "text-center", "mb-1"], ["scope", "col", 1, "ps-3", "pe-3"], [1, "sort"], ["aria-hidden", "true", 1, "fa", "fa-sort", 3, "click"], ["scope", "col", 1, "ps-3", "pe=3"], [4, "ngIf", "ngIfElse"], ["tableWithData", ""], ["tableWithNoData", ""], ["colspan", "5", 1, "h2", "mt-2", "text-center"], ["colspan", "5", 1, "h2", "text-center"], [1, "fa", "fa-spinner"], [4, "ngFor", "ngForOf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableComponent_Template_i_click_7_listener() { return ctx.sortForm("Username"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Operation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableComponent_Template_i_click_11_listener() { return ctx.sortForm("Operator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableComponent_Template_i_click_15_listener() { return ctx.sortForm("Answer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TableComponent_Template_i_click_19_listener() { return ctx.sortForm("Date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TableComponent_tbody_22_Template, 7, 0, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, TableComponent_ng_template_23_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TableComponent_ng_template_25_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calcsData.isDataLoading === true)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".sort[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 9397:
/*!*************************************************************************!*\
  !*** ./src/app/Calculator/calculator-body/calculator-body.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorBodyComponent": () => (/* binding */ CalculatorBodyComponent)
/* harmony export */ });
/* harmony import */ var _Model_expression_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/expression.model */ 5515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_HttpServices_operators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/HttpServices/operators.service */ 3016);
/* harmony import */ var _services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/HttpServices/calculate.service */ 8667);
/* harmony import */ var _services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/DataServices/currentUser.service */ 3858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _calculator_screen_calculator_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calculator-screen/calculator-screen.component */ 3157);
/* harmony import */ var _operator_button_operator_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operator-button/operator-button.component */ 3499);








function CalculatorBodyComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.currentUser.lastName);
} }
function CalculatorBodyComponent_app_operator_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-operator-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_app_operator_button_50_Template_app_operator_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const operator_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.onOperatorClick(operator_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operator_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("operation", operator_r2);
} }
class CalculatorBodyComponent {
    constructor(operatorsService, calculateService, currentUserService) {
        this.operatorsService = operatorsService;
        this.calculateService = calculateService;
        this.currentUserService = currentUserService;
        this.operators = [];
        this.storedOperator = '';
        this.firstOperand = '';
        this.secondOperand = '';
        this.currentOperand = '0';
        this.stickScreen = false;
    }
    ngOnInit() {
        this.getOperatorsArray();
        this.subscription = this.currentUserService.currentUser.subscribe((_user) => (this.currentUser = _user));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getOperatorsArray() {
        this.operatorsService.getOperators().subscribe((operations) => {
            this.operators = operations;
        });
    }
    onKeyPress(key) {
        if (key === '=' || key === 'Enter') {
            this.onCalculate();
        }
        else if (key === 'a') {
            this.onAllClear();
        }
        else if (key === 'c') {
            this.onClear();
        }
        else if (key === 'Backspace') {
            this.currentOperand =
                this.currentOperand.length > 1
                    ? this.currentOperand.slice(0, -1)
                    : (this.currentOperand = '0');
        }
        else if (this.operators.includes(key)) {
            this.onOperatorClick(key);
        }
        else if (!isNaN(key) || key === '.') {
            this.onAppendOperand(key);
        }
    }
    onAllClear() {
        this.stickScreen = false;
        this.firstOperand = '';
        this.secondOperand = '';
        this.storedOperator = '';
        this.currentOperand = '0';
    }
    onClear() {
        console.log('All Clear');
        this.currentOperand = '0';
    }
    onNegativeClick() {
        if (this.currentOperand === '0')
            return;
        this.currentOperand =
            this.currentOperand[0] === '-'
                ? this.currentOperand.slice(1)
                : '-' + this.currentOperand;
    }
    onAppendOperand(num) {
        if (num === '.' && this.currentOperand.includes('.'))
            return;
        if (this.firstOperand !== '' && this.storedOperator === '')
            return;
        this.stickScreen = false;
        if (num === '.' && this.currentOperand === '') {
            this.currentOperand = '0.';
        }
        else if (this.currentOperand === '0') {
            this.currentOperand = num;
        }
        else {
            this.currentOperand += num;
        }
    }
    onOperatorClick(operator) {
        if (this.storedOperator !== '' && this.currentOperand !== '0') {
            let expression = new _Model_expression_model__WEBPACK_IMPORTED_MODULE_0__.Expression(this.currentUser.id, this.firstOperand, this.currentOperand, this.storedOperator);
            this.calculate(expression);
        }
        else if (this.firstOperand !== '') {
            this.secondOperand = this.currentOperand;
        }
        else {
            this.firstOperand = this.currentOperand;
        }
        this.stickScreen = true;
        this.currentOperand = '0';
        this.storedOperator = operator;
    }
    onCalculate() {
        if (this.storedOperator === '')
            return;
        let expression = new _Model_expression_model__WEBPACK_IMPORTED_MODULE_0__.Expression(this.currentUser.id, this.firstOperand, this.currentOperand, this.storedOperator);
        this.storedOperator = '';
        this.calculate(expression);
    }
    calculate(expression) {
        this.calculateService.postCalculation(expression).subscribe((answer) => {
            if (answer === '0') {
                this.onAllClear();
            }
            else {
                this.firstOperand = answer;
                this.secondOperand = '';
                this.currentOperand = '0';
            }
        }, (error) => {
            this.currentOperand = '0';
            alert(`Invalid Expression: ${error.error}\n\nPlease retype the operator and the last operand to try again.\nOr to start over, clear all by clicking "AC" or pressing the 'a' key)`);
        });
        this.stickScreen = true;
    }
}
CalculatorBodyComponent.ɵfac = function CalculatorBodyComponent_Factory(t) { return new (t || CalculatorBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_HttpServices_operators_service__WEBPACK_IMPORTED_MODULE_1__.OperatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_HttpServices_calculate_service__WEBPACK_IMPORTED_MODULE_2__.CalculateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_3__.CurrentUserService)); };
CalculatorBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CalculatorBodyComponent, selectors: [["app-calculator-body"]], decls: 51, vars: 7, consts: [[1, "position-absolute", "top-50", "start-50", "translate-middle"], ["id", "calcBody", 1, "border", "border-4", "p-2", "shadow", 3, "keydown"], ["id", "titleBar"], ["id", "calcTitle", 1, "text-center", "companyName"], [1, "text-center", "h6"], [4, "ngIf"], [3, "firstOperand", "storedOperator", "currentOperand", "stickScreen"], [1, "row", "justify-content-between"], [1, "clearButtons", "col-auto"], [1, "btn", "btn-secondary", "border", "border-1", "border-dark", "m-2", 3, "click"], [1, "negativeButton", "col-auto"], [1, "row"], [1, "col-auto", "p-0"], [1, "row", "m-2", "me-0"], [1, "col-auto", "btn", "btn-circle", "num-button", "m-2", 3, "click"], [1, "col-auto", "btn", "btn-circle", "btn-success", "border", "border-1", "border-dark", "m-2", 3, "click"], ["id", "operatorButtons", 1, "col-auto", "d-flex", "flex-column", "flex-wrap", "p-0"], [3, "operation", "click", 4, "ngFor", "ngForOf"], [3, "operation", "click"]], template: function CalculatorBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CalculatorBodyComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyPress($event.key); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Piedmont Plastics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CalculatorBodyComponent_span_8_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-calculator-screen", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_12_listener() { return ctx.onAllClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_14_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_17_listener() { return ctx.onNegativeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " +/- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_22_listener() { return ctx.onAppendOperand("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_24_listener() { return ctx.onAppendOperand("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_26_listener() { return ctx.onAppendOperand("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_29_listener() { return ctx.onAppendOperand("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_31_listener() { return ctx.onAppendOperand("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_33_listener() { return ctx.onAppendOperand("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_36_listener() { return ctx.onAppendOperand("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_38_listener() { return ctx.onAppendOperand("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_40_listener() { return ctx.onAppendOperand("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_43_listener() { return ctx.onAppendOperand("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_45_listener() { return ctx.onAppendOperand("."); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CalculatorBodyComponent_Template_button_click_47_listener() { return ctx.onCalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, CalculatorBodyComponent_app_operator_button_50_Template, 1, 1, "app-operator-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.currentUser.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentUser.firstName != ctx.currentUser.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("firstOperand", ctx.firstOperand)("storedOperator", ctx.storedOperator)("currentOperand", ctx.currentOperand)("stickScreen", ctx.stickScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.operators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _calculator_screen_calculator_screen_component__WEBPACK_IMPORTED_MODULE_4__.CalculatorScreenComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _operator_button_operator_button_component__WEBPACK_IMPORTED_MODULE_5__.OperatorButtonComponent], styles: ["#calcBody[_ngcontent-%COMP%] {\n  background: repeating-linear-gradient(gray, rgb(75, 75, 75));\n  border-radius: 10px;\n}\n\n#calcTitle[_ngcontent-%COMP%] {\n  font-family: \"Zen Antique\", serif;\n}\n\n#operatorButtons[_ngcontent-%COMP%] {\n  height: 304px;\n}\n\n.num-button[_ngcontent-%COMP%] {\n  background-color: orange;\n  background-image: radial-gradient(rgb(175, 140, 95), rgb(182, 129, 30));\n  border: 1px solid black;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3ItYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQTREO0VBQzVELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1RUFBdUU7RUFDdkUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY2FsY3VsYXRvci1ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FsY0JvZHkge1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KGdyYXksIHJnYig3NSwgNzUsIDc1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjYWxjVGl0bGUge1xuICBmb250LWZhbWlseTogXCJaZW4gQW50aXF1ZVwiLCBzZXJpZjtcbn1cblxuI29wZXJhdG9yQnV0dG9ucyB7XG4gIGhlaWdodDogMzA0cHg7XG59XG5cbi5udW0tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE3NSwgMTQwLCA5NSksIHJnYigxODIsIDEyOSwgMzApKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 3157:
/*!*****************************************************************************!*\
  !*** ./src/app/Calculator/calculator-screen/calculator-screen.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorScreenComponent": () => (/* binding */ CalculatorScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function CalculatorScreenComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.firstOperand);
} }
function CalculatorScreenComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.storedOperator, "");
} }
function CalculatorScreenComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.currentOperand, "");
} }
function CalculatorScreenComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currentOperand);
} }
function CalculatorScreenComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.firstOperand);
} }
class CalculatorScreenComponent {
    constructor() {
        this.firstOperand = '';
        this.currentOperand = '';
        this.storedOperator = '';
        this.stickScreen = false;
    }
}
CalculatorScreenComponent.ɵfac = function CalculatorScreenComponent_Factory(t) { return new (t || CalculatorScreenComponent)(); };
CalculatorScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorScreenComponent, selectors: [["app-calculator-screen"]], inputs: { firstOperand: "firstOperand", currentOperand: "currentOperand", storedOperator: "storedOperator", stickScreen: "stickScreen" }, decls: 8, vars: 5, consts: [["id", "calculatorScreen", 1, "border", "border-1", "border-dark", "pe-2", "ps-2"], ["id", "screenSuperScript"], [4, "ngIf"], ["id", "mainScreen", 1, "text-end", "h2"]], template: function CalculatorScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculatorScreenComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalculatorScreenComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalculatorScreenComponent_span_4_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalculatorScreenComponent_span_6_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CalculatorScreenComponent_span_7_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstOperand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storedOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storedOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stickScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stickScreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["#calculatorScreen[_ngcontent-%COMP%] {\n  \n  font-family: \"Lato\", sans-serif;\n  background-color: rgba(233, 166, 89, 0.699);\n  color: black;\n  border: solid black 3px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n#calculatorScreenInput[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: x-small;\n}\n\n#calculatorScreenAnswer[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3Itc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7RUFDekMsK0JBQStCO0VBQy9CLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjYWxjdWxhdG9yLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbGN1bGF0b3JTY3JlZW4ge1xuICAvKiBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmOyAqL1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNjYsIDg5LCAwLjY5OSk7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2NhbGN1bGF0b3JTY3JlZW5JbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuI2NhbGN1bGF0b3JTY3JlZW5BbnN3ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3499:
/*!*************************************************************************!*\
  !*** ./src/app/Calculator/operator-button/operator-button.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorButtonComponent": () => (/* binding */ OperatorButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class OperatorButtonComponent {
    constructor() {
        this.operation = '';
    }
}
OperatorButtonComponent.ɵfac = function OperatorButtonComponent_Factory(t) { return new (t || OperatorButtonComponent)(); };
OperatorButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorButtonComponent, selectors: [["app-operator-button"]], inputs: { operation: "operation" }, decls: 3, vars: 1, consts: [[1, "m-2"], [1, "btn", "btn-circle", "operator-button", "mt-2", "me-2"]], template: function OperatorButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.operation, " ");
    } }, styles: [".operator-button[_ngcontent-%COMP%] {\n  background-color: rgb(105, 151, 211);\n  border: 1px solid black;\n  color: whitesmoke;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJvcGVyYXRvci1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVyYXRvci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxNTEsIDIxMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 664:
/*!*************************************************!*\
  !*** ./src/app/Model/calculationsData.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationDTO": () => (/* binding */ CalculationDTO),
/* harmony export */   "CalculationsData": () => (/* binding */ CalculationsData)
/* harmony export */ });
class CalculationDTO {
}
class CalculationsData {
    constructor() {
        this.calcDTOs = [];
    }
}


/***/ }),

/***/ 7880:
/*!*********************************************!*\
  !*** ./src/app/Model/clientParams.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientParams": () => (/* binding */ ClientParams)
/* harmony export */ });
class ClientParams {
    constructor() {
        this.pageIndex = 0;
        this.pageSize = 10;
        this.pages = [];
        this.count = 0;
        this.isPrevDisabled = true;
        this.isNextDisabled = true;
    }
}


/***/ }),

/***/ 5515:
/*!*******************************************!*\
  !*** ./src/app/Model/expression.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression)
/* harmony export */ });
class Expression {
    constructor(userId, firstOperand, secondOperand, operator) {
        this.userId = userId;
        this.firstOperand = parseFloat(firstOperand);
        this.secondOperand = parseFloat(secondOperand);
        this.operator = operator;
    }
}


/***/ }),

/***/ 5007:
/*!*****************************************!*\
  !*** ./src/app/Model/formData.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFormData": () => (/* binding */ SortFormData)
/* harmony export */ });
class SortFormData {
}


/***/ }),

/***/ 5323:
/*!******************************************!*\
  !*** ./src/app/Model/formState.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormState": () => (/* binding */ FormState)
/* harmony export */ });
class FormState {
    constructor() {
        this.search = null;
        this.orderBy = 'Date';
        this.sortOrder = 'ASC';
        this.isUserFilter = false;
        this.userFilter = [];
        this.isDateFilter = false;
        this.dateFilter = 'null';
        this.dateFilterCriteria = 'On Selected Date';
        this.isOperatorFilter = false;
        this.operatorFilter = [];
    }
}


/***/ }),

/***/ 7524:
/*!*************************************!*\
  !*** ./src/app/Model/user.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() { }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _Calculator_operator_button_operator_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator/operator-button/operator-button.component */ 3499);
/* harmony import */ var _Calculator_calculator_screen_calculator_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator/calculator-screen/calculator-screen.component */ 3157);
/* harmony import */ var _Calculator_calculator_body_calculator_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calculator/calculator-body/calculator-body.component */ 9397);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _CalculationsHistory_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CalculationsHistory/table/table.component */ 1876);
/* harmony import */ var _AddUser_addUserModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddUser/addUserModal.component */ 1933);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _CalculationsHistory_history_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CalculationsHistory/history-page.component */ 6475);
/* harmony import */ var _CalculationsHistory_sortForm_sortForm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CalculationsHistory/sortForm/sortForm.component */ 7770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    { path: 'calculator', component: _Calculator_calculator_body_calculator_body_component__WEBPACK_IMPORTED_MODULE_3__.CalculatorBodyComponent },
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: 'CalculationsHistory', component: _CalculationsHistory_history_page_component__WEBPACK_IMPORTED_MODULE_7__.HistoryPageComponent },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _Calculator_operator_button_operator_button_component__WEBPACK_IMPORTED_MODULE_1__.OperatorButtonComponent,
        _Calculator_calculator_screen_calculator_screen_component__WEBPACK_IMPORTED_MODULE_2__.CalculatorScreenComponent,
        _Calculator_calculator_body_calculator_body_component__WEBPACK_IMPORTED_MODULE_3__.CalculatorBodyComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _CalculationsHistory_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent,
        _AddUser_addUserModal_component__WEBPACK_IMPORTED_MODULE_6__.AddUserModalComponent,
        _CalculationsHistory_history_page_component__WEBPACK_IMPORTED_MODULE_7__.HistoryPageComponent,
        _CalculationsHistory_sortForm_sortForm_component__WEBPACK_IMPORTED_MODULE_8__.SortFormComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule] }); })();


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _AddUser_addUserModal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AddUser/addUserModal.component */ 1933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/HttpServices/users.service */ 7543);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataServices/currentUser.service */ 3858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);








function NavbarComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", user_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r1.username, " ");
} }
class NavbarComponent {
    constructor(usersService, modalService, currentUserService) {
        this.usersService = usersService;
        this.modalService = modalService;
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
        this.getUsers();
    }
    openModal() {
        this.modalService.open(_AddUser_addUserModal_component__WEBPACK_IMPORTED_MODULE_0__.AddUserModalComponent);
    }
    getUsers() {
        this.usersService.getAllUsers().subscribe((resp) => (this.users = resp));
    }
    getNewUser(userId) {
        this.usersService
            .getUserById(userId)
            .subscribe((resp) => this.currentUserService.updateCurrentUser(resp));
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_HttpServices_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_DataServices_currentUser_service__WEBPACK_IMPORTED_MODULE_2__.CurrentUserService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 1, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "p-2", "mb-3", "bg-light", "border-bottom", "box-shadow"], [1, "col-4", "d-flex", "align-items-center"], ["id", "logo-initials", 1, "fa", "fa-pied-piper-pp", "me-1", "mb-0", "mt-0"], [1, "companyName"], [1, "col-4", "text-center"], ["routerLink", "/", 1, "p-2", "text-dark"], ["id", "logo-graphic", 1, "fa", "fa-pied-piper-alt", "ms-3", "me-3", "mb-0", "mt-0"], ["routerLink", "/CalculationsHistory", 1, "p-2", "text-dark"], [1, "col-4", "d-flex", "justify-content-end"], ["for", "userSelect"], ["id", "userSelect", 1, "form-select-sm", "ms-1", "me-2", 3, "focus", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ms-1"], ["id", "addUser", 3, "click"], ["id", "addUserIcon", 1, "fa", "fa-user-plus"], [3, "value"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Piedmont Plastics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function NavbarComponent_Template_select_focus_13_listener() { return ctx.getUsers(); })("change", function NavbarComponent_Template_select_change_13_listener($event) { return ctx.getNewUser($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NavbarComponent_option_14_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_16_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]], styles: ["#logo-initials[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n#logo-graphic[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n}\r\n\r\n#addUserIcon[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n#addUser[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#userSelect[_ngcontent-%COMP%] {\r\n  border-radius: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nby1pbml0aWFscyB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuXHJcbiNsb2dvLWdyYXBoaWMge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI2FkZFVzZXJJY29uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNhZGRVc2VyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiN1c2VyU2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5792:
/*!*******************************************************************!*\
  !*** ./src/app/services/DataServices/calculationsData.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationsDataService": () => (/* binding */ CalculationsDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CalculationsDataService {
    constructor() {
        this.calculationsData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    }
    updateCalcData(newCalcs) {
        this.calculationsData.next(newCalcs);
    }
}
CalculationsDataService.ɵfac = function CalculationsDataService_Factory(t) { return new (t || CalculationsDataService)(); };
CalculationsDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalculationsDataService, factory: CalculationsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7729:
/*!***************************************************************!*\
  !*** ./src/app/services/DataServices/clientParams.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientParamsService": () => (/* binding */ ClientParamsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ClientParamsService {
    constructor() {
        this.clientParams = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
            pageIndex: 0,
            pageSize: 10,
            pages: [],
            count: 0,
            isNextDisabled: true,
            isPrevDisabled: true
        });
    }
    broadcastClientParamsChange(newParams) {
        this.clientParams.next(newParams);
    }
}
ClientParamsService.ɵfac = function ClientParamsService_Factory(t) { return new (t || ClientParamsService)(); };
ClientParamsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientParamsService, factory: ClientParamsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3858:
/*!**************************************************************!*\
  !*** ./src/app/services/DataServices/currentUser.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentUserService": () => (/* binding */ CurrentUserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CurrentUserService {
    constructor() {
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
            id: 1,
            username: 'Guest',
            firstName: 'Guest',
            lastName: 'Guest',
        });
    }
    updateCurrentUser(newUser) {
        this.currentUser.next(newUser);
    }
}
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(); };
CurrentUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurrentUserService, factory: CurrentUserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2619:
/*!***********************************************************!*\
  !*** ./src/app/services/DataServices/sortForm.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFormService": () => (/* binding */ SortFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _Model_formState_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Model/formState.model */ 5323);
/* harmony import */ var _Model_formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Model/formData.model */ 5007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class SortFormService {
    constructor() {
        this.formState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _Model_formState_model__WEBPACK_IMPORTED_MODULE_0__.FormState());
        this.formData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _Model_formData_model__WEBPACK_IMPORTED_MODULE_1__.SortFormData());
    }
    updateFormData(newData) {
        this.formData.next(newData);
    }
    updateFormState(newState) {
        this.formState.next(newState);
    }
}
SortFormService.ɵfac = function SortFormService_Factory(t) { return new (t || SortFormService)(); };
SortFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SortFormService, factory: SortFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8667:
/*!************************************************************!*\
  !*** ./src/app/services/HttpServices/calculate.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculateService": () => (/* binding */ CalculateService)
/* harmony export */ });
/* harmony import */ var _Model_calculationsData_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Model/calculationsData.model */ 664);
/* harmony import */ var _Model_clientParams_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Model/clientParams.model */ 7880);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataServices/clientParams.service */ 7729);
/* harmony import */ var _DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataServices/sortForm.service */ 2619);
/* harmony import */ var _DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../DataServices/calculationsData.service */ 5792);









class CalculateService {
    constructor(http, clientParamsService, sortFormService, calcDataService) {
        this.http = http;
        this.clientParamsService = clientParamsService;
        this.sortFormService = sortFormService;
        this.calcDataService = calcDataService;
        this.calcsData = new _Model_calculationsData_model__WEBPACK_IMPORTED_MODULE_0__.CalculationsData();
        this.subscriptions = [];
        this.subscriptions.push(this.sortFormService.formState.subscribe((newState) => (this.sortForm = newState)));
        this.subscriptions.push(this.calcDataService.calculationsData.subscribe((newCalcs) => (this.calcsData = newCalcs)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    postCalculation(calculation) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ApiUrl}/calculations`, calculation);
    }
    getCalculations(cp) {
        this.calcsData.isDataLoading = true;
        this.calcDataService.updateCalcData(this.calcsData);
        const urlString = this.buildQueryURL(cp);
        return this.http.get(urlString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            const newParams = new _Model_clientParams_model__WEBPACK_IMPORTED_MODULE_1__.ClientParams();
            newParams.pageIndex = response.pageIndex;
            newParams.pageSize = response.pageSize;
            newParams.count = response.count;
            let index = 0;
            do {
                newParams.pages.push(index + 1);
                index++;
            } while (newParams.pageSize * index < newParams.count);
            if (newParams.pageIndex + 1 < newParams.pages.length) {
                newParams.isNextDisabled = false;
            }
            else {
                newParams.isNextDisabled = true;
            }
            if (newParams.pageIndex > 0) {
                newParams.isPrevDisabled = false;
            }
            else {
                newParams.isPrevDisabled = true;
            }
            this.clientParamsService.broadcastClientParamsChange(newParams);
            return response.data;
        }));
    }
    buildQueryURL(cp) {
        let urlString = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ApiUrl}/Calculations?PageSize=${cp.pageSize}&PageIndex=${cp.pageIndex}`;
        if (this.sortForm.search != null) {
            urlString += `&Search=${this.sortForm.search}`;
        }
        urlString += `&SortOrder=${this.sortForm.sortOrder}`;
        urlString += `&OrderBy=${this.sortForm.orderBy}`;
        if (this.sortForm.isUserFilter) {
            this.sortForm.userFilter.forEach((userId) => {
                urlString += `&UserFilter=${userId}`;
            });
        }
        if (this.sortForm.isOperatorFilter &&
            this.sortForm.operatorFilter.length > 0) {
            const specialCharacters = [
                ',',
                '/',
                '?',
                ':',
                '@',
                '&',
                '=',
                '+',
                '$',
                '#',
            ];
            this.sortForm.operatorFilter.forEach((operator) => {
                let encodedOp;
                if (specialCharacters.includes(operator)) {
                    encodedOp = encodeURIComponent(operator);
                }
                else {
                    encodedOp = encodeURI(operator);
                }
                urlString += `&OperatorFilter=${encodedOp}`;
            });
        }
        if (this.sortForm.isDateFilter && this.sortForm.dateFilter) {
            urlString += `&DateFilter=${this.sortForm.dateFilter}`;
            const encodedCrit = encodeURI(this.sortForm.dateFilterCriteria);
            urlString += `&DateFilterCriteria=${encodedCrit}`;
        }
        return urlString;
    }
}
CalculateService.ɵfac = function CalculateService_Factory(t) { return new (t || CalculateService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_DataServices_clientParams_service__WEBPACK_IMPORTED_MODULE_3__.ClientParamsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_DataServices_sortForm_service__WEBPACK_IMPORTED_MODULE_4__.SortFormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_DataServices_calculationsData_service__WEBPACK_IMPORTED_MODULE_5__.CalculationsDataService)); };
CalculateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: CalculateService, factory: CalculateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3016:
/*!************************************************************!*\
  !*** ./src/app/services/HttpServices/operators.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorsService": () => (/* binding */ OperatorsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class OperatorsService {
    constructor(http) {
        this.http = http;
    }
    getOperators() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl}/operations`);
    }
}
OperatorsService.ɵfac = function OperatorsService_Factory(t) { return new (t || OperatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OperatorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OperatorsService, factory: OperatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7543:
/*!********************************************************!*\
  !*** ./src/app/services/HttpServices/users.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class UsersService {
    constructor(http) {
        this.http = http;
    }
    PostNewUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl}/Users`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((userId) => {
            user.id = userId;
            return user;
        }));
    }
    getAllUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl}/Users`);
    }
    getUserById(userId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl}/Users/${userId}`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    ApiUrl: 'https://historicalcalculator.azurewebsites.net/api',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.8147e1245dd84a1dbcd6.js.map