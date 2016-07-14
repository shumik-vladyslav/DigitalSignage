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
var Navigation = (function () {
    function Navigation() {
        this.navItem = [
            {
                "label": "Dashboard",
                "href": "dashboard",
                "description": "go to dashboard",
                "iner": [
                    {
                        "label": "Device Manager",
                        "href": "manager/device",
                        "description": "go to device manager"
                    },
                    {
                        "label": "Content Manager",
                        "href": "manager/content",
                        "description": "go to content manager"
                    }
                ]
            },
            {
                "label": "Device Manager",
                "href": "manager/device",
                "description": "go to device manager",
                "iner": [
                    {
                        "label": "Device Manager",
                        "href": "manager/device",
                        "description": "go to device manager"
                    },
                    {
                        "label": "Content Manager",
                        "href": "manager/content",
                        "description": "go to content manager"
                    }
                ]
            },
            {
                "label": "Content Manager",
                "href": "manager/content",
                "description": "go to content manager"
            },
            {
                "label": "Playlist Manager",
                "href": "manager/playlist",
                "description": "go to playlist manager"
            },
            {
                "label": "Layout Assembler",
                "href": "layout",
                "description": "go to layout assembler"
            },
            {
                "label": "Publish Schedule",
                "href": "publish",
                "description": "go to publish schedule"
            },
            {
                "label": "Configuration",
                "href": "configuration",
                "description": "go to configuration"
            },
            {
                "label": "Support",
                "href": "support",
                "description": "go to support"
            }
        ];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Navigation.prototype, "navItem", void 0);
    Navigation = __decorate([
        core_1.Component({
            selector: 'navigation',
            template: "<div>NAVIGATION</div>\n<button>dfdf</button>\n<div class=\"dropdown\">\n  <button class=\"btn btn-primary dropdown-toggle vertical-letter\" type=\"button\" id=\"dropdownMenu1\">\n    n\n    a\n    v\n    g\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <a class=\"dropdown-item\" href=\"#\">Action</a><br>\n    <a class=\"dropdown-item\" href=\"#\">Another action</a><br>\n    <a class=\"dropdown-item\" href=\"#\">Something else here</a><br>\n  </div>\n</div>\n<div class=\"dropdown\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n  <span class=\"caret\"></span></button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"#\">HTML</a></li>\n    <li><a href=\"#\">CSS</a></li>\n    <li><a href=\"#\">JavaScript</a></li>\n  </ul>\n</div>\n \n                ",
            styles: ["\n    .vertical-letter {\n    white-space: pre;\n    }\n    "],
            directives: [ng2_bs_dropdown_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map