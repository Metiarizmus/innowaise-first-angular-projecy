import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TreeComponent } from './components/tree/tree.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchDirective} from './directives/search.directive';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SearchDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
