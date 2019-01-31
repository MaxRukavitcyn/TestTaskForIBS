(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-component></app-my-component>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_5__["MyComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/my-component/my-component.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%; /* Ширина таблицы */\r\n  border: 4px double black; /* Рамка вокруг таблицы */\r\n  border-collapse: collapse; /* Отображать только одинарные линии */\r\n}\r\nth {\r\n  text-align: left; /* Выравнивание по левому краю */\r\n  background: #ccc; /* Цвет фона ячеек */\r\n  padding: 5px; /* Поля вокруг содержимого ячеек */\r\n  border: 1px solid black; /* Граница вокруг ячеек */\r\n}\r\ntd {\r\n  padding: 5px; /* Поля вокруг содержимого ячеек */\r\n  border: 1px solid black; /* Граница вокруг ячеек */\r\n}\r\n.contact_form {\r\n  padding:12px;\r\n  border-bottom:1px solid #eee;\r\n  position:relative;\r\n}\r\n.button-add {\r\n  background-color: #4CAF50; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1jb21wb25lbnQvbXktY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsbUJBQW1CO0VBQ2hDLHdCQUF3QixFQUFFLHlCQUF5QjtFQUNuRCx5QkFBeUIsRUFBRSxzQ0FBc0M7QUFDbkU7QUFDQTtFQUNFLGdCQUFnQixFQUFFLGdDQUFnQztFQUNsRCxnQkFBZ0IsRUFBRSxvQkFBb0I7RUFDdEMsWUFBWSxFQUFFLGtDQUFrQztFQUNoRCx1QkFBdUIsRUFBRSx5QkFBeUI7QUFDcEQ7QUFDQTtFQUNFLFlBQVksRUFBRSxrQ0FBa0M7RUFDaEQsdUJBQXVCLEVBQUUseUJBQXlCO0FBQ3BEO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1jb21wb25lbnQvbXktY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qINCo0LjRgNC40L3QsCDRgtCw0LHQu9C40YbRiyAqL1xyXG4gIGJvcmRlcjogNHB4IGRvdWJsZSBibGFjazsgLyog0KDQsNC80LrQsCDQstC+0LrRgNGD0LMg0YLQsNCx0LvQuNGG0YsgKi9cclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiDQntGC0L7QsdGA0LDQttCw0YLRjCDRgtC+0LvRjNC60L4g0L7QtNC40L3QsNGA0L3Ri9C1INC70LjQvdC40LggKi9cclxufVxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgLyog0JLRi9GA0LDQstC90LjQstCw0L3QuNC1INC/0L4g0LvQtdCy0L7QvNGDINC60YDQsNGOICovXHJcbiAgYmFja2dyb3VuZDogI2NjYzsgLyog0KbQstC10YIg0YTQvtC90LAg0Y/Rh9C10LXQuiAqL1xyXG4gIHBhZGRpbmc6IDVweDsgLyog0J/QvtC70Y8g0LLQvtC60YDRg9CzINGB0L7QtNC10YDQttC40LzQvtCz0L4g0Y/Rh9C10LXQuiAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiDQk9GA0LDQvdC40YbQsCDQstC+0LrRgNGD0LMg0Y/Rh9C10LXQuiAqL1xyXG59XHJcbnRkIHtcclxuICBwYWRkaW5nOiA1cHg7IC8qINCf0L7Qu9GPINCy0L7QutGA0YPQsyDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+INGP0YfQtdC10LogKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgLyog0JPRgNCw0L3QuNGG0LAg0LLQvtC60YDRg9CzINGP0YfQtdC10LogKi9cclxufVxyXG4uY29udGFjdF9mb3JtIHtcclxuICBwYWRkaW5nOjEycHg7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uYnV0dG9uLWFkZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <button (click)=\"showAdd()\">+</button> <button (click)=\"showEdit()\">edit</button>\n\n  <table>\n    <thead>\n    <tr>\n      <th>id</th>\n      <th>name</th>\n      <th>emailForm</th>\n      <th>emailTo</th>\n      <th>status</th>\n      <th></th>\n    </tr>\n    </thead>\n\n    <tbody *ngFor=\"let key of keys\">\n    <tr>\n      <td>{{requisitions[key].id}}</td>\n      <td>{{requisitions[key].name}}</td>\n      <td>{{requisitions[key].emailFrom}}</td>\n      <td>{{requisitions[key].emailTo}}</td>\n      <td>{{requisitions[key].status}}</td>\n      <td><button (click)=\"deleteReq(requisitions[key].id)\">X</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<form *ngIf=\"!isEdit && isAdd\" (submit)=\"addRequisition()\"\n      name=\"addRequisition\">\n  <div><h3>Добавить</h3>\n    <input placeholder=\"id\" type=\"number\" [(ngModel)]=\"idReq\" name=\"idReq\">\n    <input placeholder=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n    <input placeholder=\"emailFrom\" type=\"text\" [(ngModel)]=\"emailFrom\" name=\"emailFrom\">\n    <input placeholder=\"emailTo\" type=\"text\" [(ngModel)]=\"emailTo\" name=\"emailTo\">\n    <label class=\"contact_form\">статус: </label> <input type=\"checkbox\" [(ngModel)]=\"status\" name=\"status\">\n    <br><br>\n    <button class=\"button-add\" type=\"submit\">добавить</button>\n  </div>\n</form>\n<form *ngIf=\"isEdit && !isAdd\" (submit)=\"patchRequisition()\"\n      name=\"addRequisition\">\n  <div><h3>Редактировать</h3>\n    <input placeholder=\"id\" type=\"number\" [(ngModel)]=\"idReq\" name=\"idReq\">\n    <input placeholder=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n    <input placeholder=\"emailFrom\" type=\"text\" [(ngModel)]=\"emailFrom\" name=\"emailFrom\">\n    <input placeholder=\"emailTo\" type=\"text\" [(ngModel)]=\"emailTo\" name=\"emailTo\">\n    <label class=\"contact_form\">статус: </label> <input type=\"checkbox\" [(ngModel)]=\"status\" name=\"status\">\n    <br><br>\n    <button class=\"button-add\" type=\"submit\">редактировать</button>\n  </div>\n</form>\n<br>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentComponent", function() { return MyComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MyComponentComponent = /** @class */ (function () {
    function MyComponentComponent(http) {
        this.http = http;
        this.status = false;
        this.isEdit = false;
        this.isAdd = false;
    }
    MyComponentComponent.prototype.ngOnInit = function () {
        this.getRequisition();
    };
    MyComponentComponent.prototype.getRequisition = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test/list').subscribe(function (res) {
            _this.requisitions = res;
            _this.keys = Object.keys(_this.requisitions);
        });
    };
    MyComponentComponent.prototype.addRequisition = function () {
        var _this = this;
        var obj = {
            'id': this.idReq,
            'name': this.name,
            'emailFrom': this.emailFrom,
            'emailTo': this.emailTo,
            'status': this.status
        };
        console.log(this.obj);
        this.http.post('http://localhost:8080/test/add', obj).subscribe(function (res) {
            console.log(res);
            _this.getRequisition();
        });
    };
    MyComponentComponent.prototype.showEdit = function () {
        this.isEdit = !this.isEdit;
        this.isAdd = false;
    };
    MyComponentComponent.prototype.showAdd = function () {
        this.isAdd = !this.isAdd;
        this.isEdit = false;
    };
    MyComponentComponent.prototype.patchRequisition = function () {
        var _this = this;
        var obj = {
            'id': this.idReq,
            'name': this.name,
            'emailFrom': this.emailFrom,
            'emailTo': this.emailTo,
            'status': this.status
        };
        console.log(this.obj);
        this.http.put('http://localhost:8080/test/patch', obj).subscribe(function (res) {
            console.log(res);
            _this.getRequisition();
        });
    };
    MyComponentComponent.prototype.deleteReq = function (id) {
        var _this = this;
        this.http.delete('http://localhost:8080/test/' + id).subscribe(function (res) {
            console.log(res);
            _this.ngOnInit();
        });
    };
    MyComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-component',
            template: __webpack_require__(/*! ./my-component.component.html */ "./src/app/components/my-component/my-component.component.html"),
            styles: [__webpack_require__(/*! ./my-component.component.css */ "./src/app/components/my-component/my-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyComponentComponent);
    return MyComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Максим\IdeaProjects\clientForTestTaskForIBS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map