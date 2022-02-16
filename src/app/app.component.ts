import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  constructor(private menuService: MenuService) {}

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();
}
