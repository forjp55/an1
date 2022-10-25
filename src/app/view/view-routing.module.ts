import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryMainComponent} from "./gallery-main/gallery-main.component";

const routes: Routes = [
  {path: 'view', component: GalleryMainComponent, data: {title: 'גלריה'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
