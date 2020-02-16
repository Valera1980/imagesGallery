import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { GalleryFileItemComponent } from './gallery-file-item/gallery-file-item.component';
import { GalleryLandingPageComponent } from './gallery-landing-page/gallery-landing-page.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { FileFormComponent } from './file-form/file-form.component';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryFileItemComponent,
    GalleryLandingPageComponent,
    GalleryFormComponent,
    FileFormComponent,
    FileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
