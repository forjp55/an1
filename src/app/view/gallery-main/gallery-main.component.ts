import { Component, OnInit } from '@angular/core';
import {ViewService} from "../view.service";
import {MatDialog} from "@angular/material/dialog";
import {JokeDetailsDialogComponent} from "./joke-details-dialog/joke-details-dialog.component";
import {Observable, of} from "rxjs";
import {Joke} from "../../shared/models/joke";

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.scss']
})
export class GalleryMainComponent implements OnInit {
  displayedColumns: string[] = ['id','type','joke', 'setup', 'delivery'];
  dataSource$: Observable<Joke[]> = of([]);


  constructor(private viewService: ViewService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
   this.dataSource$ = this.viewService.getJokes();
  }



  openDialog(joke: Joke): void {
     this.dialog.open(JokeDetailsDialogComponent, {
      maxWidth: '1000px',
      maxHeight: '800px',
      data: joke
    });
  }
}
