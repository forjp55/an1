import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDetailsDialogComponent } from './joke-details-dialog.component';

describe('JokeDetailsDialogComponent', () => {
  let component: JokeDetailsDialogComponent;
  let fixture: ComponentFixture<JokeDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
