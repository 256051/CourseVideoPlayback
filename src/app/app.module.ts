import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { VideoListComponent } from './video-list/video-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAvatarModule} from 'ng-zorro-antd/avatar'
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { SafePipe } from './service/safePipe';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPlayerComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzTypographyModule,
    NzDividerModule,
    NzSpaceModule,
    NoopAnimationsModule,
    NzIconModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzListModule,
    NzPaginationModule,
    NzNotificationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
