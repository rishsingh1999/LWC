import { api, LightningElement,track, wire} from 'lwc';
import findContacts from '@salesforce/apex/ContactFinder.findContacts';
const DELAY = 1500;
export default class ContactsViewer extends LightningElement {
    @api recordId;
    @track contacts;
    @api flexipageRegionWidth
    @track searchKey;
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
