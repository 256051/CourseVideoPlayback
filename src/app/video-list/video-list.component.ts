import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import { menuDto, submenuDto } from '../interface/menus';
import { Video, VideoDto } from '../interface/video';
import { UtilsService } from '../service/utils.service';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  hGutter = 16 + 8 * 1;
  vGutter = 16 + 8 * 1;
  nSpan = 4;
  screenHeight = 0;
  screenWidth = 0;
  
  pageIndex=1;
  pageSize=12;  
  total=0;
  allList= Array<Video>();

  menu: menuDto | undefined;
  submenu: submenuDto | undefined;
  videoList: Array<Video> | undefined; 
  type1: string | undefined;
  type2: string | undefined;
  //isPc: boolean|undefined;
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private videoService: VideoService,
    private utilsService: UtilsService
  ) {
    this.getScreenSize();

    // this.videos=new Array<VideoDto>();
  }

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();
  isPc = this.utilsService.isPC();
  ngOnInit(): void {
    this.isPc = this.utilsService.isPC();

    this.route.params.subscribe((params) => {
      this.type1 = params['type1'];
      this.type2 = params['type2'];

      this.menus.subscribe((params) => {
        this.menu = params.find((x) => x.type == this.type1);
        //console.log(this.menu);
      });

      this.submenus.subscribe((params) => {
        this.submenu = params.find((x) => x.type == this.type2);
        //console.log(this.submenu);
      });

      const videos = this.videoService.getVideos(this.type1);

      videos.subscribe((params) => {
        const video = params.find((x) => x.type == this.type2);
        this.allList = (<Video[]>video?.videos).reverse();
        this.total= Number( this.allList.length);
        this.videoList= this.paginate( this.allList, this.pageIndex, this.pageSize);
      });
    });
  }

  paginate(array:Video[], page_number:number, page_size:number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  pageChange(event:number){
     this.pageIndex= event;
     this.videoList= this.paginate(this.allList, this.pageIndex, this.pageSize);
  }

  pageSizeChange(event:number){
    this.pageSize= event;
    this.videoList= this.paginate(this.allList, this.pageIndex, this.pageSize);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(eventName?: string) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);
    if (this.isPc) {
      if (this.screenWidth <= 820) {
        this.hGutter = 16;
        this.vGutter = 16;
        this.nSpan = 6;
      } else {
        this.hGutter = 32;
        this.vGutter = 32;
        this.nSpan = 4;
      }    
    } else {
      this.hGutter = 40;
      this.vGutter = 40;
      this.nSpan = 23;    
    }
  }
}
