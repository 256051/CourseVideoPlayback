import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoDto } from '../interface/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {}

  getVideos(name:any) {   
    return this.http.get<Array<VideoDto>>('/assets/video-'+name+'.json');
  } 
}
