import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import { menuDto, submenuDto } from '../interface/menus';
import { Video, VideoDto } from '../interface/video';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  hGutter = 16;
  vGutter = 16;

  menu: menuDto | undefined;
  submenu: submenuDto | undefined;
  videoList: Array<Video>|undefined;
  type1:string|undefined;
  type2:string|undefined;

  menus = this.menuService.getMenus();
  submenus = this.menuService.getSubMenus();
  videos= this.videoService.getOneVideos();  
  
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private videoService: VideoService,
  ) {

    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.type1 = params['type1'];
      this.type2 = params['type2'];

      this.menus.subscribe((params) => {
          this.menu = params.find((x) => x.type == this.type1);
          console.log(this.menu);     
        });
      
        this.submenus.subscribe((params) => {
          this.submenu = params.find((x) => x.type == this.type2);
          console.log(this.submenu);        
        
      });

   
      if(this.type1==="one"){
          this.videos.subscribe((params)=>{
            const video= params.find(x=>x.type== this.type2);
            this.videoList= video?.videos;
            
            console.log(this.videoList);
        });
      }

      if(this.type1==="two"){
        console.log("2")  
      }

      if(this.type1==="three"){
        console.log("3")  
      }
      


     
      

    });
    
  }
}
