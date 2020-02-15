import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLandingPageComponent } from './gallery-landing-page.component';

describe('GalleryLandingPageComponent', () => {
  let component: GalleryLandingPageComponent;
  let fixture: ComponentFixture<GalleryLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
