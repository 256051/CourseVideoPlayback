import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { UtilsService } from './service/utils.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  isPc = false;
  constructor(
    private menuService: MenuService,
    private utilsService: UtilsService
  ) {}

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();

  ngOnInit(): void {
    this.isPc= this.utilsService.isPC();
  }
}
