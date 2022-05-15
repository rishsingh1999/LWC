import { LightningElement, api } from "lwc";

export default class ChildLwc extends LightningElement {
    @api progressValue;
    handleChange(event) {
        this.progressValue = event.target.value;    
        const selectedEvent = new CustomEvent("progressvaluechange", {
        detail: this.progressValue
        });
        this.dispatchEvent(selectedEvent);
    }
}