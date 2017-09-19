import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {UploadVisualizeComponent} from './upload-visualize.component';
import {UploadDisplayComponent} from './upload-display.component';


import {FileUploadModule} from 'ng2-file-upload';
import {UploadCompareComponent} from './upload-compare.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadVisualizeComponent,
    UploadDisplayComponent,
    UploadCompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
