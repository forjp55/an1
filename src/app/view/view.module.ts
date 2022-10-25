import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import {MatListModule} from "@angular/material/list";
import { JokeDetailsDialogComponent } from './gallery-main/joke-details-dialog/joke-details-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    GalleryMainComponent,
    JokeDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ViewModule { }
