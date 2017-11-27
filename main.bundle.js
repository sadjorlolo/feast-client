webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n\n<app-navbar></app-navbar>\n<app-login></app-login>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Feast Application';
        this.apiOrigin = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiOrigin;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_event_routing_module__ = __webpack_require__("../../../../../src/app/event/event-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_event_index_event_index_component__ = __webpack_require__("../../../../../src/app/event/event-index/event-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__event_event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__event_event_show_event_show_component__ = __webpack_require__("../../../../../src/app/event/event-show/event-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_event_new_event_new_component__ = __webpack_require__("../../../../../src/app/event/event-new/event-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_event_update_event_update_component__ = __webpack_require__("../../../../../src/app/event/event-update/event-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { EventModule } from './event/event.module';










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_11__event_event_index_event_index_component__["a" /* EventIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_13__event_event_show_event_show_component__["a" /* EventShowComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_event_new_event_new_component__["a" /* EventNewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__event_event_update_event_update_component__["a" /* EventUpdateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                // EventModule,
                __WEBPACK_IMPORTED_MODULE_5__event_event_routing_module__["a" /* EventRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__event_event_service__["a" /* EventService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user\">\n  <div *ngFor=\"let event of allEvents\">\n    <ul>\n      <li><a routerLink=\"/events/{{event.id}}\">Id: {{event.id}}</a></li>\n      <li>Event Name : {{event.name}}</li>\n      <li>Event Date : {{event.date}}</li>\n      <li>Event Time: {{event.time}}</li>\n      <li>Event Location: {{event.location}}</li>\n      <li>Event Description: {{event.description}}</li>\n      <li>Hosted By: {{event.event_creator.email}}</li>\n      <li><a routerLink=\"/events/edit/{{event.id}}\">Edit</a></li>\n    </ul>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-index/event-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventIndexComponent = (function () {
    function EventIndexComponent(eventService, auth) {
        this.eventService = eventService;
        this.auth = auth;
        this.allEvents = [];
    }
    EventIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('does this work?')
        this.eventService.getAllEvents()
            .subscribe(function (response) {
            // console.log(response.json().events);
            _this.allEvents = response.json().events;
        });
    };
    EventIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-index',
            template: __webpack_require__("../../../../../src/app/event/event-index/event-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-index/event-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]])
    ], EventIndexComponent);
    return EventIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-new/event-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-new/event-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='new-event'>\n\n  <form (ngSubmit)=\"saveEvent(newEvent)\">\n    <input name=\"name\" [(ngModel)]=\"newEvent.name\" type=\"text\" placeholder=\"Event Name\" />\n    <input name=\"date\" [(ngModel)]=\"newEvent.date\" type=\"text\" placeholder=\"Event Date\" />\n    <input name=\"time\" [(ngModel)]=\"newEvent.time\" type=\"text\" placeholder=\"Event Time\" />\n    <input name=\"location\" [(ngModel)]=\"newEvent.location\" type=\"text\" placeholder=\"Event Location\" />\n    <input name=\"description\" [(ngModel)]=\"newEvent.description\" type=\"text\" placeholder=\"Event Description\" />\n\n    <input type=\"submit\" value=\"Create Event!\" />\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-new/event-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventNewComponent = (function () {
    function EventNewComponent(route, eventService, auth) {
        this.route = route;
        this.eventService = eventService;
        this.auth = auth;
        this.newEvent = {};
    }
    EventNewComponent.prototype.saveEvent = function (newEvent) {
        console.log('saving event');
        console.log('newEvent is', newEvent);
        this.eventService.saveEvent(newEvent)
            .subscribe(function (response) {
            console.log('newEvent response is', response.json());
            var event = response.json();
        });
    };
    EventNewComponent.prototype.ngOnInit = function () {
    };
    EventNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-new',
            template: __webpack_require__("../../../../../src/app/event/event-new/event-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-new/event-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]])
    ], EventNewComponent);
    return EventNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_index_event_index_component__ = __webpack_require__("../../../../../src/app/event/event-index/event-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_show_event_show_component__ = __webpack_require__("../../../../../src/app/event/event-show/event-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_new_event_new_component__ = __webpack_require__("../../../../../src/app/event/event-new/event-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_update_event_update_component__ = __webpack_require__("../../../../../src/app/event/event-update/event-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var eventRoutes = [
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_3__event_component__["a" /* EventComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__event_index_event_index_component__["a" /* EventIndexComponent */]
            },
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_6__event_new_event_new_component__["a" /* EventNewComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__event_update_event_update_component__["a" /* EventUpdateComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_5__event_show_event_show_component__["a" /* EventShowComponent */]
            },
        ]
    }
];
var EventRoutingModule = (function () {
    function EventRoutingModule() {
    }
    EventRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(eventRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], EventRoutingModule);
    return EventRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-show/event-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-show/event-show.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div *ngIf='oneEvent'>\n      <ul>\n        <li>Id: {{oneEvent.id}}</li>\n        <li>Event Name : {{oneEvent.name}}</li>\n        <li>Event Date : {{oneEvent.date}}</li>\n        <li>Event Time: {{oneEvent.time}}</li>\n        <li>Event Location: {{oneEvent.location}}</li>\n        <li>Event Description: {{oneEvent.description}}</li>\n        <li>Hosted By: {{oneEvent.event_creator.email}}</li>\n        <li><a routerLink=\"/events/edit/{{oneEvent.id}}\">Edit</a></li>\n        <li>\n          <form (ngSubmit)=\"deleteEvent(oneEvent)\">\n          <input type=\"submit\" value=\"Delete\"/>\n        </form>\n        </li>\n    </ul>\n    <hr>\n  </div>\n\n  <div *ngIf='!oneEvent'>\n    Whoops, look like that event doesn't exist.\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-show/event-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventShowComponent = (function () {
    function EventShowComponent(route, eventService, auth, router) {
        this.route = route;
        this.eventService = eventService;
        this.auth = auth;
        this.router = router;
    }
    EventShowComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        console.log('show ts event is', event);
        this.eventService.deleteEvent(event)
            .subscribe(function (response) {
            _this.router.navigate(["/events"]);
        });
    };
    EventShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            console.log('param id is', param.id);
            _this.eventService.getOneEvent(param.id)
                .subscribe(function (response) {
                _this.oneEvent = response.json().event;
            });
        });
    };
    EventShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-show',
            template: __webpack_require__("../../../../../src/app/event/event-show/event-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-show/event-show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EventShowComponent);
    return EventShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-update/event-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-update/event-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='update-event'>\n\n  <form (ngSubmit)=\"updateEvent(updatedEvent)\">\n    <input name=\"name\" [(ngModel)]=\"updatedEvent.name\" type=\"text\" placeholder=\"Event Name\" />\n    <input name=\"date\" [(ngModel)]=\"updatedEvent.date\" type=\"text\" placeholder=\"Event Date\" />\n    <input name=\"time\" [(ngModel)]=\"updatedEvent.time\" type=\"text\" placeholder=\"Event Time\" />\n    <input name=\"location\" [(ngModel)]=\"updatedEvent.location\" type=\"text\" placeholder=\"Event Location\" />\n    <input name=\"description\" [(ngModel)]=\"updatedEvent.description\" type=\"text\" placeholder=\"Event Description\" />\n\n    <input type=\"submit\" value=\"Update Event!\" />\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-update/event-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__("../../../../../src/app/event/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventUpdateComponent = (function () {
    function EventUpdateComponent(auth, eventService, route, router) {
        this.auth = auth;
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.updatedEvent = {};
    }
    EventUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.eventService.getOneEvent(param.id)
                .subscribe(function (response) {
                console.log('updatedEvent response.json', response.json());
                _this.updatedEvent = response.json().event;
            });
        });
    };
    EventUpdateComponent.prototype.updateEvent = function (updatedEvent) {
        var _this = this;
        console.log('updating event');
        this.eventService.updateEvent(updatedEvent)
            .subscribe(function (response) {
            console.log('updateEvent response', response.json());
            var event = response.json().event;
            _this.router.navigate(["/events/" + event.id]);
        });
    };
    EventUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-update',
            template: __webpack_require__("../../../../../src/app/event/event-update/event-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-update/event-update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], EventUpdateComponent);
    return EventUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user\">\n  <router-outlet></router-outlet>\n</div>\n\n<div *ngIf=\"!auth.user\">\n  Looks like you aren't signed in. Please sign in to view page.\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = (function () {
    function EventComponent(auth) {
        this.auth = auth;
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/app/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = (function () {
    function EventService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    EventService.prototype.getAllEvents = function () {
        console.log('get all events?');
        var config = {};
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        console.log('config is', config);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiOrigin + "/events", config);
        // return this.http.get('http://localhost:4741/events', config);
    };
    EventService.prototype.getOneEvent = function (eventId) {
        console.log('get one event?');
        var config = {};
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiOrigin + "/events/" + eventId, config);
        // console.log('getOne config is', config)
    };
    EventService.prototype.saveEvent = function (newEvent) {
        console.log('will this event save?');
        var config = {};
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var event = {
            "event": {
                "name": newEvent.name,
                "date": newEvent.date,
                "time": newEvent.time,
                "location": newEvent.location,
                "description": newEvent.description
            }
        };
        console.log('event is', event);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiOrigin + "/events", event, config);
    };
    EventService.prototype.updateEvent = function (updatedEvent) {
        console.log('updatedEvent run?');
        var config = {};
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        var eventUpdate = {
            "event": {
                "name": updatedEvent.name,
                "date": updatedEvent.date,
                "time": updatedEvent.time,
                "location": updatedEvent.location,
                "description": updatedEvent.description
            }
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiOrigin + "/events/" + updatedEvent.id, eventUpdate, config);
    };
    EventService.prototype.deleteEvent = function (event) {
        console.log('delete evet is', event);
        var config = {};
        config['headers'] = { Authorization: 'Token token=' + this.auth.getUserToken() };
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiOrigin + "/events/" + event.id, config);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n\n.sign-in-msg {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n\n.sign-out {\n  position: fixed;\n  top: 30px;\n  right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.user\" class=\"container sign-up\">\n  <input [(ngModel)]=\"newUser.email\" type=\"text\" placeholder=\"Email\" />\n  <input [(ngModel)]=\"newUser.password\" type=\"text\" placeholder=\"Password\" />\n  <input [(ngModel)]=\"newUser.password_confirmation\" type=\"text\" placeholder=\"Confirm Password\" />\n  <input class='sign-in-button' (click)=\"signUp()\" type=\"submit\" value=\"Sign Up!\" />\n</div>\n\n<div *ngIf=\"!auth.user\" class=\"container sign-in\">\n  <input [(ngModel)]=\"user.email\" type=\"text\" placeholder=\"Email\" />\n  <input [(ngModel)]=\"user.password\" type=\"text\" placeholder=\"Password\" />\n  <input (click)=\"signIn()\" type=\"submit\" value=\"Sign in!\" />\n</div>\n\n<div *ngIf=\"auth.user\" class=\"container\">\n  <h3>Change Password</h3>\n  <input [(ngModel)]=\"oldPassword\" type=\"text\" placeholder=\"Old Password\" />\n  <input [(ngModel)]=\"newPassword\" type=\"text\" placeholder=\"New Password\" />\n  <input (click)=\"changePassword()\" type=\"submit\" value=\"Change Password\" />\n</div>\n\n<div *ngIf=\"auth.user\" class=\"container sign-out\">\n  <input (click)=\"signOut()\" type=\"submit\" value=\"Sign Out!\" />\n</div>\n\n<div *ngIf=\"auth.user\" class=\"container sign-in-msg\">You are signed in as <strong>{{auth.user.email}}</strong></div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        // New user object. Used to fix template binding (?)
        this.newUser = {};
        // User object. Used to fix template binding (?)
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    LoginComponent.prototype.signIn = function () {
        this.auth.signIn(this.user.email, this.user.password);
    };
    LoginComponent.prototype.changePassword = function () {
        this.auth.changePassword(this.oldPassword, this.newPassword);
    };
    LoginComponent.prototype.signUp = function () {
        this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf='this.auth.user' class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar=header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Feast - Website Name</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/events\">Events Index</a></li>\n      <li><a routerLink=\"/\">Home</a></li>\n      <li><a routerLink=\"/events/new\">New Event</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.getUserToken = function () {
        return this.user.token;
    };
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        // Create the Credentials object
        var credentials = {
            'credentials': {
                'email': email,
                'password': password
            }
        };
        // Make the POST request. environment.apiOrigin contains the local apiOrigin
        // address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiOrigin + '/sign-in', credentials)
            .subscribe(
        // Save the response to User
        function (response) {
            return _this.user = JSON.parse(response['_body']).user;
        }, function (err) { return console.log; });
    };
    AuthService.prototype.signUp = function (email, password, password_confirmation) {
        var _this = this;
        // Create the credentials object
        var credentials = {
            'credentials': {
                'email': email,
                'password': password,
                'password_confirmation': password_confirmation
            }
        };
        // Make the POST request. environment.apiOrigin contains the localhost
        // server address http://localhost:4741
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiOrigin + '/sign-up', credentials)
            .subscribe(function (response) {
            // Send the existing credentials back to the server to log in
            // the new user.
            _this.signIn(credentials.credentials.email, credentials.credentials.password);
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        // Create the configuration object to be able to store the
        // Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the delete request to the URL, and add the token from config.
        this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiOrigin + '/sign-out/' + this.user.id, config)
            .subscribe(
        // Remove the logged in User
        function (data) {
            _this.user = null;
            _this.router.navigate(["/"]);
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword) {
        // Create the passwords object to send
        var passwords = {
            'passwords': {
                'old': oldPassword,
                'new': newPassword
            }
        };
        // Create the configuration objectto be able to store the
        // Headers > Authentication
        var config = {};
        // Set the headers key
        config['headers'] = { Authorization: 'Token token=' + this.getUserToken() };
        // Make the patch request to URL,
        // Add the password data and token from Config.
        this.http.patch(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiOrigin + '/change-password/' + this.user.id, passwords, config)
            .subscribe(function (data) { return console.log('Success'); }, function (err) { return console.log(err); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiOrigin: 'http://localhost:4741'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map