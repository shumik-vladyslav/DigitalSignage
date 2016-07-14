/**
 * Created by SHumiC on 14.07.2016.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {INav} from '../navigation/navigation';

@Injectable()
export class NavigationService {
    constructor(private http:Http) {
    }

    private dataUrl = '/api/navigation/nav';

    getData (): Observable<INav[]> {
        return this.http.get(this.dataUrl)
            .map( (data) => this.parse (data))
            .catch(this.handleError);
    }

    private parse(res: Response) {
        let body: INav [] = res.json();
        console.log(body)

        return body || { };
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}