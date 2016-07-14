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
            <button class="btn btn-primary dropdown-toggle dropdown-button" type="button" data-toggle="dropdown">
             N<br>a<br>v<br>i<br>g<br>a<br>t<br>i<br>o<br>
            </button>
            <ul class="dropdown-menu multi-level dropdown-menu-first-level" role="menu" aria-labelledby="dropdownMenu">
              <li>
                <span>Navigation</span>
              </li>
              <li *ngFor="let item of navItem" [ngClass]="{'dropdown-submenu':item.inner}">
                <a *ngIf="!item.inner" href="{{ item.href }}" title="{{ item.description }}">{{ item.label }}</a>
                <a *ngIf="item.inner" tabindex="-1" href="#" title="{{ item.description }}">{{ item.label }}</a>
                <ul *ngIf="item.inner" class="dropdown-menu dropdown-menu-nested">
                  <li *ngFor="let inner of item.inner">
                    <a href="{{ inner.href }}" title="{{ inner.description }}">{{ inner.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
                `,
    styles: [`
        .dropdown-menu-first-level {
            top: 0;
        }
        
        li{
            margin: 10px;
        }
        
        li span{
            margin: 50px; 
            font-size: 12px;
        }
        
        .dropdown-button {
            height: 400px;
        }
        
        .dropdown-menu-nested {
            height: 100%;
        }
        
        .dropdown-submenu>.dropdown-menu {
            top: 0;
            left: 93%;
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

    ngOnInit () {
        this.getData();
    }

    getData() {
        this.service.getData()
            .subscribe(
                data => this.navItem = data,
                error =>  this.errorMessage = <any>error);{
        }
    }

}