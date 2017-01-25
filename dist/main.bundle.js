webpackJsonp([0,3],{

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(530);


/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TokenResource; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SESSION_TOKEN_NAME = 'torpedo.access-token';
/**
 * Access token management and persistence.
 *
 * AzureADs access token is only handed to us once, after login. To make it survive page refreshes, we persist it
 * separately from AzureAD in session storage.
 *
 * Note that persisting the token is a separate action.
 */
var TokenResource = (function () {
    function TokenResource() {
        this.accessToken = null;
        this.initializeTokenFromSessionStorage();
    }
    /**
     * Clears the token.
     */
    TokenResource.prototype.resetToken = function () {
        this.updateToken(null);
    };
    /**
     * @returns the token.
     */
    TokenResource.prototype.getToken = function () {
        return this.accessToken;
    };
    /**
     * Stores the token.
     *
     * @param accessToken the token or null, if the token should be removed.
     */
    TokenResource.prototype.updateToken = function (accessToken) {
        this.accessToken = accessToken;
        if (!accessToken) {
            // ensure that we always persist token removals
            this.persistToken();
        }
    };
    /**
     * Persists the current token in session storage, to make it available after the user refreshes the page.
     */
    TokenResource.prototype.persistToken = function () {
        var token = this.getToken();
        try {
            if (token) {
                sessionStorage.setItem(SESSION_TOKEN_NAME, token);
            }
            else {
                sessionStorage.removeItem(SESSION_TOKEN_NAME);
            }
        }
        catch (error) {
        }
    };
    TokenResource.prototype.initializeTokenFromSessionStorage = function () {
        try {
            this.updateToken(sessionStorage.getItem(SESSION_TOKEN_NAME));
        }
        catch (error) {
            this.updateToken(null);
        }
    };
    return TokenResource;
}());
TokenResource = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenResource);

//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/token-resource.js.map

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_token_token_resource__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(route, tokenResource) {
        var _this = this;
        this.route = route;
        this.tokenResource = tokenResource;
        this._isUserLoggedIn = false;
        route.queryParams.subscribe(function (params) {
            var token = params['token'];
            if (token) {
                _this.tokenResource.updateToken(params['token']);
                _this.tokenResource.persistToken();
                _this._isUserLoggedIn = true;
                window.location.href = window.location.origin;
            }
        });
    }
    LoginService.prototype.isUserLoggedIn = function () {
        this._isUserLoggedIn = !!this.tokenResource.getToken();
        return this._isUserLoggedIn;
    };
    LoginService.prototype.logout = function () {
        this.tokenResource.resetToken();
        window.location.href = window.location.origin;
    };
    return LoginService;
}());
LoginService.LOGIN_URL = 'https://torpedomaximumauth.azurewebsites.net/account/signin';
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_token_token_resource__["a" /* TokenResource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_token_token_resource__["a" /* TokenResource */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/login.service.js.map

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export hashCode */
/* unused harmony export numToHSL */
/* harmony export (immutable) */ exports["a"] = getContactColor;
function hashCode(str) {
    var hash = 0;
    if (str.length == 0)
        return hash;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
function numToHSL(num) {
    var shortened = num % 360;
    return "hsl(" + shortened + ", 100%, 30%)";
}
function getContactColor(contact) {
    return numToHSL(hashCode(contact.firstname.substr(0, 3) + contact.lastname.substr(0, 3)));
}
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/color-util.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(mdIconRegistry, sanitizer) {
        this.mdIconRegistry = mdIconRegistry;
        this.sanitizer = sanitizer;
        this.title = 'app works!';
        this.iconsFile = './assets/icons.svg';
        mdIconRegistry.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl(this.iconsFile));
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(861),
        styles: [__webpack_require__(855)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdIconRegistry"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdIconRegistry"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/app.component.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color_util__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsListComponent = (function () {
    function ContactsListComponent() {
        this.selectedContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ContactsListComponent.prototype.getColor = function (contact) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_color_util__["a" /* getContactColor */])(contact);
    };
    ContactsListComponent.prototype.onClick = function (contact) {
        this.selectedContact.emit(contact);
    };
    return ContactsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ContactsListComponent.prototype, "contacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ContactsListComponent.prototype, "selectedContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mpBlurredScroll'),
    __metadata("design:type", Object)
], ContactsListComponent.prototype, "mpBlurredScroll", void 0);
ContactsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contacts-list',
        template: __webpack_require__(864),
        styles: [__webpack_require__(858)],
    }),
    __metadata("design:paramtypes", [])
], ContactsListComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts-list.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_ContactsApi__ = __webpack_require__(693);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiInstantiator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Instantiation service for api typescript files.
 */
var ApiInstantiator = (function () {
    function ApiInstantiator($http) {
        this.$http = $http;
    }
    /**
     * Initialize an api object constructed by the swagger codegen. Hand in the object, get back an initialized
     * instance of it.
     *
     * Example:
     * const myApi : MyApiClass = apiInstantiator.initCdpApi(MyApiClass);
     */
    ApiInstantiator.prototype.initContactsApi = function () {
        return this.initApi(__WEBPACK_IMPORTED_MODULE_2__api_ContactsApi__["a" /* ContactsApi */], '');
    };
    ApiInstantiator.prototype.initApi = function (api, domain) {
        // Hack to ensure that we can configure the API to be on the same host (but under a different port) as
        // the app regardless of whether the app is accessed via 'localhost' or remotely.
        domain = domain.replace('SAMEHOST', window.location.hostname);
        return new api(this.$http, domain);
    };
    return ApiInstantiator;
}());
ApiInstantiator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('$http'),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiInstantiator);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/ApiInstantiator.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApiInstantiator__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsService = (function () {
    function ContactsService(apiInst) {
        this.apiInst = apiInst;
        this.useMock = false;
        this.endpoint = apiInst.initContactsApi();
    }
    ContactsService.prototype.getContacts = function () {
        if (this.useMock) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
                // Yield a single value and complete
                observer.next(__webpack_require__(851));
                observer.complete();
            });
        }
        {
            return this.endpoint.contactsGetAll();
        }
    };
    ContactsService.prototype.addContact = function (contact) {
        if (this.useMock) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
                // Yield a single value and complete
                observer.next(contact);
                observer.complete();
            });
        }
        {
            return this.endpoint.contactsAdd(contact);
        }
    };
    ContactsService.prototype.updateContact = function (contact) {
        if (this.useMock) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
                // Yield a single value and complete
                observer.next(contact);
                observer.complete();
            });
        }
        {
            return this.endpoint.contactsUpdate(contact);
        }
    };
    ContactsService.prototype.deleteContact = function (contact) {
        if (this.useMock) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
                // Yield a single value and complete
                observer.next(contact);
                observer.complete();
            });
        }
        {
            return this.endpoint.contactsDelete(contact.id);
        }
    };
    ContactsService.prototype.setMock = function (state) {
        this.useMock = state;
    };
    return ContactsService;
}());
ContactsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__ApiInstantiator__["a" /* ApiInstantiator */]),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ApiInstantiator__["a" /* ApiInstantiator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ApiInstantiator__["a" /* ApiInstantiator */]) === "function" && _a || Object])
], ContactsService);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts.service.js.map

/***/ },

/***/ 456:
/***/ function(module, exports) {

"use strict";
/**
 * CloudArchitektur
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/ContactDto.js.map

/***/ },

/***/ 529:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 529;


/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(696);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/main.js.map

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_list_contacts_list_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_details_contact_details_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_ApiInstantiator__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mp_blurred_scroll__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contacts_list_contacts_list_pipe__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_edit_contact_edit_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_token_token_resource__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_token_http_interceptor__ = __webpack_require__(694);
/* unused harmony export httpInterceptorFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var routes = [];
function httpInterceptorFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_18__data_token_http_interceptor__["a" /* HttpInterceptor */](xhrBackend, requestOptions);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contacts_list_contacts_list_component__["a" /* ContactsListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11_mp_blurred_scroll__["MpBlurredScroll"],
            __WEBPACK_IMPORTED_MODULE_12__contacts_list_contacts_list_pipe__["a" /* ContactsListPipe */],
            __WEBPACK_IMPORTED_MODULE_13__contact_edit_contact_edit_component__["a" /* ContactEditComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__contact_edit_contact_edit_component__["a" /* ContactEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__data_ApiInstantiator__["a" /* ApiInstantiator */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */],
            __WEBPACK_IMPORTED_MODULE_15__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_17__data_token_token_resource__["a" /* TokenResource */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
                useFactory: httpInterceptorFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/app.module.js.map

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color_util__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailsComponent = (function () {
    function ContactDetailsComponent() {
        this.editMode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
    };
    ContactDetailsComponent.prototype.getColor = function (contact) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_color_util__["a" /* getContactColor */])(contact);
    };
    ContactDetailsComponent.prototype.enableEdit = function () {
        this.editMode.emit();
    };
    Object.defineProperty(ContactDetailsComponent.prototype, "contactBirthday", {
        get: function () {
            if (this.contact.birthday && this.contact.birthday.toString() === '0001-01-01T00:00:00') {
                return '';
            }
            else {
                this.contact.birthday;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ContactDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__["ContactDto"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__["ContactDto"]) === "function" && _a || Object)
], ContactDetailsComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContactDetailsComponent.prototype, "editMode", void 0);
ContactDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-details',
        template: __webpack_require__(862),
        styles: [__webpack_require__(856)],
    }),
    __metadata("design:paramtypes", [])
], ContactDetailsComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contact-details.component.js.map

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color_util__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model_ContactDto__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model_ContactDto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_model_ContactDto__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var INITIAL_CONTACT = {
    firstname: '',
    lastname: '',
    emailAddresses: [],
    phoneNumbers: [],
    addresses: [],
    birthday: undefined
};
var ContactEditComponent = (function () {
    function ContactEditComponent() {
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.canceled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.added = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dialogTitle = 'Add new contact';
        this.editExisting = false;
        this.draggedOver = false;
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        if (this.contact) {
            this.editObject = this.clone(this.contact);
            this.editExisting = true;
            this.dialogTitle = 'Edit contact';
        }
        else {
            this.resetEditObject();
            this.editExisting = false;
            this.dialogTitle = 'Add new contact';
        }
    };
    ContactEditComponent.prototype.onSaved = function () {
        var b64Prefix = 'data:image/jpeg;base64,';
        if (typeof (this.editObject.image) !== 'undefined' && this.editObject.image.indexOf(b64Prefix) !== -1) {
            this.editObject.image = this.editObject.image.substring(b64Prefix.length);
        }
        delete this.editObject.imageUri;
        this.contact = this.clone(this.editObject);
        this.resetEditObject();
        if (this.editExisting === true) {
            this.saved.emit(this.contact);
        }
        else {
            this.added.emit(this.contact);
        }
    };
    ContactEditComponent.prototype.onCanceled = function () {
        this.editObject = this.clone(this.contact);
        this.canceled.emit();
    };
    ContactEditComponent.prototype.onDeleted = function () {
        this.resetEditObject();
        this.deleted.emit(this.contact);
    };
    ContactEditComponent.prototype.toggleDragover = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.draggedOver = !this.draggedOver;
    };
    ContactEditComponent.prototype.processPicture = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.draggedOver = false;
        var allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        var file = event.dataTransfer.files[0];
        var reader = new FileReader();
        var self = this;
        reader.onload = function (event) {
            self.editObject.image = event.target.result;
            self.editObject.imageUri = event.target.result;
        };
        if (allowedTypes.indexOf(file.type) !== -1) {
            reader.readAsDataURL(file);
        }
    };
    ContactEditComponent.prototype.unsetAddress = function (index) {
        this.editObject.addresses.splice(index, 1);
    };
    ContactEditComponent.prototype.addAddress = function () {
        if (!this.editObject.addresses) {
            this.editObject.addresses = [];
        }
        this.editObject.addresses.push({
            street: '',
            number: '',
            city: '',
            zip: '',
            region: 'there',
            country: {
                isoCode: 'ALB',
                name: ''
            }
        });
    };
    ContactEditComponent.prototype.unsetMail = function (index) {
        this.editObject.emailAddresses.splice(index, 1);
    };
    ContactEditComponent.prototype.addMail = function () {
        if (!this.editObject.emailAddresses) {
            this.editObject.emailAddresses = [];
        }
        this.editObject.emailAddresses.push('');
    };
    ContactEditComponent.prototype.onMailChange = function (mail, i) {
        this.editObject.emailAddresses[i] = mail;
    };
    ContactEditComponent.prototype.unsetPhone = function (index) {
        this.editObject.phoneNumbers.splice(index, 1);
    };
    ContactEditComponent.prototype.addPhone = function () {
        if (!this.editObject.phoneNumbers) {
            this.editObject.phoneNumbers = [];
        }
        this.editObject.phoneNumbers.push({
            number: ''
        });
    };
    ContactEditComponent.prototype.clone = function (item) {
        var newItem = item;
        if (item && typeof item === "object") {
            newItem = Object.prototype.toString.call(item) === "[object Array]" ? [] : {};
            for (var i in item) {
                newItem[i] = this.clone(item[i]);
            }
        }
        return newItem;
    };
    ContactEditComponent.prototype.resetEditObject = function () {
        this.editObject = INITIAL_CONTACT;
    };
    ContactEditComponent.prototype.getColor = function (contact) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_color_util__["a" /* getContactColor */])(contact);
    };
    return ContactEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_model_ContactDto__["ContactDto"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_model_ContactDto__["ContactDto"]) === "function" && _a || Object)
], ContactEditComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContactEditComponent.prototype, "saved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContactEditComponent.prototype, "canceled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContactEditComponent.prototype, "added", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContactEditComponent.prototype, "deleted", void 0);
ContactEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-edit',
        template: __webpack_require__(863),
        styles: [__webpack_require__(857)]
    }),
    __metadata("design:paramtypes", [])
], ContactEditComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contact-edit.component.js.map

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsListPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsListPipe = (function () {
    function ContactsListPipe() {
    }
    ContactsListPipe.prototype.transform = function (value, args) {
        if (!Array.isArray(value) || !(typeof args === 'string')) {
            return;
        }
        var input = args.toLowerCase();
        var items = value;
        return items.filter(function (item) {
            return item.firstname.toLowerCase().indexOf(input) !== -1 ||
                item.lastname.toLowerCase().indexOf(input) !== -1;
        });
    };
    return ContactsListPipe;
}());
ContactsListPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'contactsListPipe'
    }),
    __metadata("design:paramtypes", [])
], ContactsListPipe);

//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts-list.pipe.js.map

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_list_contacts_list_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = (function () {
    function ContactsComponent(contactsService, loginService) {
        this.contactsService = contactsService;
        this.loginService = loginService;
        this.authenticated = false;
        this._isViewActive = false;
        this.isDetailsActive = false;
        this.isEditingActive = false;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticated = this.loginService.isUserLoggedIn();
        if (this.authenticated) {
            this.contactsService.getContacts().subscribe(function (contacts) {
                _this.contacts = contacts;
            }, function (error) {
            }, function () {
                setTimeout(function () {
                    _this.contactsList.mpBlurredScroll.renderBlurredContent();
                });
            });
        }
    };
    ContactsComponent.prototype.refreshContacts = function () {
        this.ngOnInit();
    };
    Object.defineProperty(ContactsComponent.prototype, "isViewActive", {
        get: function () {
            return (this.isDetailsActive || this.isEditingActive);
        },
        set: function (value) {
            this._isViewActive = value;
            this.isEditingActive = false;
            this.isDetailsActive = false;
        },
        enumerable: true,
        configurable: true
    });
    ContactsComponent.prototype.onSelectContact = function (contact) {
        this.selectedContact = contact;
        this.isDetailsActive = true;
        this.isEditingActive = false;
    };
    ContactsComponent.prototype.newContact = function () {
        this.selectedContact = undefined;
        this.isEditingActive = true;
        this.isDetailsActive = false;
    };
    ContactsComponent.prototype.addContact = function (contact) {
        var _this = this;
        this.contactsService.addContact(contact)
            .subscribe(function (addedContact) {
            _this.contacts.push(addedContact);
            _this.selectedContact = addedContact;
            _this.isEditingActive = false;
            _this.isDetailsActive = true;
        });
    };
    ContactsComponent.prototype.updateContact = function (contact) {
        var _this = this;
        //TODO persist in backend
        this.contactsService.updateContact(contact)
            .subscribe(function (updatedContact) {
            var contactIdx = 0;
            _this.contacts.filter(function (element, index) {
                if (element.id === contact.id) {
                    contactIdx = index;
                }
            });
            _this.contacts[contactIdx] = updatedContact;
            _this.selectedContact = updatedContact;
            _this.isEditingActive = false;
        });
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        //TODO persist in backend
        this.contactsService.deleteContact(contact)
            .subscribe(function (deletedContact) {
            var contactIdx = 0;
            _this.contacts.filter(function (element, index) {
                if (element.id === deletedContact.id) {
                    contactIdx = index;
                }
            });
            _this.contacts.splice(contactIdx, 1);
            _this.selectedContact = undefined;
            _this.isDetailsActive = false;
            _this.isEditingActive = false;
        });
    };
    ContactsComponent.prototype.toggleEditing = function () {
        this.isEditingActive = !this.isEditingActive;
    };
    return ContactsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contactsList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contacts_list_contacts_list_component__["a" /* ContactsListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contacts_list_contacts_list_component__["a" /* ContactsListComponent */]) === "function" && _a || Object)
], ContactsComponent.prototype, "contactsList", void 0);
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contacts',
        template: __webpack_require__(865),
        styles: [__webpack_require__(859)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object])
], ContactsComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts.component.js.map

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsApi; });
/**
 * CloudArchitektur
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/* tslint:disable:no-unused-variable member-ordering */
'use strict';
var ContactsApi = (function () {
    function ContactsApi(http, basePath) {
        this.http = http;
        this.basePath = 'https://torpedomaximumapi.azurewebsites.net';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     *
     * @param contactDto
     */
    ContactsApi.prototype.contactsAdd = function (contactDto, extraHttpRequestParams) {
        var path = this.basePath + '/api/Contacts';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'contactDto' is not null or undefined
        if (contactDto === null || contactDto === undefined) {
            throw new Error('Required parameter contactDto was null or undefined when calling contactsAdd.');
        }
        var requestOptions = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(contactDto);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param id
     */
    ContactsApi.prototype.contactsDelete = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/api/Contacts/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling contactsDelete.');
        }
        var requestOptions = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param id
     */
    ContactsApi.prototype.contactsGet = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/api/Contacts/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling contactsGet.');
        }
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     */
    ContactsApi.prototype.contactsGetAll = function (extraHttpRequestParams) {
        var path = this.basePath + '/api/Contacts';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headerParams = this.defaultHeaders;
        var requestOptions = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     *
     *
     * @param contactDto
     */
    ContactsApi.prototype.contactsUpdate = function (contactDto, extraHttpRequestParams) {
        var path = this.basePath + '/api/Contacts';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        var headerParams = this.defaultHeaders;
        // verify required parameter 'contactDto' is not null or undefined
        if (contactDto === null || contactDto === undefined) {
            throw new Error('Required parameter contactDto was null or undefined when calling contactsUpdate.');
        }
        var requestOptions = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(contactDto);
        return this.http.request(path, requestOptions)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    return ContactsApi;
}());
ContactsApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, String])
], ContactsApi);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/ContactsApi.js.map

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_resource__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpInterceptor; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.tokenResource = new __WEBPACK_IMPORTED_MODULE_2__token_resource__["a" /* TokenResource */]();
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]() };
            }
            options.headers.set('Authorization', "Bearer " + this.tokenResource.getToken());
            options.headers.set('content-type', 'application/json');
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', "Bearer " + this.tokenResource.getToken());
        }
        return _super.prototype.request.call(this, url, options);
    };
    return HttpInterceptor;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]));
HttpInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]) === "function" && _b || Object])
], HttpInterceptor);

var _a, _b;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/http-interceptor.js.map

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_contacts_service__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(contactService, loginService) {
        this.contactService = contactService;
        this.loginService = loginService;
        this.isBackVisibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updatedMockState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.useMock = false;
        this.color = 'warn';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.loginService.isUserLoggedIn();
    };
    HeaderComponent.prototype.toggleMock = function (value) {
        this.useMock = !this.useMock;
        this.contactService.setMock(this.useMock);
        this.updatedMockState.emit();
    };
    HeaderComponent.prototype.onBack = function () {
        this.isBackVisible = false;
        this.isBackVisibleChange.emit(this.isBackVisible);
    };
    HeaderComponent.prototype.onLogin = function () {
        window.location.href = __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */].LOGIN_URL;
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "isBackVisible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HeaderComponent.prototype, "isBackVisibleChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "isUserLoggedIn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "updatedMockState", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__(866),
        styles: [__webpack_require__(860)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_contacts_service__["a" /* ContactsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/header.component.js.map

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(688);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/index.js.map

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/environment.js.map

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.

















//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/polyfills.js.map

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = [
	{
		"firstname": "Harvey",
		"lastname": "Spectre",
		"id": "1791705147",
		"userId": "userId",
		"created": "today",
		"birthday": "11/19/1983",
		"image": "image",
		"imageUri": "./assets/harvey-specter.jpeg",
		"addresses": [
			{
				"id": "id",
				"created": "today",
				"street": "E 54th St",
				"number": "601",
				"zip": "10000",
				"city": "New York City",
				"region": "New York",
				"country": {
					"name": "United States of America"
				}
			}
		],
		"emailAddresses": [
			"harvey.spectre@psl.com"
		],
		"phoneNumbers": [
			{
				"number": "+49 151 233233"
			}
		]
	},
	{
		"firstname": "Marcel",
		"lastname": "Pütz",
		"id": "298285694",
		"emailAddresses": [
			"marcel.p.puetz@gmail.com",
			"marcelpuetz@web.de",
			"marcel.puetz@qaware.de"
		],
		"imageUri": "./assets/marcel-puetz.jpg"
	},
	{
		"firstname": "Marko",
		"lastname": "Grgic",
		"birthday": "18/01/1994",
		"id": "-938628876",
		"phoneNumbers": [
			{
				"number": "+49 TEL EFON"
			},
			{
				"number": "Ich heb ab"
			}
		],
		"addresses": [
			{
				"city": "Rosenheim",
				"country": {
					"name": "Germany"
				}
			},
			{
				"city": "Traunreut",
				"country": {
					"name": "Albanistan"
				}
			}
		],
		"imageUri": "./assets/marko-grgic.jpg"
	},
	{
		"firstname": "Andreas",
		"lastname": "Mock",
		"id": "2104887174"
	},
	{
		"firstname": "Tobias",
		"lastname": "Jonas",
		"id": "-  130988473",
		"imageUri": "./assets/tobias-jonas.jpg"
	},
	{
		"firstname": "Michael",
		"lastname": "Weinberger",
		"id": "173315071",
		"imageUri": "./assets/michael-weinberger.jpg"
	},
	{
		"firstname": "Hans",
		"lastname": "Dampf",
		"id": "-1834484856"
	},
	{
		"firstname": "Peter",
		"lastname": "Pan",
		"id": "552197905"
	},
	{
		"firstname": "Captain",
		"lastname": "Hook",
		"id": "1010915911"
	},
	{
		"firstname": "Tinka",
		"lastname": "Bell",
		"id": "-1010915911"
	},
	{
		"firstname": "Hans",
		"lastname": "Kuckindieluft",
		"id": "1010915911"
	},
	{
		"firstname": "Harvey",
		"lastname": "Spectre",
		"id": "173315071"
	},
	{
		"firstname": "Winnie",
		"lastname": "Puh",
		"id": "2067166037"
	},
	{
		"firstname": "Harry",
		"lastname": "Potter",
		"id": "1217260620",
		"imageUri": "./assets/dummy.jpeg"
	},
	{
		"firstname": "Tom",
		"lastname": "Riddle",
		"id": "-922608510"
	},
	{
		"firstname": "Ronald",
		"lastname": "Weasley",
		"id": "319830840"
	},
	{
		"firstname": "Hermine",
		"lastname": "Granger",
		"id": "-908513260"
	},
	{
		"firstname": "Donald",
		"lastname": "Duck",
		"id": "-1726404753"
	},
	{
		"firstname": "Donald",
		"lastname": "Trump",
		"id": "-1964235356"
	},
	{
		"firstname": "Sirius",
		"lastname": "Black",
		"id": "258290740"
	},
	{
		"firstname": "Martin",
		"lastname": "Hellman",
		"id": "-1394011678"
	},
	{
		"firstname": "Whitfield",
		"lastname": "Diffie",
		"id": "-1760218081"
	}
];

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = ".contact-details .flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.contact-details-icon {\n  margin-top: 14px;\n}\n.contact-details-content-section {\n  margin-left: 16px;\n}\n.contact-details-address {\n  margin: 8px;\n}\n.contact-details-address:first-of-type {\n  margin-top: 16px;\n}\n.contact-details-address:last-of-type {\n  margin-bottom: 16px;\n}\nmd-divider:last-of-type {\n  display: none;\n}\n.contact-details {\n  box-shadow: -4px 0 16px 2px rgba(0, 0, 0, 0.2);\n}\n.contact-details-content {\n  padding: 0 16px 16px 16px;\n}\n.mobile-container {\n  display: inline-block;\n}\n.u-blur {\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  -o-filter: blur(10px);\n  -ms-filter: blur(10px);\n  filter: blur(10px);\n  opacity: 0.5;\n}\n.profile-image-container {\n  position: relative;\n  width: 300px;\n  height: 225px;\n  overflow: hidden;\n}\n.profile-image-container > .u-blur {\n  position: absolute;\n  height: 320px;\n  width: 320px;\n  margin-top: -10px;\n  margin-left: -10px;\n}\n.profile-image-container .blur-overlay {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  height: 225px;\n  width: 300px;\n}\n.image-cropper {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.cropped-image {\n  display: inline;\n  height: 100%;\n  width: auto;\n}\n.dummy-image {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 40pt;\n}\n.blurred-dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 120pt;\n}\n.contact-details-name {\n  position: absolute;\n  bottom: 10px;\n  width: 268px;\n  padding: 0 16px 0 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.contact-details-name h2 {\n  margin: 0;\n}\n.contact-details-name-underlay {\n  position: absolute;\n  bottom: 0;\n}\n.u-grey {\n  color: #505050;\n}\n.contact-details button [md-button] {\n  min-width: 36px;\n  padding: 0;\n}\n.button-small {\n  padding: 0;\n  min-width: 36px;\n}\n"

/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = ".contact-edit .flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.contact-edit {\n  box-shadow: -4px 0 16px 2px rgba(0, 0, 0, 0.2);\n  overflow: scroll;\n  max-height: 100%;\n  max-width: 300px;\n}\n.contact-edit-icon {\n  margin-left: 8px;\n  margin-top: 15px;\n}\n.contact-edit-section-container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.contact-edit-content-section {\n  margin-left: 16px;\n}\n.contact-edit-title h2 {\n  margin: 0;\n}\n.contact-edit-actions {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-bottom: 15px;\n}\n.mobile-container {\n  display: inline-block;\n}\n.u-blur {\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  -o-filter: blur(10px);\n  -ms-filter: blur(10px);\n  filter: blur(10px);\n  opacity: 0.5;\n}\n.profile-image-container {\n  position: relative;\n  width: 300px;\n  height: 225px;\n  overflow: hidden;\n}\n.profile-image-container > .u-blur {\n  position: absolute;\n  height: 245px;\n  width: 320px;\n  margin-top: -10px;\n  margin-left: -10px;\n  background-color: #505050;\n}\n.profile-image-container .blur-overlay {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  height: 225px;\n  width: 300px;\n}\n.profile-image-update-overlay {\n  width: 300px;\n  height: 185px;\n  z-index: 2;\n  position: fixed;\n  opacity: 1;\n}\n.profile-image-update-overlay-dragover {\n  border: 2px dashed #009688;\n}\n.image-cropper {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.cropped-image {\n  display: inline;\n  height: 100%;\n  width: auto;\n}\n.dummy-image {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #505050;\n}\n.dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 15pt;\n  text-align: center;\n}\n.blurred-dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 120pt;\n}\n.contact-edit-name {\n  position: absolute;\n  bottom: 10px;\n  width: 268px;\n  padding: 0 16px 0 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.contact-edit-name h2 {\n  margin: 0;\n}\n.contact-edit-name-underlay {\n  position: absolute;\n  bottom: 0;\n}\n.u-grey {\n  color: #505050;\n}\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = ".search-icon {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.search-input {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 32px;\n  margin-top: 8px;\n  margin-left: 16px;\n}\n.dummy-image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 16pt;\n}\n.phone-number {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = ".contacts {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: calc(100% - 16px);\n  margin: 8px 0;\n  background-color: white;\n  overflow: hidden;\n}\n.header-container {\n  z-index: 5;\n}\n.hide-details {\n  margin-right: -315px;\n}\ncontacts-list {\n  width: 400px;\n  position: relative;\n  overflow: hidden;\n}\ncontact-details,\ncontact-edit {\n  z-index: 4;\n  -webkit-transition: margin-right 0.5s;\n  transition: margin-right 0.5s;\n}\n.filler {\n  width: 30%;\n}\n@media (max-width: 1000px) {\n  .filler {\n    display: none;\n  }\n  .contacts {\n    margin: 0;\n    height: 100%;\n  }\n}\n.add-contacts-button {\n  position: fixed;\n  margin-left: 330px;\n  bottom: 20px;\n  color: white;\n  z-index: 5;\n}\n@media (max-width: 425px) {\n  .add-contacts-button {\n    margin: 0;\n    right: 20px;\n  }\n}\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = ".header {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n}\n.header-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  height: 64px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.user-name,\nbutton[md-button] {\n  font-size: medium;\n}\n.user-name {\n  margin-right: 16px;\n}\n.button-small {\n  padding: 0;\n  min-width: 36px;\n}\n.mockSlider {\n  margin-right: 20px;\n}\n@media (max-width: 430px) {\n  .mockSlider {\n    display: none;\n  }\n}\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "<contacts></contacts>\n"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"contact\" class=\"contact-details\">\n  <div class=\"profile-image-container\">\n    <img *ngIf=\"contact.imageUri\" class=\"u-blur\" src={{contact.imageUri}}>\n\n    <!--if no image is available-->\n    <div *ngIf=\"!contact.imageUri\" class=\"dummy-image u-blur\"\n         [style.background-color]=\"getColor(contact)\">\n      <p class=\"blurred-dummy-image-initials thin\">\n        {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n      </p>\n    </div>\n    <div class=\"blur-overlay\"></div>\n\n    <div class=\"image-cropper\">\n      <img *ngIf=\"contact.imageUri\" class=\"cropped-image\" src={{contact.imageUri}}/>\n\n      <!--if no image is available-->\n      <div *ngIf=\"!contact.imageUri\" class=\"dummy-image\"\n           [style.background-color]=\"getColor(contact)\">\n        <p class=\"dummy-image-initials thin\">\n          {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n        </p>\n      </div>\n    </div>\n\n    <img class=\"contact-details-name-underlay\" src=\"./assets/contact-details-name-underlay.svg\"/>\n    <div class=\"contact-details-name\">\n      <h2>{{contact.firstname}} {{contact.lastname}}</h2>\n      <button md-icon-button (click)=\"enableEdit($event)\" class=\"button-small\">\n        <md-icon class=\"edit-icon u-grey\">edit</md-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"contact-details-content\">\n\n    <div *ngIf=\"contact.phoneNumbers && contact.phoneNumbers.length\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">phone</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p *ngFor='let number of contact.phoneNumbers'>{{number.number}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.phoneNumbers && contact.phoneNumbers.length\"></md-divider>\n\n\n    <div *ngIf=\"contact.emailAddresses && contact.emailAddresses.length\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">mail</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p *ngFor='let mail of contact.emailAddresses'>{{mail}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.emailAddresses && contact.emailAddresses.length\"></md-divider>\n\n    <div *ngFor='let address of contact.addresses' class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">business</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p class=\"contact-details-address\">{{address.number}} {{address.street}}</p>\n        <p class=\"contact-details-address\">{{address.zip}} {{address.city}}</p>\n        <p class=\"contact-details-address\">{{address.region}}</p>\n        <p class=\"contact-details-address\">{{address.country.name}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.addresses && contact.addresses.length\"></md-divider>\n\n    <div *ngIf=\"contactBirthday\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">cake</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p>{{contactBirthday | date: 'yyyy/MM/dd'}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.birthday\"></md-divider>\n\n  </div>\n</div>\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "<div class=\"contact-edit\">\n  <div class=\"profile-image-container\">\n    <!-- target zone for drag and drop upload of contact pictures -->\n    <div class=\"profile-image-update-overlay\" [ngClass]=\"{'profile-image-update-overlay-dragover': draggedOver}\"\n         (dragenter)=\"toggleDragover($event)\" (dragover)=\"$event.preventDefault()\" (dragleave)=\"toggleDragover($event)\"\n         (drop)=\"processPicture($event)\"></div>\n\n    <img *ngIf=\"editObject.imageUri\" class=\"u-blur\" src={{editObject.imageUri}}>\n\n    <!--if no image is available-->\n    <div *ngIf=\"!editObject.imageUri\" class=\"dummy-image u-blur\">\n      <p class=\"blurred-dummy-image-initials thin\">\n        {{editObject.firstname.charAt(0).toUpperCase()}}{{editObject.lastname.charAt(0).toUpperCase()}}\n      </p>\n    </div>\n    <div class=\"blur-overlay\"></div>\n\n    <div class=\"image-cropper\">\n      <img *ngIf=\"editObject.imageUri\" class=\"cropped-image\" src={{editObject.imageUri}}/>\n\n      <!--if no image is available-->\n      <div *ngIf=\"!editObject.imageUri\" class=\"dummy-image\">\n        <p class=\"dummy-image-initials thin\">\n          Drag picture\n          here\n        </p>\n      </div>\n    </div>\n    <img class=\"contact-edit-name-underlay\" src=\"./assets/contact-details-name-underlay.svg\"/>\n    <div class=\"contact-edit-name\">\n      <h2 class=\"contact-edit-title\">{{dialogTitle}}</h2>\n      <button md-icon-button *ngIf=\"editExisting\" (click)=\"onDeleted($event)\">\n        <md-icon class=\"u-grey\">delete_forever</md-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"contact-edit-content\">\n    <div class=\"flex-row contact-edit-section-container\">\n      <md-icon class=\"contact-edit-icon u-grey\">account_box</md-icon>\n      <div class=\"contact-edit-content-section flex-column\">\n        <md-input [(ngModel)]=\"editObject.firstname\" placeholder=\"Firstname\"></md-input>\n        <md-input [(ngModel)]=\"editObject.lastname\" placeholder=\"Lastname\"></md-input>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">phone</md-icon>\n        <button md-icon-button (click)=\"addPhone()\">\n          <md-icon class=\"md-12 u-grey\">add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\" *ngIf=\"editObject.phoneNumbers && editObject.phoneNumbers.length\">\n        <div class=\"contact-edit-content-section\" *ngFor=\"let phone of editObject.phoneNumbers; let i = index\">\n          <div class=\"flex-row\">\n            <!-- TODO find solution for primitive value problem -->\n            <md-input type=\"tel\" [(ngModel)]=\"phone.number\" placeholder=\"Phone\"></md-input>\n            <button md-icon-button (click)=\"unsetPhone(i)\">\n              <md-icon class=\"md-12 u-grey\">delete</md-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">business</md-icon>\n        <button md-icon-button (click)=\"addAddress()\">\n          <md-icon class=\"md-12 u-grey\">add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\" *ngIf=\"editObject.addresses && editObject.addresses.length\">\n        <div class=\"contact-edit-content-section\"\n             *ngFor=\"let address of editObject.addresses; let i = index; let l = last\">\n          <div class=\"flex-row\">\n            <md-input [(ngModel)]=\"address.street\" placeholder=\"Street\"></md-input>\n\n            <button md-icon-button (click)=\"unsetAddress(i)\">\n              <md-icon class=\"md-12 u-grey\">delete</md-icon>\n            </button>\n          </div>\n          <md-input [(ngModel)]=\"address.number\" placeholder=\"Number\"></md-input>\n          <md-input [(ngModel)]=\"address.city\" name=\"city{{i}}\" placeholder=\"City\"></md-input>\n          <md-input [(ngModel)]=\"address.zip\" name=\"zip{{i}}\" placeholder=\"ZIP\"></md-input>\n          <md-input [(ngModel)]=\"address.country.name\" name=\"country{{i}}\" placeholder=\"Country\"></md-input>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">email</md-icon>\n        <button md-icon-button (click)=\"addMail()\">\n          <md-icon class=\"md-12 u-grey\">add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\" *ngIf=\"editObject.emailAddresses && editObject.emailAddresses.length\">\n        <div class=\"contact-edit-content-section\" *ngFor=\"let mail of editObject.emailAddresses; let i = index\">\n          <div class=\"flex-row\">\n            <md-input type=\"email\" [ngModel]=\"mail\" (ngModel)=\"onMailChange($event, i)\" name=\"mail{{i}}\"\n                      placeholder=\"Mail\"></md-input>\n            <button md-icon-button (click)=\"unsetMail(i)\">\n              <md-icon class=\"md-12 u-grey\">delete</md-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n    <br>\n    <div class=\"flex-row contact-edit-section-container\">\n      <md-icon class=\"contact-edit-icon u-grey\">cake</md-icon>\n      <div class=\"contact-edit-content-section\">\n        <md-input type=\"date\" [(ngModel)]=\"editObject.birthday\" name=\"birthday\" placeholder=\"Birthday\"></md-input>\n      </div>\n    </div>\n\n    <div class=\"contact-edit-actions flex-row\">\n      <button md-button (click)=\"onCanceled()\">Abort</button>\n      <button md-button (click)=\"onSaved()\">Save</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "<mp-blurred-scroll #mpBlurredScroll>\n\n  <mp-blurred-scroll-header>\n    <md-input #searchBox class=\"search-input\" placeholder=\"search\"\n              align=\"start\">\n      <md-icon class=\"search-icon\" md-prefix>search</md-icon>\n    </md-input>\n  </mp-blurred-scroll-header>\n\n  <mp-blurred-scroll-content>\n    <md-nav-list>\n      <md-list-item (click)=\"onClick(contact)\" *ngFor=\"let contact of contacts | contactsListPipe:searchBox.value; trackBy: contact?.id\">\n        <img *ngIf=\"contact.imageUri\" md-list-avatar src=\"{{contact.imageUri}}\" alt=\"not found\">\n        <div *ngIf=\"!contact.imageUri\" md-list-avatar class=\"dummy-image\"\n             [style.background-color]=\"getColor(contact)\">\n          <p class=\"dummy-image-initials thin\">\n            {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n          </p>\n        </div>\n        <h3 md-line> {{contact.lastname}} </h3>\n        <p md-line>\n          <span> {{contact.firstname}} </span>\n        </p>\n        <p *ngIf=\"contact.phoneNumbers && contact.phoneNumbers[0]\" class=\"phone-number tablet-and-greater\">{{contact.phoneNumbers[0].number}}</p>\n      </md-list-item>\n    </md-nav-list>\n  </mp-blurred-scroll-content>\n\n</mp-blurred-scroll>\n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-row full-height\">\n  <div class=\"filler\"></div>\n  <div class=\"contacts flex-column full-height\">\n    <div class=\"header-container\">\n      <header [(isBackVisible)]=\"isViewActive\" (updatedMockState)=\"refreshContacts()\"></header>\n    </div>\n    <div class=\"flex-row full-height\" *ngIf=\"authenticated\">\n      <contacts-list #contactsList [contacts]=\"contacts\" (selectedContact)=\"onSelectContact($event)\"></contacts-list>\n      <contact-details [hidden]=\"isEditingActive\" [contact]=\"selectedContact\" (editMode)=\"toggleEditing()\"\n                       [ngClass]=\"{'hide-details' : !isDetailsActive}\"></contact-details>\n      <contact-edit *ngIf=\"isEditingActive\" [contact]=\"selectedContact\"\n                    (saved)=\"updateContact($event)\" (canceled)=\"toggleEditing()\"\n                    (added)=\"addContact($event)\" (deleted)=\"deleteContact($event)\"></contact-edit>\n      <button md-fab class=\"add-contacts-button\" [hidden]=\"isEditingActive\" (click)=\"newContact()\">\n        <md-icon class=\"md-24\">person_add</md-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"filler\"></div>\n</div>\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "<div class=\"header\">\n  <md-toolbar color=\"primary\">\n    <div class=\"header-content\">\n      <button md-button (click)=\"onBack()\" [ngClass]=\"{hidden : !isBackVisible}\" class=\"mobile-only button-small\">\n        <md-icon >arrow_back</md-icon>\n      </button>\n      <span class=\"tablet-and-greater flex-grow-2\">Torpedo Maximum Contacts</span>\n      <md-slide-toggle *ngIf=\"isUserLoggedIn\" class=\"mockSlider\" [checked]=\"useMock\" (change)=\"toggleMock($event)\" [color]=\"color\">Use Mock</md-slide-toggle>\n      <div class=\"flex-row vertical-center font-l\" *ngIf=\"isUserLoggedIn\">\n        <md-icon class=\"header-icon\" svgIcon=\"account\"></md-icon>\n        <span class=\"thin user-name\">Leeeroooy Jenkins</span>\n      </div>\n      <!-- User is logged out -->\n      <button *ngIf=\"!isUserLoggedIn\" (click)=\"onLogin()\" md-button class=\"flex-row vertical-center\">\n        <md-icon class=\"header-icon\" svgIcon=\"login\"></md-icon>\n        <span class=\"thin\">Login</span>\n      </button>\n      <!-- User is logged in -->\n      <button (click)=\"onLogout()\" *ngIf=\"isUserLoggedIn\" md-button class=\"flex-row vertical-center font-l\">\n        <md-icon class=\"header-icon\" svgIcon=\"logout\"></md-icon>\n        <span class=\"thin\">Logout</span>\n      </button>\n    </div>\n  </md-toolbar>\n</div>\n"

/***/ }

},[1122]);
//# sourceMappingURL=main.bundle.map