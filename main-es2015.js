(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"screen\">\n  <div id=\"content\">\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to {{ title }}!\n      </h1>\n      <img width=\"100\" alt=\"Angular Logo\"\n           src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <app-chat-list [entries]=\"entries\"></app-chat-list>\n    <app-chat-entry (addEntry)=\"addEntry($event)\"></app-chat-entry>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#screen {\n  height: 100vh;\n  /*width: 300px;*/\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjcmVlbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIC8qd2lkdGg6IDMwMHB4OyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chat';
        this.entries = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
    }
    ngOnInit() {
        // setInterval(() => {
        //   this.entries.push(new Date().toISOString());
        // }, 2000);
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-message/chat-message.component */ "./src/app/chat-message/chat-message.component.ts");
/* harmony import */ var _chat_message_chat_message_progress_chat_message_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-message/chat-message-progress/chat-message-progress.component */ "./src/app/chat-message/chat-message-progress/chat-message-progress.component.ts");
/* harmony import */ var _chat_entry_chat_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-entry/chat-entry.component */ "./src/app/chat-entry/chat-entry.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatListComponent"],
            _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"],
            _chat_message_chat_message_progress_chat_message_progress_component__WEBPACK_IMPORTED_MODULE_6__["ChatMessageProgressComponent"],
            _chat_entry_chat_entry_component__WEBPACK_IMPORTED_MODULE_7__["ChatEntryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat-entry/chat-entry.component.scss":
/*!******************************************************!*\
  !*** ./src/app/chat-entry/chat-entry.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  display: flex;\n  flex: 0 1 auto;\n  border-color: #00000014;\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n}\n\ninput {\n  border: 0;\n  flex: 1 1 auto;\n  padding-left: 10px;\n  font-size: medium;\n}\n\nbutton {\n  border: none;\n  font-size: 22px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFuZGkvRGV2L015R2l0aHViL25nLWNoYXQvc3JjL2FwcC9jaGF0LWVudHJ5L2NoYXQtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQtZW50cnkvY2hhdC1lbnRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFdBQUE7RUFHQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZW50cnkvY2hhdC1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xuICAvL2JhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICB3aWR0aDogMTAwJTtcbiAgLy9tYXJnaW46IDEwcHggMTZweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBib3JkZXItY29sb3I6ICMwMDAwMDAxNDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgLy9iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBib3JkZXItY29sb3I6ICMwMDAwMDAxNDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-entry/chat-entry.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chat-entry/chat-entry.component.ts ***!
  \****************************************************/
/*! exports provided: ChatEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEntryComponent", function() { return ChatEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatEntryComponent = class ChatEntryComponent {
    constructor() {
        this.addEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // setInterval(() => {
        //   this.addEntry.next(new Date().toISOString());
        // }, 4000);
    }
    onAddEntry(entryText) {
        console.log('ViewChild', this.entryInput.nativeElement.value);
        console.log('Value', entryText);
        this.addEntry.next(entryText);
        this.entryInput.nativeElement.value = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('entryText', { static: true })
], ChatEntryComponent.prototype, "entryInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChatEntryComponent.prototype, "addEntry", void 0);
ChatEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-entry',
        template: `
      <input #entryText (keyup.enter)="onAddEntry(entryText.value)"/>
      <button (click)="onAddEntry(entryText.value)">
          <i class="fas fa-paper-plane"></i>
      </button>
  `,
        styles: [__webpack_require__(/*! ./chat-entry.component.scss */ "./src/app/chat-entry/chat-entry.component.scss")]
    })
], ChatEntryComponent);



/***/ }),

/***/ "./src/app/chat-list/chat-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 2;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-color: #00000014;\n  border-style: solid;\n  border-width: 1px;\n}\n\n#list {\n  background: azure;\n  height: 100%;\n  width: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n#list div:nth-child(even) {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFuZGkvRGV2L015R2l0aHViL25nLWNoYXQvc3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMjtcbiAgLy9iYWNrZ3JvdW5kOiBhenVyZTtcbiAgLy9oZWlnaHQ6IDEwMCU7XG4gIC8vd2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDE0O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuI2xpc3Qge1xuICBiYWNrZ3JvdW5kOiBhenVyZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuI2xpc3QgZGl2Om50aC1jaGlsZChldmVuKSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIiwiOmhvc3Qge1xuICBmbGV4OiAyO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDE0O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuI2xpc3Qge1xuICBiYWNrZ3JvdW5kOiBhenVyZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuI2xpc3QgZGl2Om50aC1jaGlsZChldmVuKSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-list/chat-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.ts ***!
  \**************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatListComponent = class ChatListComponent {
    // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    constructor() {
    }
    ngOnInit() {
        // setInterval(() => {
        //   this.entries.push(new Date().toISOString());
        // }, 2000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatListComponent.prototype, "entries", void 0);
ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-list',
        template: `
      <div id="list" #scrollMe [scrollTop]="scrollMe.scrollHeight">
          <div *ngFor="let entry of entries; odd as isOdd">
              <app-chat-message [entry]="entry" [isOdd]="isOdd"></app-chat-message>
          </div>

      </div>
  `,
        styles: [__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/chat-list/chat-list.component.scss")]
    })
], ChatListComponent);



/***/ }),

/***/ "./src/app/chat-message/chat-message-progress/app-chat-message-progress.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/chat-message/chat-message-progress/app-chat-message-progress.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding-left: 30px;\n  padding-top: 10px;\n}\n\n.progress span {\n  font-size: xx-large;\n  -webkit-animation-name: blink;\n          animation-name: blink;\n  -webkit-animation-duration: 1.4s;\n          animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.progress span:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\n.progress span:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0.2;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n\n@keyframes blink {\n  0% {\n    opacity: 0.2;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFuZGkvRGV2L015R2l0aHViL25nLWNoYXQvc3JjL2FwcC9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLXByb2dyZXNzL2FwcC1jaGF0LW1lc3NhZ2UtcHJvZ3Jlc3Muc2NzcyIsInNyYy9hcHAvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS1wcm9ncmVzcy9hcHAtY2hhdC1tZXNzYWdlLXByb2dyZXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFlBQUE7RUNDRjtBQUNGOztBRFZBO0VBQ0U7SUFDRSxZQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtFRENBO0lBQ0UsWUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLXByb2dyZXNzL2FwcC1jaGF0LW1lc3NhZ2UtcHJvZ3Jlc3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnByb2dyZXNzIHNwYW4ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBhbmltYXRpb24tbmFtZTogYmxpbms7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5wcm9ncmVzcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLjJzO1xufVxuXG4ucHJvZ3Jlc3Mgc3BhbjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC40cztcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAuMjtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogLjI7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnByb2dyZXNzIHNwYW4ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBhbmltYXRpb24tbmFtZTogYmxpbms7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5wcm9ncmVzcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnByb2dyZXNzIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-message/chat-message-progress/chat-message-progress.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/chat-message/chat-message-progress/chat-message-progress.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChatMessageProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageProgressComponent", function() { return ChatMessageProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatMessageProgressComponent = class ChatMessageProgressComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ChatMessageProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-message-progress',
        template: `
      <div >
          <div class="progress">
              <span>.</span><span>.</span><span>.</span>
          </div>
      </div>
  `,
        styles: [__webpack_require__(/*! ./app-chat-message-progress.scss */ "./src/app/chat-message/chat-message-progress/app-chat-message-progress.scss")]
    })
], ChatMessageProgressComponent);



/***/ }),

/***/ "./src/app/chat-message/chat-message.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  display: inline-block;\n  padding: 8px 12px;\n  border-radius: 12px;\n  margin: 5px;\n}\n\n.leftBubble {\n  background: whitesmoke;\n  border-bottom-left-radius: 2px;\n}\n\n.rightBubble {\n  background: lightgreen;\n  border-bottom-right-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFuZGkvRGV2L015R2l0aHViL25nLWNoYXQvc3JjL2FwcC9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmxlZnRCdWJibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG59XG5cbi5yaWdodEJ1YmJsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG59XG4iLCJwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5sZWZ0QnViYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xufVxuXG4ucmlnaHRCdWJibGUge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-message/chat-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.ts ***!
  \********************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatMessageComponent = class ChatMessageComponent {
    constructor() {
        this.showBubbles = false;
    }
    ngOnInit() {
        if (this.isOdd) {
            // this.animationClass = 'animated slideInRight ';
            this.animationClass = '';
            this.bubbleClass = 'rightBubble';
        }
        else {
            this.animationClass = 'animated slideInLeft delay-2s';
            this.bubbleClass = 'leftBubble';
            this.showBubbles = true;
            setTimeout(() => {
                this.showBubbles = false;
            }, 2200);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatMessageComponent.prototype, "entry", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChatMessageComponent.prototype, "isOdd", void 0);
ChatMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-message',
        template: `
    <div style="position: relative">
      <app-chat-message-progress *ngIf="showBubbles" style="position: absolute"></app-chat-message-progress>
      <div [ngClass]="animationClass">
          <p [ngClass]="bubbleClass">
              {{entry}}
          </p>
      </div>
    </div>
  `,
        styles: [__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/chat-message/chat-message.component.scss")]
    })
], ChatMessageComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jbandi/Dev/MyGithub/ng-chat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map