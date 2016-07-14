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
var mdl_1 = require('../directives/mdl');
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
            template: "<div>NAVIGATION</div>\n<md-button>Flat button</md-button>\n<button md-button=\"\" class=\"md-button\">Button</button>\n<button class=\"mdl-button mdl-js-button\"> Flat button </button>\n<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n  Raised button with ripple\n</button>\n<button class=\"mdl-button mdl-js-button mdl-button--fab\">\n  <i class=\"material-icons\">add</i>\n</button>\n<button class=\"mdl-button mdl-js-button\" disabled>Disabled</button>\n <md-menu-bar>\n        <md-menu>\n          <md-button type=\"button\" class=\"md-icon-button\" ng-click=\"$mdOpenMenu()\" aria-label=\"Share\">\n              <md-icon md-svg-icon=\"share\"></md-icon>\n          </md-button>\n          <md-menu-content width=\"4\">\n              <md-menu-item >\n                <a >SDfsdf</a>\n              </md-menu-item>\n              <md-menu-item>\n                <a >SDfsdf</a>\n              </md-menu-item>\n              <md-menu-item >\n                <a >SDfsdf</a>\n              </md-menu-item>\n              <md-menu-item>\n                <a >SDfsdf</a>\n              </md-menu-item>\n          </md-menu-content>\n     </md-menu>\n        </md-menu-bar>\n        \n        <!-- Left aligned menu below button -->\n<button id=\"demo-menu-lower-left\"\n        class=\"mdl-button mdl-js-button mdl-button--icon\">\n  <i class=\"material-icons\">more_vert</i>\n</button>\n\n<ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect\"\n    for=\"demo-menu-lower-left\">\n  <li class=\"mdl-menu__item\">Some Action</li>\n  <li class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\">Another Action</li>\n  <li disabled class=\"mdl-menu__item\">Disabled Action</li>\n  <li class=\"mdl-menu__item\">Yet Another Action</li>\n</ul>\n                ",
            styles: [],
            directives: [mdl_1.MDL]
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map