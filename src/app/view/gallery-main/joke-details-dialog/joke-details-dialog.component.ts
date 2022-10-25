import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ViewService} from "../../view.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-joke-details-dialog',
  templateUrl: './joke-details-dialog.component.html',
  styleUrls: ['./joke-details-dialog.component.scss']
})
export class JokeDetailsDialogComponent implements OnInit {

  displayedColumns: string[] = ['joke', 'setup', 'delivery'];
  // dataSource$: Observable<any> = of([]);
  dataSource$: any;

  constructor(public dialogRef: MatDialogRef<JokeDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private viewService: ViewService) {
  }


  ngOnInit(): void {
    this.displayDataByType(this.data.type)
    this.dataSource$ = this.viewService.getJokesByTypes(this.data.type);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayDataByType(data: string) {
    if(data === 'single') {
      this.displayedColumns = ['joke'];
    } else {
      this.displayedColumns = ['setup', 'delivery'];
    }
  }


}
