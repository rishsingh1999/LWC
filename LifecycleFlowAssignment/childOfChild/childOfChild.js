import { LightningElement } from 'lwc';
import childOfChildFile1 from './childOfChildFile1.html';
import childOfChildFile2 from './childOfChildFile2.html';
export default class ChildOfChild extends LightningElement {
    childOfChildFile1 = true;
    
    render(){
        return this.childOfChildFile1 ? childOfChildFile1 : childOfChildFile2;
    }

    handleClick(){
        this.childOfChildFile1 = this.childOfChildFile1 === true ? false : true;
    }
}