import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpInterceptorModule } from "angular2-http-interceptor/lib/index";
import { TokenInterceptor } from "./data/token-interceptor/token-interceptor";
import { MaterialModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HeaderComponent } from "./header/header.component";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import {ApiInstantiator} from './data/ApiInstantiator';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HttpInterceptorModule.withInterceptors([TokenInterceptor])
  ],
  providers: [ApiInstantiator],
  bootstrap: [AppComponent]
})
export class AppModule { }
