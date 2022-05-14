import { LightningElement } from 'lwc';
import childFile1 from './childFile1.html';
import childFile2 from './childFile2.html';
export default class Child extends LightningElement {
    childFile1 = true;
    render(){
        return this.childFile1 ? childFile1 : childFile2;
    }

    handleClick(){
        this.childFile1 = this.childFile1 === true ? false : true; 
    }
}