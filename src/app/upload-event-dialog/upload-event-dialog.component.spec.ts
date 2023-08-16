import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEventDialogComponent } from './upload-event-dialog.component';

describe('UploadEventDialogComponent', () => {
  let component: UploadEventDialogComponent;
  let fixture: ComponentFixture<UploadEventDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadEventDialogComponent]
    });
    fixture = TestBed.createComponent(UploadEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
