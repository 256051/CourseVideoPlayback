import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/video-list/one/yuwen' },
  { path: 'video-list/:type1/:type2', component: VideoListComponent },
  { path:'video-play/:type1/:type2/:name', component: VideoPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
