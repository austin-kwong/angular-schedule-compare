import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {UploadComponent} from './upload.component';
import {UploadDisplayComponent} from './upload-display.component';

import {UploadFileComponent} from './upload-file.component';
import {FileSelectDirective} from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadComponent,
    UploadDisplayComponent,
    UploadFileComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
