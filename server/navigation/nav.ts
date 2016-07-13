// ///<reference path="../../typings/node/node.d.ts"/>
//
// module DAO {
//
//     export interface Nav {
//         id:number;
//         firstname: string;
//         lastname: string;
//         username:string;
//         password:string;
//         email:string;
//         data:string;
//     }
//
//
// var fs = require('fs');
//
// export class NavDAO<Nav> {
//
//     private url:string='/nav-item.json';
//     private navs:Nav[];
//     private fs=fs;
//     constructor() {
//         this.load(function () {
//
//         });
//     }
//
//     load(callback:Function):void{
//         this.fs.readFile(__dirname+this.url, 'utf8',(err, data)=>{
//             if (err) throw err;
//             this.navs = JSON.parse(data);
//             callback(this);
//         });
//     }
//
//     getAll():any{
//         return this.navs;
//     }
// }
// }
