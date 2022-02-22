import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuDto, submenuDto } from '../interface/menus';
import { MenuService } from '../service/menu.service';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  // url: string | undefined;
 // videos = this.videoService.getVideos();
  url: string | undefined;

  menu: menuDto | undefined;
  submenu: submenuDto | undefined;
  type1: string | undefined;
  type2: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private videoService: VideoService
  ) {}

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.type1 = params['type1'];
      this.type2 = params['type2'];

      this.menus.subscribe((params) => {
        this.menu = params.find((x) => x.type == this.type1);
      });

      this.submenus.subscribe((params) => {
        this.submenu = params.find((x) => x.type == this.type2);
      });
      const videos= this.videoService.getVideos(this.type1);
      videos.subscribe((params) => {
        const video = params.find((x) => x.type == this.type2);
        this.url = video?.videos.find((x) => x.name == name)?.url;
        //this.controllerSrc = this.getSafeUrl();
      });
    });
  }
}
