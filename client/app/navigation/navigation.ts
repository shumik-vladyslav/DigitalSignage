/**
 * Created by SHumiC on 13.07.2016.
 */

import {Component, Input} from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bs-dropdown';
import {NavigationService} from '../services/NavigationService';

export interface INav {
    label: string,
    href: string,
    description: string,
    inner?: INav[]
}

@Component({
    selector: 'navigation',
    template:  `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
             N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br>
            </button>
            <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
              <li *ngFor="let item of navItem" [ngClass]="{'dropdown-submenu':item.inner}">
                <a *ngIf="!item.inner" href="{{ item.href }}" title="{{ item.description }}">{{ item.label }}</a>
                <a *ngIf="item.inner" tabindex="-1" href="#" title="{{ item.description }}">{{ item.label }}</a>
                <ul *ngIf="item.inner" class="dropdown-menu">
                  <li *ngFor="let inner of item.inner">
                    <a href="{{ inner.href }}" title="{{ inner.description }}">{{ inner.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
                `,
    styles: [`
        .dropdown-menu {
            top: 0;
        }
        
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
    directives: [DROPDOWN_DIRECTIVES],
    providers: [NavigationService]
})

export class Navigation {
    @Input () navItem: INav[] = [];
    errorMessage: string;

    constructor ( private service: NavigationService ) {
    };

    getData() {
        this.service.getData()
            .subscribe(
                data => this.navItem = data,
                error =>  this.errorMessage = <any>error);{
        }
    }
}