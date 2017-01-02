import { Component, Input } from "@angular/core";

export interface ContactsListItem {
  firstname : 'string',
  lastname : 'string',
  image? : 'string'
}

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent {

  @Input()
  contactList : ContactsListItem[];

  constructor () {
  }

  private getRandomColor (str : string) : string {
    // return `#${this.intToRGB(this.hashCode(str))}`;
    return inToHSL(hashCode(str));
  }

}

function hashCode (str : string) : number { // java String#hashCode
  let hash : number = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function inToHSL (num : number) : string {
  let shortened = num % 360;
  return `hsl(${shortened}, 100%, 30%)`;
}
