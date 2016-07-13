/**
 * Created by SHumiC on 13.07.2016.
 */

import {Component, Input} from '@angular/core';

interface INav {
    label: string,
    href: string,
    description: string,
    iner?: INav[]
}

@Component({
    selector: 'navigation',
    template:  `<div>NAVIGATION</div>
                `,
    styles: []
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