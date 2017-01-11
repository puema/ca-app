import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpInterceptorModule } from 'angular2-http-interceptor/lib/index';
import { TokenInterceptor } from './data/token-interceptor/token-interceptor';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ApiInstantiator } from './data/ApiInstantiator';
import { MpBlurredScroll } from 'mp-blurred-scroll';
import { ContactsListPipe } from './contacts-list/contacts-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    MpBlurredScroll,
    ContactsListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HttpInterceptorModule.withInterceptors([TokenInterceptor])
  ],
  providers: [ApiInstantiator],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
