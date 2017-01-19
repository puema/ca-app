import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpInterceptorModule } from 'angular2-http-interceptor';
import { TokenInterceptor } from './data/token-interceptor/token-interceptor';
import { MaterialModule, MdIcon, MdIconRegistry } from '@angular/material';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ApiInstantiator } from './data/ApiInstantiator';
import { MpBlurredScroll } from 'mp-blurred-scroll';
import { ContactsListPipe } from './contacts-list/contacts-list.pipe';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    MpBlurredScroll,
    ContactsListPipe,
    ContactEditComponent
  ],
  entryComponents: [
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    // HttpInterceptorModule.withInterceptors([TokenInterceptor])
  ],
  providers: [ApiInstantiator, DomSanitizerImpl],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
