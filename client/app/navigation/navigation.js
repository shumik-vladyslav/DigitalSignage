/**
 * Created by SHumiC on 13.07.2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_bs_dropdown_1 = require('ng2-bs-dropdown');
var NavigationService_1 = require('../services/NavigationService');
var Navigation = (function () {
    function Navigation(service) {
        this.service = service;
        this.navItem = [];
    }
    ;
    Navigation.prototype.ngOnInit = function () {
        this.getData();
    };
    Navigation.prototype.getData = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) { return _this.navItem = data; }, function (error) { return _this.errorMessage = error; });
        {
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Navigation.prototype, "navItem", void 0);
    Navigation = __decorate([
        core_1.Component({
            selector: 'navigation',
            template: "\n        <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle dropdown-button\" type=\"button\" data-toggle=\"dropdown\">\n             N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br>\n            </button>\n            <ul class=\"dropdown-menu multi-level dropdown-menu-first-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n              <li *ngFor=\"let item of navItem\" [ngClass]=\"{'dropdown-submenu':item.inner}\">\n                <a *ngIf=\"!item.inner\" href=\"{{ item.href }}\" title=\"{{ item.description }}\">{{ item.label }}</a>\n                <a *ngIf=\"item.inner\" tabindex=\"-1\" href=\"#\" title=\"{{ item.description }}\">{{ item.label }}</a>\n                <ul *ngIf=\"item.inner\" class=\"dropdown-menu dropdown-menu-nested\">\n                  <li *ngFor=\"let inner of item.inner\">\n                    <a href=\"{{ inner.href }}\" title=\"{{ inner.description }}\">{{ inner.label }}</a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n        </div>\n                ",
            styles: ["\n        .dropdown-menu-first-level {\n            top: 0;\n        }\n        \n        li{\n            margin: 10px;\n        }\n        \n        .dropdown-button {\n            height: 400px;\n        }\n        \n        .dropdown-menu-nested {\n            height: 100%;\n        }\n        \n        .dropdown-submenu>.dropdown-menu {\n            top: 0;\n            left: 93%;\n            -webkit-border-radius: 0 6px 6px 6px;\n            -moz-border-radius: 0 6px 6px;\n            border-radius: 0 6px 6px 6px;\n        }\n        \n        .dropdown-submenu:hover>.dropdown-menu {\n            display: block;\n        }\n        \n        .dropdown-submenu>a:after {\n            display: block;\n            content: \" \";\n            float: right;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n            border-width: 5px 0 5px 5px;\n            border-left-color: #ccc;\n            margin-top: 5px;\n            margin-right: -10px;\n        }\n        \n        .dropdown-submenu:hover>a:after {\n            border-left-color: #fff;\n        }\n        \n        .dropdown-submenu.pull-left {\n            float: none;\n        }\n        \n        .dropdown-submenu.pull-left>.dropdown-menu {\n            left: -100%;\n            margin-left: 10px;\n            -webkit-border-radius: 6px 0 6px 6px;\n            -moz-border-radius: 6px 0 6px 6px;\n            border-radius: 6px 0 6px 6px;\n        }\n    "],
            directives: [ng2_bs_dropdown_1.DROPDOWN_DIRECTIVES],
            providers: [NavigationService_1.NavigationService]
        }), 
        __metadata('design:paramtypes', [NavigationService_1.NavigationService])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map