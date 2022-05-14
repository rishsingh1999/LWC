import { LightningElement } from 'lwc';
import parentFile1 from './parentFile1.html';
import parentFile2 from './parentFile2.html';
export default class Parent extends LightningElement {
    parentFile1 = true;

    render(){
        return this.parentFile1 ? parentFile1 : parentFile2;
    }

    handleClick(){
        this.parentFile1 = this.parentFile1 === true ? false : true;
    }
}