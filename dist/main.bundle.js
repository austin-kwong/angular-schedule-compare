webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_visualize_component__ = __webpack_require__("../../../../../src/app/upload-visualize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_compare_component__ = __webpack_require__("../../../../../src/app/upload-compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dial_pad_component__ = __webpack_require__("../../../../../src/app/dial-pad-component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'visualize',
        component: __WEBPACK_IMPORTED_MODULE_3__upload_visualize_component__["a" /* UploadVisualizeComponent */]
    },
    {
        path: 'compare',
        component: __WEBPACK_IMPORTED_MODULE_4__upload_compare_component__["a" /* UploadCompareComponent */]
    },
    {
        path: 'dialpadder',
        component: __WEBPACK_IMPORTED_MODULE_5__dial_pad_component__["a" /* DialPadComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Hello Stranger.\n  </h1>\n</div>\n<div>\n  <nav>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/visualize\">Visualize Schedule</a>\n    <a routerLink=\"/compare\">Compare Schedules</a>\n    <a routerLink=\"/dialpadder\">DialPad</a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<div>\n<footer style=\"height: 2em; text-align: center;bottom: 0px; position:fixed;width: 100%; left:0;\">Powered by ng-cli. Coded by @augudyne</footer>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ScheduleCompare';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_visualize_component__ = __webpack_require__("../../../../../src/app/upload-visualize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_display_component__ = __webpack_require__("../../../../../src/app/upload-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_compare_component__ = __webpack_require__("../../../../../src/app/upload-compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dial_pad_component__ = __webpack_require__("../../../../../src/app/dial-pad-component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__upload_visualize_component__["a" /* UploadVisualizeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__upload_display_component__["a" /* UploadDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_8__upload_compare_component__["a" /* UploadCompareComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dial_pad_component__["a" /* DialPadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\r\n<p>There is nothing here at the moment, please navigate to other parts</p>\r\n<h3>Visualize Schedule</h3>\r\n<p>Visualizes a UBC iCal.ics Schedule</p>\r\n<h3>Compare Schedules</h3>\r\n<p>Upload two UBC iCal.ics Schedules to visualize the intersection</p>\r\n<h3>DialPadder</h3>\r\n<p>Check if an alphabetic string is dialpad palindromic</p>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dial-pad-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".palindrome{\r\n  animation-name: pulse;\r\n  animation-iteration-count: infinite;\r\n  animation-duration: 2s;\r\n  animation-timing-function: ease;\r\n\r\n}\r\n\r\nh2 {\r\n  font-size: 50px;\r\n}\r\n\r\n.container{\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-flow: column wrap;\r\n      flex-flow: column wrap;\r\n  height: 60vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.inputField{\r\n  border-radius:5px;\r\n  padding:8px;\r\n  border:none;\r\n  border-bottom:1px solid #ccc;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    color:darkgrey;\r\n    transform: scale(1);\r\n    opacity: 0.7;\r\n  }\r\n  50% {\r\n    color:orange;\r\n    transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    color:darkgrey;\r\n    transform: scale(1);\r\n    opacity: 0.7;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dial-pad-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialPadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assert__ = __webpack_require__("../../../../assert/assert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_assert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DialPadComponent = DialPadComponent_1 = (function () {
    function DialPadComponent() {
    }
    DialPadComponent.convertToDialpad = function (input) {
        return input.replace(/[abcABC]/g, '2').replace(/[defDEF]/g, '3')
            .replace(/[ghiGHI]/g, '4').replace(/[jklJKL]/g, '5')
            .replace(/[mnoMNO]/g, '6').replace(/[pqrsPQRS]/g, '7')
            .replace(/[tuvTUV]/g, '8').replace(/[wxyzWXYZ]/g, '9')
            .replace(/\s/g, '');
    };
    DialPadComponent.getFamilyFromChar = function (char) {
        __WEBPACK_IMPORTED_MODULE_1_assert__(char.length === 1);
        switch (char.toLowerCase()) {
            case 'a':
            case 'b':
            case 'c':
                return ['a', 'b', 'c'];
            case 'd':
            case 'e':
            case 'f':
                return ['d', 'e', 'f'];
            case 'g':
            case 'h':
            case 'i':
                return ['g', 'h', 'i'];
            case 'j':
            case 'k':
            case 'l':
                return ['j', 'k', 'l'];
            case 'm':
            case 'n':
            case 'o':
                return ['m', 'n', 'o'];
            case 'p':
            case 'q':
            case 'r':
            case 's':
                return ['p', 'q', 'r', 's'];
            case 't':
            case 'u':
            case 'v':
                return ['t', 'u', 'v'];
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                return ['w', 'x', 'y', 'z'];
        }
    };
    DialPadComponent.prototype.ngOnInit = function () {
        this.inputString = '';
        this.outputString = '';
        this.isPalindrome = false;
        this.possiblePalindromes = [];
    };
    DialPadComponent.prototype.handleTextChange = function (event) {
        var _this = this;
        this.outputString = DialPadComponent_1.convertToDialpad(this.inputString);
        this.isPalindrome = this.stringIsPalindrome(this.outputString);
        var cleanedInput = this.inputString.trim().replace(/\s/g, '');
        if (this.outputString.length > 0 && this.outputString.length < DialPadComponent_1.MAX_LENGTH && !this.isPalindrome) {
            var possible = this.computePossibleStrings(cleanedInput);
            console.log(possible);
            var res = [];
            for (var _i = 0, possible_1 = possible; _i < possible_1.length; _i++) {
                var possibleCompletion = possible_1[_i];
                res.push(cleanedInput + possibleCompletion);
            }
            // filter guard
            this.possiblePalindromes = res.filter(function (s) {
                if (_this.stringIsPalindrome(DialPadComponent_1.convertToDialpad(s))) {
                    return true;
                }
                return false;
            });
        }
        else {
            this.possiblePalindromes = [];
        }
    };
    DialPadComponent.prototype.stringIsPalindrome = function (s) {
        for (var i = 0, j = s.length - 1; i < s.length && j >= 0; i++, j--) {
            if (i >= j)
                return true;
            if (s.charAt(i) !== s.charAt(j)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Compute the possible strings that would be dialpad palindromic
     * @param {string} s The current string
     * @returns {string[]} A list of string completions that make the input palindromic
     */
    DialPadComponent.prototype.computePossibleStrings = function (s) {
        console.log('Computing possible strings for: ', s);
        // prioritize a "mostly palindromic" solution
        var dialpadString = DialPadComponent_1.convertToDialpad(s);
        var res = [];
        for (var i = 1; i < DialPadComponent_1.MAX_SUGGESTION_LENGTH && i < s.length; i++) {
            if (this.stringIsPalindrome(dialpadString.substring(i))) {
                // need to match up to i
                res = res.concat(this.recursiveConcat(s.substring(0, i), ''));
                break;
            }
        }
        res = res.concat(this.recursiveConcat(s, ''));
        return res;
    };
    DialPadComponent.prototype.recursiveConcat = function (s, ssf) {
        var res = [];
        if (ssf.length === DialPadComponent_1.MAX_LENGTH)
            return []; // stop right there!
        if (ssf.length + 1 === s.length) {
            // at the very end, make an array of the possible strings
            for (var _i = 0, _a = DialPadComponent_1.getFamilyFromChar(s.charAt(s.length - 1)); _i < _a.length; _i++) {
                var c = _a[_i];
                res.push((ssf + c).split('').reverse().join(''));
            }
        }
        else {
            for (var _b = 0, _c = DialPadComponent_1.getFamilyFromChar(s.charAt(ssf.length)); _b < _c.length; _b++) {
                var c = _c[_b];
                res = res.concat(this.recursiveConcat(s, ssf + c));
            }
        }
        return res;
    };
    return DialPadComponent;
}());
DialPadComponent.MAX_LENGTH = 8;
DialPadComponent.MAX_SUGGESTION_LENGTH = 10;
DialPadComponent = DialPadComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dial-padder',
        template: "\n    <div>\n      <br/>\n      <input  class = \"inputField\" [(ngModel)]=\"inputString\" (ngModelChange)=\"handleTextChange($event)\" />\n      <div>\n        <h2 [ngClass]=\"{palindrome: isPalindrome}\">{{outputString}}</h2>\n        <div class=\"container\">\n          <div *ngFor=\"let suggestion of possiblePalindromes\">\n            {{suggestion}}\n          </div>\n      </div>\n     \n      </div>\n    </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/dial-pad-component.css")]
    })
], DialPadComponent);

var DialPadComponent_1;
//# sourceMappingURL=dial-pad-component.js.map

/***/ }),

/***/ "../../../../../src/app/upload-compare.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n  border:none;\r\n  display:inline-block;\r\n  outline:0;\r\n  padding:8px 16px;\r\n  vertical-align:middle;\r\n  overflow:hidden;\r\n  text-decoration:none;\r\n  color: #607D8B;\r\n  background-color: #eee;\r\n  text-align:center;\r\n  cursor:pointer;\r\n  white-space:nowrap;\r\n  border-radius: 5px;\r\n}\r\n\r\n.btn:hover{\r\n  box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-compare.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Upload two UBC iCal.ics to visualize their intersection below!</h2>\r\n<div style=\"margin-top: 30px;\">\r\n  <input class=\"btn\" type=\"file\" name=\"cal1\" accept=\".ics\" (change)=\"onChange($event, 1)\" required/><br/><br/>\r\n  <input class=\"btn\" type=\"file\" name=\"cal2\"  accept=\".ics\" (change)=\"onChange($event, 2)\" required/><br/><br/>\r\n  <input class=\"btn\" type=\"submit\" value=\"Upload\" (click)=\"collectFiles()\"/>\r\n</div>\r\n<upload-display *ngIf=\"availability\" [availability]=\"availability\"></upload-display>\r\n"

/***/ }),

/***/ "../../../../../src/app/upload-compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadCompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = '/api/compare';
var UploadCompareComponent = (function () {
    function UploadCompareComponent(http) {
        this.http = http;
        this.msgToDisplay = 'Please upload the first schedule';
        this.counter = 0;
    }
    UploadCompareComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    UploadCompareComponent.prototype.onChange = function (event, schedule) {
        if (schedule === 1 && event.target.files.length > 0) {
            this.file1 = event.target.files[0];
        }
        else if (event.target.files.length > 0) {
            this.file2 = event.target.files[0];
        }
        console.log('file1: ', this.file1);
        console.log('file2: ', this.file2);
    };
    UploadCompareComponent.prototype.collectFiles = function () {
        console.log('collectFiles() called');
        var self = this;
        var form = new FormData();
        form.append('files[]', this.file1, this.file1.name);
        form.append('files[]', this.file2, this.file2.name);
        console.log(form.get('files[]'));
        this.http.post(URL, form).subscribe(function (response) {
            console.log('New availability received...');
            self.availability = response;
        });
    };
    return UploadCompareComponent;
}());
UploadCompareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload-compare',
        template: __webpack_require__("../../../../../src/app/upload-compare.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload-compare.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UploadCompareComponent);

var _a;
//# sourceMappingURL=upload-compare.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 10% (1fr)[5];\r\n      grid-template-columns: 10% repeat(5, 1fr);\r\n  -ms-grid-rows: auto;\r\n      grid-template-rows: auto;\r\n  grid-template-areas:\"times monday tuesday wednesday thursday friday\";\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  background-color: #eeeeee;\r\n\r\n}\r\n\r\n\r\n.timeDisplay {\r\n  display:-ms-grid;\r\n  display:grid;\r\n  grid-area: times;\r\n  margin: 0 15px;\r\n  -ms-grid-columns: auto;\r\n      grid-template-columns: auto;\r\n  -ms-grid-rows: (1fr)[48];\r\n      grid-template-rows: repeat(48, 1fr);\r\n  overflow: hidden;\r\n  text-wrap: none;\r\n  position: absolute;\r\n  left: 0;\r\n  background-color: #eeeeee;\r\n  opacity: 0.8;\r\n  pointer-events: none;\r\n}\r\n\r\n.timeColumn{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: (1fr)[48];\r\n      grid-template-rows: repeat(48, 1fr);\r\n  margin: 1px;\r\n  min-width: 100px;\r\n\r\n}\r\n\r\n.timeSegment{\r\n\tmin-width: 50px;\r\n  min-height: 30px;\r\n  max-height: 30px;\r\n  margin: .5pt;\r\n  padding: 1px;\r\n  color: black;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  cursor: default;\r\n  overflow: hidden;\r\n}\r\n\r\n.timeSegment.available {\r\n  background-color: chartreuse;\r\n}\r\n\r\n.timeSegment.available:hover{\r\n  box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  z-index: 100;\r\n}\r\n\r\n\r\n.timeSegment.available.far{\r\n  background-color: red;\r\n}\r\n\r\n.timeSegment.available.medium{\r\n  background-color: orange;\r\n}\r\n\r\n.timeSegment.available.close{\r\n  background-color: lightgreen;\r\n}\r\n\r\n\r\n\r\n.timeSegment.notAvailable{\r\n  background-color: darkgrey;\r\n}\r\n\r\n.select {\r\n  padding:9px 0;\r\n  border:none;\r\n  border-bottom:1px solid #ccc;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-display.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n\r\n<div>\r\n  <span>\r\n    <label>Start</label>\r\n  <select class=\"select\" title=\"Start Time\" name=\"beginTime\" (change)=\"handleBeginChange($event)\">\r\n    <option *ngFor=\"let time of beginTimes; let i = index\" value=\"{{i}}\">{{time}}</option>\r\n  </select>\r\n\r\n    <label>End</label>\r\n\r\n  <select class=\"select\" title=\"End Time\" name=\"endTime\" (change)=\"handleEndChange($event)\">\r\n    <option  *ngFor=\"let time of endTimes; let i = index\" value=\"{{i}}\">{{time}}</option>\r\n  </select>\r\n  </span>\r\n</div>\r\n<br/>\r\n<a  class=\"container\">\r\n  <a class=\"timeDisplay\">\r\n    <div *ngFor=\"let time of timesToDisplay\" class=\"timeSegment\">\r\n      {{time}}\r\n    </div>\r\n  </a>\r\n  <div style=\"grid-area: monday\" class=\"timeColumn\">\r\n    Monday\r\n    <div *ngFor=\"let timeSlot of toDisplay[0]; let i = index\">\r\n      <div (mouseleave)=\"mouseLeaveTimeSegment($event, 0, i)\"  (mouseenter)=\"mouseEnterTimeSegment($event, 0, i)\" class=\"timeSegment\" [ngClass]=\"{'available': timeSlot, 'notAvailable': !timeSlot}\">{{timeSlot.CLASSNAME}}</div>\r\n    </div>\r\n  </div>\r\n  <div style=\"grid-area: tuesday\" class=\"timeColumn\">\r\n    Tuesday\r\n    <div *ngFor=\"let timeSlot of toDisplay[1]; let i = index\">\r\n      <div (mouseleave)=\"mouseLeaveTimeSegment($event, 1, i)\"  (mouseenter)=\"mouseEnterTimeSegment($event, 1, i)\"  class=\"timeSegment\" [ngClass]=\"{'available': timeSlot, 'notAvailable': !timeSlot}\">{{timeSlot.CLASSNAME}}</div>\r\n    </div>\r\n  </div>\r\n  <div style=\"grid-area: wednesday\" class=\"timeColumn\">\r\n    Wednesday\r\n    <div *ngFor=\"let timeSlot of toDisplay[2]; let i = index\">\r\n      <div (mouseleave)=\"mouseLeaveTimeSegment($event, 2, i)\"  (mouseenter)=\"mouseEnterTimeSegment($event, 2, i)\" class=\"timeSegment\" [ngClass]=\"{'available': timeSlot, 'notAvailable': !timeSlot}\">{{timeSlot.CLASSNAME}}</div>\r\n    </div>\r\n  </div>\r\n  <div style=\"grid-area: thursday\" class=\"timeColumn\">\r\n    Thursday\r\n    <div *ngFor=\"let timeSlot of toDisplay[3]; let i = index\">\r\n      <div (mouseleave)=\"mouseLeaveTimeSegment($event, 3, i)\"  (mouseenter)=\"mouseEnterTimeSegment($event, 3, i)\" class=\"timeSegment\" [ngClass]=\"{'available': timeSlot, 'notAvailable': !timeSlot}\">{{timeSlot.CLASSNAME}}</div>\r\n    </div>\r\n  </div>\r\n  <div style=\"grid-area: friday\" class=\"timeColumn\">\r\n    Friday\r\n    <div *ngFor=\"let timeSlot of toDisplay[4]l let i = index\">\r\n      <div (mouseleave)=\"mouseLeaveTimeSegment($event, 4, i)\"  (mouseenter)=\"mouseEnterTimeSegment($event, 4, i)\" class=\"timeSegment\" [ngClass]=\"{'available': timeSlot, 'notAvailable': !timeSlot}\">{{timeSlot.CLASSNAME}}</div>\r\n    </div>\r\n  </div>\r\n\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/upload-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadDisplayComponent = (function () {
    function UploadDisplayComponent() {
        this.startIndex = 16;
        this.endIndex = 38;
        this.times = ['---------', '00:00 - 00:30', '00:30 - 01:00', '01:00 - 01:30', '01:30 - 02:00',
            '02:00 - 02:30', '02:30 - 03:00', '03:00 - 03:30', '03:30 - 04:00', '04:00 - 04:30',
            '04:30 - 05:00', '05:00 - 05:30', '05:30 - 06:00', '06:00 - 06:30', '06:30 - 07:00',
            '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30',
            '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00',
            '12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30',
            '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
            '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30',
            '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00',
            '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 24:00'];
        this.beginTimes = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00',
            '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30',
            '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
            '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
            '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
            '21:30', '22:00', '22:30', '23:00', '23:30'
        ];
        this.endTimes = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00',
            '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
            '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
            '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
            '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
            '21:30', '22:00', '22;30', '23:00', '23:30', '24:00'];
    }
    UploadDisplayComponent.prototype.ngOnInit = function () {
        this.toDisplay = this.availability;
        this.timesToDisplay = this.times;
        this.setBeginTime(this.startIndex);
        this.setEndTime(this.endIndex);
    };
    UploadDisplayComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges():: called');
        this.availability = changes.availability.currentValue;
        console.log('ngOnChanges():: availability change');
        console.log(JSON.stringify(this.availability));
        this.setBeginTime(this.startIndex);
        this.setEndTime(this.endIndex);
    };
    UploadDisplayComponent.prototype.handleBeginChange = function (event) {
        var i = parseInt(event.target.value, 10);
        this.setBeginTime(i);
    };
    UploadDisplayComponent.prototype.handleEndChange = function (event) {
        var i = parseInt(event.target.value, 10);
        this.setEndTime(i);
    };
    UploadDisplayComponent.prototype.setBeginTime = function (i) {
        console.log('SetBeginTime():: called with: ', i);
        if (i + 1 < this.endIndex) {
            this.startIndex = i;
            this.toDisplay = {
                0: this.availability[0].slice(this.startIndex, this.endIndex),
                1: this.availability[1].slice(this.startIndex, this.endIndex),
                2: this.availability[2].slice(this.startIndex, this.endIndex),
                3: this.availability[3].slice(this.startIndex, this.endIndex),
                4: this.availability[4].slice(this.startIndex, this.endIndex)
            };
            this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex + 1, this.endIndex + 1));
        }
    };
    UploadDisplayComponent.prototype.setEndTime = function (i) {
        console.log('SetEndTime():: called with: ', i);
        if (this.startIndex < i + 1) {
            this.endIndex = i + 1;
            this.toDisplay = {
                0: this.availability[0].slice(this.startIndex, this.endIndex),
                1: this.availability[1].slice(this.startIndex, this.endIndex),
                2: this.availability[2].slice(this.startIndex, this.endIndex),
                3: this.availability[3].slice(this.startIndex, this.endIndex),
                4: this.availability[4].slice(this.startIndex, this.endIndex)
            };
            this.timesToDisplay = [this.times[0]].concat(this.times.slice(this.startIndex + 1, this.endIndex + 1));
            console.log('SetEndTime():: updated timesToDisplay: ', this.endIndex + 1);
        }
    };
    UploadDisplayComponent.prototype.mouseEnterTimeSegment = function (event, wk, i) {
        console.log('hoverTimeSegment():: called with ', wk, i);
        var actualPos = i + this.startIndex;
        if (this.availability[wk][actualPos] !== 0) {
            var location = this.availability[wk][actualPos].LOCATION.replace('\\', '');
            if (!location.isEmpty()) {
                console.log(location);
                event.target.innerHTML = location;
            }
        }
    };
    UploadDisplayComponent.prototype.mouseLeaveTimeSegment = function (event, wk, i) {
        console.log('hoverTimeSegment():: called with ', wk, i);
        var actualPos = i + this.startIndex;
        if (this.availability[wk][actualPos] !== 0 && this.availability[wk][actualPos] !== undefined) {
            var clazzName = this.availability[wk][actualPos].CLASSNAME;
            if (!clazzName.isEmpty()) {
                console.log(clazzName);
                event.target.innerHTML = location;
            }
        }
    };
    return UploadDisplayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UploadDisplayComponent.prototype, "availability", void 0);
UploadDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload-display',
        template: __webpack_require__("../../../../../src/app/upload-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload-display.component.css")]
    })
], UploadDisplayComponent);

//# sourceMappingURL=upload-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload-visualize.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n  border:none;\r\n  display:inline-block;\r\n  outline:0;\r\n  padding:8px 16px;\r\n  vertical-align:middle;\r\n  overflow:hidden;\r\n  text-decoration:none;\r\n  color: #607D8B;\r\n  background-color: #eee;\r\n  text-align:center;\r\n  cursor:pointer;\r\n  white-space:nowrap;\r\n  border-radius: 5px;\r\n}\r\n\r\n.btn:hover{\r\n  box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-visualize.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Upload your UBC iCal.ics to visualize it below!</h2>\r\n<div style=\"margin-top: 30px;\">\r\n  <input class=\"btn\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\".ics\" required/><br/><br/>\r\n  <input class=\"btn\" type=\"submit\" value=\"Upload\" (click)=\"collectFile()\"/>\r\n</div>\r\n<div *ngIf=\"error\">{{error}}</div>\r\n<upload-display *ngIf=\"availability\" [availability]=\"availability\"></upload-display>\r\n"

/***/ }),

/***/ "../../../../../src/app/upload-visualize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadVisualizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = '/api/visualize';
var UploadVisualizeComponent = (function () {
    // })
    function UploadVisualizeComponent() {
    }
    UploadVisualizeComponent.prototype.ngOnInit = function () {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        // mocking behaviour
        //this.availability = {"0":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTTIME":"2017-09-04T15:00:00.000Z","ENDTIME":"2017-09-04T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-04T15:00:00.000Z","ENDTIME":"2017-09-04T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-04T16:00:00.000Z","ENDTIME":"2017-09-04T17:00:00.000Z","LOCATION":"Forest Sciences Centre\\, Room 1001","CLASSNAME":"CPSC 320 T1E"},{"STARTIME":"2017-09-04T16:00:00.000Z","ENDTIME":"2017-09-04T17:00:00.000Z","LOCATION":"Forest Sciences Centre\\, Room 1001","CLASSNAME":"CPSC 320 T1E"},0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-04T21:00:00.000Z","ENDTIME":"2017-09-04T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-04T21:00:00.000Z","ENDTIME":"2017-09-04T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"1":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-05T16:30:00.000Z","ENDTIME":"2017-09-05T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},{"STARTIME":"2017-09-06T01:00:00.000Z","ENDTIME":"2017-09-06T04:00:00.000Z","LOCATION":"Buchanan\\, Room D222","CLASSNAME":"ENGL 112 17A"},0,0,0,0,0,0],"2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T15:00:00.000Z","ENDTIME":"2017-09-06T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-06T15:00:00.000Z","ENDTIME":"2017-09-06T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-06T21:00:00.000Z","ENDTIME":"2017-09-06T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-06T21:00:00.000Z","ENDTIME":"2017-09-06T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"3":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},{"STARTIME":"2017-09-07T16:30:00.000Z","ENDTIME":"2017-09-07T18:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 310 102"},0,0,0,0,0,0,{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},{"STARTIME":"2017-09-07T21:00:00.000Z","ENDTIME":"2017-09-07T23:00:00.000Z","LOCATION":"Institute for Computing (ICICS/CS)\\, Room X350","CLASSNAME":"CPSC 310 L1F"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"4":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-08T15:00:00.000Z","ENDTIME":"2017-09-08T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},{"STARTIME":"2017-09-08T15:00:00.000Z","ENDTIME":"2017-09-08T16:00:00.000Z","LOCATION":"Buchanan\\, Room A101","CLASSNAME":"LING 101 005"},0,0,0,0,0,0,0,0,0,0,{"STARTIME":"2017-09-08T21:00:00.000Z","ENDTIME":"2017-09-08T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},{"STARTIME":"2017-09-08T21:00:00.000Z","ENDTIME":"2017-09-08T22:00:00.000Z","LOCATION":"Hugh Dempster Pavilion\\, Room 110","CLASSNAME":"CPSC 320 101"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
    };
    UploadVisualizeComponent.prototype.collectFile = function () {
        var self = this;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            self.uploader.clearQueue();
            if (status === 200) {
                console.log('New availability received...', JSON.stringify(response));
                self.availability = JSON.parse(response);
                self.error = null;
            }
            else if (status === 500) {
                console.log('Received Error from api', response);
                self.error = response;
            }
        };
        for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
            var file = _a[_i];
            console.log('Uploading file: ' + file.toString());
            file.upload();
        }
    };
    return UploadVisualizeComponent;
}());
UploadVisualizeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload-visualize',
        template: __webpack_require__("../../../../../src/app/upload-visualize.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload-visualize.component.css")]
    })
    // })
], UploadVisualizeComponent);

//
//# sourceMappingURL=upload-visualize.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map