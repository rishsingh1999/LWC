import { LightningElement, track,api } from "lwc";

export default class ChildWebComponent extends LightningElement {
  @track value='hello my name is rishabh'; //reactive in nature 
  //public method
  @api handleValueChange() {
    this.value='nice to meet you';
  }
}