import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud/crud.component';
import { GridModule,EditService,ToolbarService ,PageService, SortService, FilterService} from '@syncfusion/ej2-angular-grids';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrudInterceptor } from './crud/crud.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CrudInterceptor,multi:true},EditService,ToolbarService,PageService, SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
