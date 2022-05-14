import { api, LightningElement,track, wire} from 'lwc';
import getContactsRelatedToAccount from '@salesforce/apex/ContactFinder.getContactsRelatedToAccount';
import findContacts from '@salesforce/apex/ContactFinder.findContacts';
const DELAY = 300;
export default class ContactsViewer extends LightningElement {
    @api recordId;
    @track contacts;
  //  @wire(getContactsRelatedToAccount, {accId: '$recordId'}) contacts;
    @api searchKey;
    searchKey = '';

    @wire(findContacts, { searchKey: '$searchKey',accId: '$recordId' })
    contacts;

    handleKeyChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

}