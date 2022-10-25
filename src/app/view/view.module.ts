import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { JokeDetailsDialogComponent } from './gallery-main/joke-details-dialog/joke-details-dialog.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    GalleryMainComponent,
    JokeDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
