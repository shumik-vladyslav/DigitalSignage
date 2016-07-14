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
                "inner": [
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
                "inner": [
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
            template: "\n <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n             N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br></button>\n    \t\t<ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n              <li *ngFor=\"let item of navItem\" *ngIf=\"!item.inner\">\n                <a  href=\"{{ item.href }}\" title=\"{{ item.description }}\">{{ item.label }}</a>\n              </li>\n               <!--<li *ngFor=\"let item of navItem\" *ngIf=\"item.inner\" class=\"dropdown-submenu\">-->\n                <!--<a tabindex=\"-1\" href=\"#\">Hover me for more options</a>-->\n                <!--<ul class=\"dropdown-menu\">-->\n                  <!--&lt;!&ndash;<li><a tabindex=\"-1\" href=\"#\">Second level</a></li>&ndash;&gt;-->\n                  <!--&lt;!&ndash;<li class=\"dropdown-submenu\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<a href=\"#\">Even More..</a>&ndash;&gt;-->\n                    <!--&lt;!&ndash;<ul class=\"dropdown-menu\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li><a href=\"#\">3rd level</a></li>&ndash;&gt;-->\n                    \t<!--&lt;!&ndash;<li><a href=\"#\">3rd level</a></li>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n                  <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                <!--</ul>-->\n              <!--</li>-->\n            </ul>\n        </div>\n        <!--<div class=\"dropdown\">-->\n            <!--<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">-->\n             <!--N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br></button>-->\n    \t\t<!--<ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">-->\n              <!--<li><a href=\"#\">Some action</a></li>-->\n              <!--<li><a href=\"#\">Some other action</a></li>-->\n              <!--<li class=\"divider\"></li>-->\n              <!--<li class=\"dropdown-submenu\">-->\n                <!--<a tabindex=\"-1\" href=\"#\">Hover me for more options</a>-->\n                <!--<ul class=\"dropdown-menu\">-->\n                  <!--<li><a tabindex=\"-1\" href=\"#\">Second level</a></li>-->\n                  <!--<li class=\"dropdown-submenu\">-->\n                    <!--<a href=\"#\">Even More..</a>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                        <!--<li><a href=\"#\">3rd level</a></li>-->\n                    \t<!--<li><a href=\"#\">3rd level</a></li>-->\n                    <!--</ul>-->\n                  <!--</li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                <!--</ul>-->\n              <!--</li>-->\n              <!--<li class=\"dropdown-submenu\">-->\n                <!--<a tabindex=\"-1\" href=\"#\">Hover me for more options</a>-->\n                <!--<ul class=\"dropdown-menu\">-->\n                  <!--<li><a tabindex=\"-1\" href=\"#\">Second level</a></li>-->\n                  <!--<li class=\"dropdown-submenu\">-->\n                    <!--<a href=\"#\">Even More..</a>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                        <!--<li><a href=\"#\">3rd level</a></li>-->\n                    \t<!--<li><a href=\"#\">3rd 5level</a></li>-->\n                    <!--</ul>-->\n                  <!--</li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                <!--</ul>-->\n              <!--</li>-->\n              <!--<li class=\"dropdown-submenu\">-->\n                <!--<a tabindex=\"-1\" href=\"#\">Hover me for more options</a>-->\n                <!--<ul class=\"dropdown-menu\">-->\n                  <!--<li><a tabindex=\"-1\" href=\"#\">Second level</a></li>-->\n                  <!--<li class=\"dropdown-submenu\">-->\n                    <!--<a href=\"#\">Even More..</a>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                        <!--<li><a href=\"#\">3rd level</a></li>-->\n                    \t<!--<li><a href=\"#\">3rd2 level</a></li>-->\n                    <!--</ul>-->\n                  <!--</li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                  <!--<li><a href=\"#\">Second level</a></li>-->\n                <!--</ul>-->\n              <!--</li>-->\n            <!--</ul>-->\n        <!--</div>-->\n                ",
            styles: ["\n        .dropdown-menu {\n            top: 0;\n        }\n        \n        .dropdown-submenu {\n            position: relative;\n        }\n        \n        .dropdown-submenu>.dropdown-menu {\n            top: 0;\n            left: 100%;\n            margin-top: -6px;\n            margin-left: -1px;\n            -webkit-border-radius: 0 6px 6px 6px;\n            -moz-border-radius: 0 6px 6px;\n            border-radius: 0 6px 6px 6px;\n        }\n        \n        .dropdown-submenu:hover>.dropdown-menu {\n            display: block;\n        }\n        \n        .dropdown-submenu>a:after {\n            display: block;\n            content: \" \";\n            float: right;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n            border-width: 5px 0 5px 5px;\n            border-left-color: #ccc;\n            margin-top: 5px;\n            margin-right: -10px;\n        }\n        \n        .dropdown-submenu:hover>a:after {\n            border-left-color: #fff;\n        }\n        \n        .dropdown-submenu.pull-left {\n            float: none;\n        }\n        \n        .dropdown-submenu.pull-left>.dropdown-menu {\n            left: -100%;\n            margin-left: 10px;\n            -webkit-border-radius: 6px 0 6px 6px;\n            -moz-border-radius: 6px 0 6px 6px;\n            border-radius: 6px 0 6px 6px;\n        }\n    "],
            directives: [ng2_bs_dropdown_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map