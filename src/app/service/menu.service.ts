import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menuDto, submenuDto } from '../interface/menus';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // menu: menuDto[] = [];

  constructor(private http: HttpClient) {}

  getMenus() {
    return this.http.get<Array<menuDto>>('/assets/menu.json');
  }

  getSubMenus() {
    return this.http.get<Array<submenuDto>>(
      '/assets/submenu.json'
    );
  }
}
