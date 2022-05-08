import { LightningElement } from "lwc";

export default class ParentWebComponent extends LightningElement {
  handleClick() {
    //firing an child method
    this.template.querySelector("c-child-web-component").handleValueChange();
  }
}