import { Pipe, PipeTransform } from '@angular/core';
import { ContactsListItem } from "./contacts-list.component";

@Pipe({
  name: 'contactsListPipe'
})
export class ContactsListPipe implements PipeTransform {

  transform (value : any, args? : any) : any {
    if (!Array.isArray(value) || !(typeof args === 'string')) {
      return;
    }
    const input : string = args.toLowerCase();
    const items : ContactsListItem[] = <ContactsListItem[]> value;
    return items.filter(item =>
      item.firstname.toLowerCase().indexOf(input) !== -1 ||
      item.lastname.toLowerCase().indexOf(input) !== -1
    );
  }

}
