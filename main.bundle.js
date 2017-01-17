webpackJsonp([0,3],{

/***/ 1093:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(502);


/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var ContactEditComponent = (function () {
    function ContactEditComponent() {
        this.dialogTitle = 'Edit contact';
        this.mode = 'edit';
    }
    ContactEditComponent.prototype.ngOnInit = function () {
        if (typeof (this.contactObject) === 'undefined') {
            this.contactObject = {
                firstname: '',
                lastname: '',
                emailAddresses: [''],
                phoneNumbers: [''],
                addresses: [{
                        street: '',
                        number: '',
                        city: '',
                        zip: '',
                        country: ''
                    }],
                birthday: new Date()
            };
            this.dialogTitle = 'Add new contact';
            this.mode = 'new';
        }
    };
    ContactEditComponent.prototype.unsetAddress = function (index) {
        this.contactObject.addresses.splice(index, 1);
    };
    ContactEditComponent.prototype.addAddress = function () {
        this.contactObject.addresses.push({
            street: '',
            number: '',
            city: '',
            zip: '',
            country: ''
        });
    };
    ContactEditComponent.prototype.unsetMail = function (index) {
        this.contactObject.emailAddresses.splice(index, 1);
    };
    ContactEditComponent.prototype.addMail = function () {
        this.contactObject.emailAddresses.push('');
    };
    ContactEditComponent.prototype.unsetPhone = function (index) {
        this.contactObject.phoneNumbers.splice(index, 1);
    };
    ContactEditComponent.prototype.addPhone = function () {
        this.contactObject.phoneNumbers.push('');
    };
    return ContactEditComponent;
}());
ContactEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-edit',
        template: __webpack_require__(826),
        styles: [__webpack_require__(820)]
    }),
    __metadata("design:paramtypes", [])
], ContactEditComponent);

//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contact-edit.component.js.map

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(172);
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
    function AppComponent(mdIconRegistry) {
        this.mdIconRegistry = mdIconRegistry;
        this.title = 'app works!';
        // mdIconRegistry.addSvgIconSet('/assets/icons.svg');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(824),
        styles: [__webpack_require__(818)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdIconRegistry"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdIconRegistry"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/app.component.js.map

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_ContactsApi__ = __webpack_require__(656);
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

/***/ 425:
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

/***/ 501:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 501;


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(660);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/main.js.map

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_list_contacts_list_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_details_contact_details_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_ApiInstantiator__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mp_blurred_scroll__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contacts_list_contacts_list_pipe__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_edit_contact_edit_component__ = __webpack_require__(261);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__data_ApiInstantiator__["a" /* ApiInstantiator */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/app.module.js.map

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_color_util__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(172);
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
    function ContactDetailsComponent(dialog) {
        this.dialog = dialog;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
    };
    ContactDetailsComponent.prototype.getColor = function (contact) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_color_util__["a" /* getContactColor */])(contact);
    };
    ContactDetailsComponent.prototype.openEditDialog = function () {
        var _this = this;
        console.log('opening');
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit_component__["a" /* ContactEditComponent */], {
            disableClose: false,
            width: '500px'
        });
        this.dialogRef.componentInstance.contactObject = this.contact;
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('result: ' + result);
            _this.dialogRef = null;
        });
    };
    return ContactDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__["a" /* ContactDto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_model_ContactDto__["a" /* ContactDto */]) === "function" && _a || Object)
], ContactDetailsComponent.prototype, "contact", void 0);
ContactDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-details',
        template: __webpack_require__(825),
        styles: [__webpack_require__(819)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["MdDialog"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["MdDialog"]) === "function" && _b || Object])
], ContactDetailsComponent);

var _a, _b;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contact-details.component.js.map

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_color_util__ = __webpack_require__(425);
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
ContactsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contacts-list',
        template: __webpack_require__(827),
        styles: [__webpack_require__(821)],
    }),
    __metadata("design:paramtypes", [])
], ContactsListComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts-list.component.js.map

/***/ },

/***/ 654:
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

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit_component__ = __webpack_require__(261);
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
    function ContactsComponent(contactsService, dialog) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.isDetailsActive = false;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.getContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactsComponent.prototype.onSelectContact = function (contact) {
        this.selectedContact = contact;
        this.isDetailsActive = true;
    };
    ContactsComponent.prototype.openContactDialog = function () {
        var _this = this;
        console.log('opening');
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit_component__["a" /* ContactEditComponent */], {
            disableClose: false,
            width: '80%'
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('result: ' + result);
            _this.dialogRef = null;
        });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contacts',
        template: __webpack_require__(828),
        styles: [__webpack_require__(822)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_contacts_service__["a" /* ContactsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialog"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialog"]) === "function" && _b || Object])
], ContactsComponent);

var _a, _b;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/contacts.component.js.map

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(465);
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

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApiInstantiator__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(465);
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
    // private endpoint : MockApi;
    function ContactsService(apiInst) {
        this.apiInst = apiInst;
        this.endpoint = apiInst.initContactsApi();
    }
    ContactsService.prototype.getContacts = function () {
        // return this.endpoint.contactsGetAll();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            // Yield a single value and complete
            observer.next(__webpack_require__(814));
            observer.complete();
        });
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

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactDto; });
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
var ContactDto;
(function (ContactDto) {
    var GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["MALE"] = '0'] = "MALE";
        GenderEnum[GenderEnum["FEMALE"] = '1'] = "FEMALE";
    })(GenderEnum = ContactDto.GenderEnum || (ContactDto.GenderEnum = {}));
})(ContactDto || (ContactDto = {}));
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/ContactDto.js.map

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function HeaderComponent() {
        this.isBackVisibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onBack = function () {
        this.isBackVisible = false;
        this.isBackVisibleChange.emit(this.isBackVisible);
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
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__(829),
        styles: [__webpack_require__(823)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

var _a;
//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/header.component.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(651);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/index.js.map

/***/ },

/***/ 661:
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

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/marcel/Development/Web/ca-app/src/polyfills.js.map

/***/ },

/***/ 814:
/***/ function(module, exports) {

module.exports = [
	{
		"firstname": "Harvey",
		"lastname": "Spectre",
		"id": "id",
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
				"country": "United States of America"
			}
		],
		"emailAddresses": [
			"harvey.spectre@psl.com"
		],
		"phoneNumbers": [
			"+49 151 233233"
		]
	},
	{
		"firstname": "Marcel",
		"lastname": "Pütz",
		"emailAddresses": [
			"marcel.p.puetz@gmail.com",
			"marcelpuetz@web.de",
			"marcel.puetz@qaware.de"
		]
	},
	{
		"firstname": "Marko",
		"lastname": "Grigc",
		"addresses": [
			{
				"city": "Rosenheim",
				"region": "New York"
			},
			{
				"city": "Traunreut",
				"region": "New York"
			}
		]
	},
	{
		"firstname": "Andreas",
		"lastname": "Mock"
	},
	{
		"firstname": "Tobias",
		"lastname": "Jonas"
	},
	{
		"firstname": "Micheal",
		"lastname": "Weinberger"
	},
	{
		"firstname": "Hans",
		"lastname": "Dampf"
	},
	{
		"firstname": "Peter",
		"lastname": "Pan"
	},
	{
		"firstname": "Captain",
		"lastname": "Hook"
	},
	{
		"firstname": "Tinka",
		"lastname": "Bell"
	},
	{
		"firstname": "Hans",
		"lastname": "Kuckindieluft"
	},
	{
		"firstname": "Harvey",
		"lastname": "Spectre"
	},
	{
		"firstname": "Winnie",
		"lastname": "Puh"
	},
	{
		"firstname": "Harry",
		"lastname": "Potter",
		"imageUri": "./assets/dummy.jpeg"
	},
	{
		"firstname": "Tom",
		"lastname": "Riddle"
	},
	{
		"firstname": "Ronald",
		"lastname": "Weasley"
	},
	{
		"firstname": "Hermine",
		"lastname": "Granger"
	},
	{
		"firstname": "Donald",
		"lastname": "Duck"
	},
	{
		"firstname": "Donald",
		"lastname": "Trump"
	},
	{
		"firstname": "Sirius",
		"lastname": "Black"
	},
	{
		"firstname": "Martin",
		"lastname": "Hellman"
	},
	{
		"firstname": "Whitfield",
		"lastname": "Diffie"
	}
];

/***/ },

/***/ 818:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 819:
/***/ function(module, exports) {

module.exports = ".contact-details .flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.contact-details-icon {\n  margin-top: 14px;\n}\n.contact-details-content-section {\n  margin-left: 16px;\n}\n.contact-details-address {\n  margin: 8px;\n}\n.contact-details-address:first-of-type {\n  margin-top: 16px;\n}\n.contact-details-address:last-of-type {\n  margin-bottom: 16px;\n}\nmd-divider:last-of-type {\n  display: none;\n}\n.contact-details {\n  box-shadow: -4px 0 16px 2px rgba(0, 0, 0, 0.2);\n}\n.contact-details-content {\n  padding: 0 16px 16px 16px;\n}\n.mobile-container {\n  display: inline-block;\n}\n.u-blur {\n  -webkit-filter: blur(8px);\n  -moz-filter: blur(8px);\n  -o-filter: blur(8px);\n  -ms-filter: blur(8px);\n  filter: blur(8px);\n  opacity: 0.5;\n}\n.profile-image-container {\n  position: relative;\n  width: 300px;\n  height: 225px;\n  overflow: hidden;\n}\n.profile-image-container > .u-blur {\n  position: absolute;\n  height: 316px;\n  width: 316px;\n  margin-top: -8px;\n  margin-left: -8px;\n}\n.profile-image-container .blur-overlay {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  height: 225px;\n  width: 300px;\n}\n.image-cropper {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.cropped-image {\n  display: inline;\n  height: 100%;\n  width: auto;\n}\n.dummy-image {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 40pt;\n}\n.blurred-dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 120pt;\n}\n.contact-details-name {\n  position: absolute;\n  bottom: 10px;\n  width: 268px;\n  padding: 0 16px 0 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.contact-details-name h2 {\n  margin: 0;\n}\n.contact-details-name-underlay {\n  position: absolute;\n  bottom: 0;\n}\n.u-grey {\n  color: #505050;\n}\n"

/***/ },

/***/ 820:
/***/ function(module, exports) {

module.exports = ".contact-edit .flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.contact-edit {\n  width: 50%;\n  height: auto;\n}\n.contact-edit-icon {\n  margin-top: 14px;\n  padding-left: 9px;\n}\n.contact-edit-section-container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.contact-edit-content-section {\n  margin-left: 16px;\n}\n.contact-edit-address {\n  margin: 8px;\n}\n.contact-edit-address:first-of-type {\n  margin-top: 16px;\n}\n.contact-edit-address:last-of-type {\n  margin-bottom: 16px;\n}\n.contact-edit-content {\n  padding: 0 16px 16px 16px;\n}\n.mobile-container {\n  display: inline-block;\n}\n.u-blur {\n  -webkit-filter: blur(10px);\n  -moz-filter: blur(10px);\n  -o-filter: blur(10px);\n  -ms-filter: blur(10px);\n  filter: blur(10px);\n  opacity: 0.5;\n}\n.profile-image-container {\n  position: relative;\n  width: 300px;\n  height: 225px;\n  overflow: hidden;\n}\n.profile-image-container > .u-blur {\n  position: absolute;\n  height: 245px;\n  width: 320px;\n  margin-top: -10px;\n  margin-left: -10px;\n}\n.profile-image-container .blur-overlay {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  height: 225px;\n  width: 300px;\n}\n.image-cropper {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.cropped-image {\n  display: inline;\n  margin-left: -33%;\n  height: 100%;\n  width: auto;\n}\n.contact-edit-upload-container {\n  width: 100%;\n}\n.contact-edit-picture-dummy {\n  font-size: 120px;\n  margin-left: 35%;\n}\n.contact-edit-name {\n  position: absolute;\n  top: 165px;\n  left: 16px;\n}\n.contact-edit-name-underlay {\n  position: absolute;\n  bottom: 0;\n}\n.u-grey {\n  color: #505050;\n}\n"

/***/ },

/***/ 821:
/***/ function(module, exports) {

module.exports = ".search-icon {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.search-input {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 32px;\n  margin-top: 8px;\n  margin-left: 16px;\n}\n.dummy-image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dummy-image-initials {\n  margin: 0;\n  color: white;\n  display: inline;\n  font-size: 16pt;\n}\n.phone-number {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n"

/***/ },

/***/ 822:
/***/ function(module, exports) {

module.exports = ".contacts {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: calc(100% - 16px);\n  margin: 8px 0;\n  background-color: white;\n}\n.header-container {\n  z-index: 5;\n}\n.hide-details {\n  margin-right: -315px;\n}\ncontacts-list {\n  width: 400px;\n  position: relative;\n  overflow: hidden;\n}\ncontact-details {\n  z-index: 4;\n  -webkit-transition: margin-right 0.5s;\n  transition: margin-right 0.5s;\n}\n.filler {\n  width: 30%;\n}\n@media (max-width: 1000px) {\n  .filler {\n    display: none;\n  }\n  .contacts {\n    margin: 0;\n    height: 100%;\n  }\n}\n#addButton {\n  position: fixed;\n  margin-left: 330px;\n  bottom: 20px;\n}\n"

/***/ },

/***/ 823:
/***/ function(module, exports) {

module.exports = ".header {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n}\n.header-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  height: 64px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.header-icon {\n  margin-left: 16px;\n  margin-right: 8px;\n}\n"

/***/ },

/***/ 824:
/***/ function(module, exports) {

module.exports = "<contacts></contacts>\n"

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"contact\" class=\"contact-details\">\n  <div class=\"profile-image-container\">\n    <img *ngIf=\"contact.imageUri\" class=\"u-blur\" src={{contact.imageUri}}>\n\n    <!--if no image is available-->\n    <div *ngIf=\"!contact.imageUri\" class=\"dummy-image u-blur\"\n         [style.background-color]=\"getColor(contact)\">\n      <p class=\"blurred-dummy-image-initials thin\">\n        {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n      </p>\n    </div>\n    <div class=\"blur-overlay\"></div>\n\n    <div class=\"image-cropper\">\n      <img *ngIf=\"contact.imageUri\" class=\"cropped-image\" src={{contact.imageUri}}/>\n\n      <!--if no image is available-->\n      <div *ngIf=\"!contact.imageUri\" class=\"dummy-image\"\n           [style.background-color]=\"getColor(contact)\">\n        <p class=\"dummy-image-initials thin\">\n          {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n        </p>\n      </div>\n    </div>\n\n    <img class=\"contact-details-name-underlay\" src=\"./assets/contact-details-name-underlay.svg\"/>\n    <div class=\"contact-details-name\">\n      <h2>{{contact.firstname}} {{contact.lastname}}</h2>\n      <button md-button (click)=\"openEditDialog()\">\n        <md-icon class=\"edit-icon u-grey\">edit</md-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"contact-details-content\">\n\n    <div *ngIf=\"contact.phoneNumbers && contact.phoneNumbers.length\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">phone</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p *ngFor='let number of contact.phoneNumbers'>{{number}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.phoneNumbers && contact.phoneNumbers.length\"></md-divider>\n\n\n    <div *ngIf=\"contact.emailAddresses && contact.emailAddresses.length\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">mail</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p *ngFor='let mail of contact.emailAddresses'>{{mail}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.emailAddresses && contact.emailAddresses.length\"></md-divider>\n\n    <div *ngFor='let address of contact.addresses' class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">business</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p class=\"contact-details-address\">{{address.number}} {{address.street}}</p>\n        <p class=\"contact-details-address\">{{address.zip}} {{address.city}}</p>\n        <p class=\"contact-details-address\">{{address.region}}</p>\n        <p class=\"contact-details-address\">{{address.country}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.addresses && contact.addresses.length\"></md-divider>\n\n    <div *ngIf=\"contact.birthday\" class=\"flex-row\">\n      <md-icon class=\"contact-details-icon u-grey\">cake</md-icon>\n      <div class=\"contact-details-content-section\">\n        <p>{{contact.birthday}}</p>\n      </div>\n    </div>\n    <md-divider *ngIf=\"contact.birthday\"></md-divider>\n\n  </div>\n</div>\n"

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = "<md-dialog-content>\n  <h4>{{dialogTitle}}</h4>\n  <div class=\"contact-edit-content\">\n\n    <!--\n    <div class=\"contact-edit-upload-container\">\n      <md-icon class=\"contact-edit-picture-dummy\">account_circle</md-icon>\n    </div>\n-->\n    <div class=\"flex-row contact-edit-section-container\">\n      <md-icon class=\"contact-edit-icon u-grey\">account_box</md-icon>\n      <div class=\"contact-edit-content-section\">\n        <md-input [(ngModel)]=\"contactObject.firstname\" placeholder=\"Firstname\"></md-input>\n        <md-input [(ngModel)]=\"contactObject.lastname\" placeholder=\"Lastname\"></md-input>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">phone</md-icon>\n        <button md-icon-button (click)=\"addPhone()\">\n          <md-icon class=\"md-12\">add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\">\n        <div class=\"contact-edit-content-section\" *ngFor=\"let number of contactObject.phoneNumbers; let i = index\">\n          <div class=\"flex-row\">\n            <!-- TODO find out why ngModel=number does not work -->\n            <md-input type=\"tel\" [(ngModel)]=\"contactObject.phoneNumbers[i]\" placeholder=\"Phone\"></md-input>\n            <button md-button (click)=\"unsetPhone(i)\">\n              <md-icon class=\"md-12\">delete</md-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">business</md-icon>\n        <button md-icon-button (click)=\"addAddress()\">\n          <md-icon class=\"md-12\" >add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\">\n        <div class=\"contact-edit-content-section\" *ngFor=\"let address of contactObject.addresses; let i = index\">\n          <div class=\"flex-row\">\n            <md-input [(ngModel)]=\"address.street\" placeholder=\"Street\"></md-input>\n            <md-input [(ngModel)]=\"address.number\" placeholder=\"Number\"></md-input>\n            <button md-button (click)=\"unsetAddress(i)\">\n              <md-icon class=\"md-12\">delete</md-icon>\n            </button>\n          </div>\n          <div class=\"flex-row\">\n            <md-input [(ngModel)]=\"address.city\" placeholder=\"City\"></md-input>\n            <md-input [(ngModel)]=\"address.zip\" placeholder=\"ZIP\"></md-input>\n            <md-input [(ngModel)]=\"address.country\" placeholder=\"Country\"></md-input>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n\n    <div class=\"flex-row contact-edit-section-container\">\n      <div class=\"flex-column\">\n        <md-icon class=\"contact-edit-icon u-grey\">email</md-icon>\n        <button md-icon-button (click)=\"addMail()\">\n          <md-icon class=\"md-12\">add</md-icon>\n        </button>\n      </div>\n      <div class=\"flex-column\">\n        <div class=\"contact-edit-content-section\" *ngFor=\"let mail of contactObject.emailAddresses; let i = index\">\n          <div class=\"flex-row\">\n            <md-input type=\"email\" [(ngModel)]=\"contactObject.emailAddresses[i]\" placeholder=\"Mail\"></md-input>\n            <button md-button (click)=\"unsetMail(i)\">\n              <md-icon class=\"md-12\">delete</md-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <md-divider></md-divider>\n    <br>\n    <div class=\"flex-row contact-edit-section-container\">\n      <md-icon class=\"contact-edit-icon u-grey\">cake</md-icon>\n      <div class=\"contact-edit-content-section\">\n        <md-input type=\"date\" [(ngModel)]=\"contactObject.birthday\" placeholder=\"Birthday\"></md-input>\n      </div>\n    </div>\n\n  </div>\n\n</md-dialog-content>\n<md-dialog-actions>\n  <button (click)=\"dialogRef.close('yes')\">Save</button>\n  <button md-dialog-close>Abort</button>\n</md-dialog-actions>\n\n"

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = "<mp-blurred-scroll>\n\n  <mp-blurred-scroll-header>\n    <md-input #searchBox class=\"search-input\" placeholder=\"search\"\n              align=\"start\">\n      <md-icon class=\"search-icon\" md-prefix>search</md-icon>\n    </md-input>\n  </mp-blurred-scroll-header>\n\n  <mp-blurred-scroll-content>\n    <md-nav-list>\n      <md-list-item (click)=\"onClick(contact)\" *ngFor=\"let contact of contacts | contactsListPipe:searchBox.value;\">\n        <img *ngIf=\"contact.imageUri\" md-list-avatar src=\"{{contact.imageUri}}\" alt=\"not found\">\n        <div *ngIf=\"!contact.imageUri\" md-list-avatar class=\"dummy-image\"\n             [style.background-color]=\"getColor(contact)\">\n          <p class=\"dummy-image-initials thin\">\n            {{contact.firstname.charAt(0).toUpperCase()}}{{contact.lastname.charAt(0).toUpperCase()}}\n          </p>\n        </div>\n        <h3 md-line> {{contact.lastname}} </h3>\n        <p md-line>\n          <span> {{contact.firstname}} </span>\n        </p>\n        <p *ngIf=\"contact.phoneNumbers && contact.phoneNumbers[0]\" class=\"phone-number tablet-and-greater\">{{contact.phoneNumbers[0]}}</p>\n      </md-list-item>\n    </md-nav-list>\n  </mp-blurred-scroll-content>\n\n</mp-blurred-scroll>\n"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = "<div class=\"flex-row full-height\">\n  <div class=\"filler\"></div>\n  <div class=\"contacts flex-column full-height\">\n    <div class=\"header-container\">\n      <header [isBackVisible]=\"isDetailsActive\" (isBackVisibleChange)=\"isDetailsActive=$event\"></header>\n    </div>\n    <div class=\"flex-row full-height\">\n      <contacts-list [contacts]=\"contacts\" (selectedContact)=\"onSelectContact($event)\"></contacts-list>\n      <contact-details [contact]=\"selectedContact\" [ngClass]=\"{'hide-details' : !isDetailsActive}\"></contact-details>\n      <button md-fab id=\"addButton\" (click)=\"openContactDialog()\">\n        <md-icon class=\"md-24\">person_add</md-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"filler\"></div>\n</div>\n"

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = "<div class=\"header\">\n  <md-toolbar color=\"primary\">\n    <div class=\"header-content\">\n      <button md-button (click)=\"onBack()\" [ngClass]=\"{hidden : !isBackVisible}\" class=\"mobile-only\">\n        <md-icon >arrow_back</md-icon>\n      </button>\n      <span class=\"tablet-and-greater flex-grow-2\">Torpedo Maximum Contacts</span>\n      <div class=\"flex-row vertical-center font-l\">\n        <md-icon class=\"header-icon\" svgIcon=\"account\"></md-icon>\n        <span class=\"thin\">Max Mustermann</span>\n      </div>\n      <div class=\"flex-row vertical-center font-l\">\n        <md-icon class=\"header-icon\" svgIcon=\"logout\"></md-icon>\n        <span class=\"thin\">Logout</span>\n      </div>\n    </div>\n  </md-toolbar>\n</div>\n"

/***/ }

},[1093]);
//# sourceMappingURL=main.bundle.map