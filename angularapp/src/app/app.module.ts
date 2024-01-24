import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directives/custom.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import{ HttpClientModule } from '@angular/common/http';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp1Component } from './comp1/comp1.component';
import { CrudComponent } from './crud/crud.component';
import { TodoComponent } from './todo/todo.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputComponent } from './input/input.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchSkeletonComponent } from './search-skeleton/search-skeleton.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchNotfoundComponent } from './search-notfound/search-notfound.component';
import { HttpService } from './http.service';
import { AppSearchComponent } from './app-search/app-search.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    Child2Component,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    SimpleformComponent,
    ReactiveformComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CrudComponent,
    TodoComponent,
    PipeComponent,
    InputComponent,
    SearchDetailComponent,
    SearchSkeletonComponent,
    SearchResultsComponent,
    SearchNotfoundComponent,
    AppSearchComponent,
    
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
