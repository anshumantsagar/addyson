import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';



//components imports
import {AppComponent} from './app.component'
import {StudentlistComponent} from './student-list/student-list.component';

//routes
const routes: Routes = [
  {path:'studentlist', component:StudentlistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
