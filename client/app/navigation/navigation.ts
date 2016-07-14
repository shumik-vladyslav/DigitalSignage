/**
 * Created by SHumiC on 13.07.2016.
 */

import {Component, Input} from '@angular/core';
import {MdButton} from '@angular2-material/button'
import {DROPDOWN_DIRECTIVES} from 'ng2-bs-dropdown';

interface INav {
    label: string,
    href: string,
    description: string,
    iner?: INav[]
}

@Component({
    selector: 'navigation',
    template:  `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
             N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br></button>
    		<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li><a href="#">Some action</a></li>
              <li><a href="#">Some other action</a></li>
              <li class="divider"></li>
              <li class="dropdown-submenu">
                <a tabindex="-1" href="#">Hover me for more options</a>
                <ul class="dropdown-menu">
                  <li><a tabindex="-1" href="#">Second level</a></li>
                  <li class="dropdown-submenu">
                    <a href="#">Even More..</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">3rd level</a></li>
                    	<li><a href="#">3rd level</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Second level</a></li>
                  <li><a href="#">Second level</a></li>
                </ul>
              </li>
            </ul>
        </div>
                `,
    styles: [`
    
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
    `],
    directives: [DROPDOWN_DIRECTIVES]
})

export class Navigation {

    @Input () navItem: INav[] =
        [
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
        ]
        ;

}