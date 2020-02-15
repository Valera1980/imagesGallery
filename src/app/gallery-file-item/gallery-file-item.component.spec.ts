import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFileItemComponent } from './gallery-file-item.component';

describe('GalleryFileItemComponent', () => {
  let component: GalleryFileItemComponent;
  let fixture: ComponentFixture<GalleryFileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
