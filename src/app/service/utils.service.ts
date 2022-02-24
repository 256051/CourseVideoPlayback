import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  
  isPC() {
    //是否为PC端
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',     
      'iPod',
    ];
    let flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
}
