import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArtworkDialogComponent } from './upload-artwork-dialog.component';

describe('UploadArtworkDialogComponent', () => {
  let component: UploadArtworkDialogComponent;
  let fixture: ComponentFixture<UploadArtworkDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadArtworkDialogComponent]
    });
    fixture = TestBed.createComponent(UploadArtworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
