import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisttestComponent } from './artisttest.component';

describe('ArtisttestComponent', () => {
  let component: ArtisttestComponent;
  let fixture: ComponentFixture<ArtisttestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtisttestComponent]
    });
    fixture = TestBed.createComponent(ArtisttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
