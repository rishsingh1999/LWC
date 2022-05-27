import { LightningElement, track,api } from "lwc";

export default class ChildWebComponent extends LightningElement {
  @track value='Hello my name is rishabh'; //reactive in nature 
  //public method
  @api handleValueChange() {
    this.value='Nice to meet you';
  }
}
