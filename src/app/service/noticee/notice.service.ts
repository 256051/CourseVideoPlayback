import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) {}

  getNotices() {   
    return this.http.get<string[]>('/assets/notice.json');
  } 
}
