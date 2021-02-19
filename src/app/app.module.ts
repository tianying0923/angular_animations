import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AutocallComponent } from './autocall/autocall.component';
import { ManualcallComponent } from './manualcall/manualcall.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocallComponent,
    ManualcallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
