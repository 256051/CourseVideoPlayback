import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { UtilsService } from './service/utils.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NoticeService } from './service/noticee/notice.service';

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
    private utilsService: UtilsService,
    private notification: NzNotificationService,
    private noticeService: NoticeService
  ) {}

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();

  ngOnInit(): void {
    this.isPc = this.utilsService.isPC();
    const notices = this.noticeService.getNotices();

    notices.subscribe((lines: string[]) => {
      let msg = '';
      lines.forEach((line) => {
        msg += line + '<br />';
      });
      this.notification.blank('', msg);
    });
  }
}
