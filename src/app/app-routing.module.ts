import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  { path: '',
  component: WelcomeComponent},
  {path: 'user/:id',
  component: AlbumsComponent},
  {path: 'user/photos/:albumId',
  component: PhotosComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
