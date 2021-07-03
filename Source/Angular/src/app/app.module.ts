import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './backend/layout/dashboard/dashboard.component';
import { FooterComponent } from './backend/layout/footer/footer.component';
import { HeaderComponent } from './backend/layout/header/header.component';
import { RequestingComponent } from './backend/provider/requesting/requesting.component';
import { ListComponent } from './backend/provider/list/list.component';
import { LoginComponent } from './backend/login/login.component';
import { BackendModule } from './backend/backend.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    RequestingComponent,
    ListComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
