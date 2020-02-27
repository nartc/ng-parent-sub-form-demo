import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { SubFormAComponent } from './parent-form/sub-form-a/sub-form-a.component';
import { SubFormBComponent } from './parent-form/sub-form-b/sub-form-b.component';
import { SubFormCComponent } from './parent-form/sub-form-c/sub-form-c.component';
import { ParentFormTwoComponent } from './parent-form-two/parent-form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    SubFormAComponent,
    SubFormBComponent,
    SubFormCComponent,
    ParentFormTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
