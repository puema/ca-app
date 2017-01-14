import { ContactDto } from '../data/model/ContactDto';

export function hashCode (str : string) : number { // java String#hashCode
  let hash : number = 0;
  if (str.length == 0) return hash;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

export function numToHSL (num : number) : string {
  let shortened = num % 360;
  return `hsl(${shortened}, 100%, 30%)`;
}

export function getContactColor (contact : ContactDto) : string {
  return numToHSL(hashCode(contact.firstname.substr(0,3) + contact.lastname.substr(0,3)));
}
