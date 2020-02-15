import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryFileItemComponent } from './gallery-file-item/gallery-file-item.component';
import { GalleryLandingPageComponent } from './gallery-landing-page/gallery-landing-page.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { FileFormComponent } from './file-form/file-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryFileItemComponent,
    GalleryLandingPageComponent,
    GalleryFormComponent,
    FileFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
