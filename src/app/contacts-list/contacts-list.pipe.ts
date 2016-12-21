import { Pipe, PipeTransform } from '@angular/core';
import { ContactsListItem } from "./contacts-list.component";

@Pipe({
  name: 'contactsListPipe'
})
export class ContactsListPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!Array.isArray(value) || !(typeof args === 'string')) {
      return;
    }
    const items : ContactsListItem[] = <ContactsListItem[]> value;
    return items.filter(item => item.firstname.indexOf(args) !== -1 || item.lastname.indexOf(args) !== -1);
  }

}
