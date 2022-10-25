import { Component, OnInit } from '@angular/core';
import {ViewService} from "../view.service";
import {MatDialog} from "@angular/material/dialog";
import {JokeDetailsDialogComponent} from "./joke-details-dialog/joke-details-dialog.component";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.scss']
})
export class GalleryMainComponent implements OnInit {
  jokesList: any[] = [];
  jokesList$: Observable<any> = of([]);

  displayedColumns: string[] = ['id','type','joke', 'setup', 'delivery'];
  dataSource$: Observable<any> = of([]);


  constructor(private viewService: ViewService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
   this.dataSource$ = this.viewService.getJokes();
   console.log(this.viewService.jokesList)
  }

  identify(index: any, data: any) {
    return data.type;
  }

  openDialog(joke: any): void {
     this.dialog.open(JokeDetailsDialogComponent, {
      maxWidth: '1000px',
      maxHeight: '800px',
      data: joke
    });

  }


/*  onFilter(data: any): void {
    this.viewService.applyFilter(data.type);
  }*/
}
