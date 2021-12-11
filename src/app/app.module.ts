import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewCitateComponent } from './new-citate/new-citate.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: CategoryComponent, children:[
    {path: ':id', component: ContentComponent}
  ]},
  {path: 'citate/new', component: NewCitateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ContentComponent,
    NewCitateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
