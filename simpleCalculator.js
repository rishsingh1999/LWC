import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Calculator extends LightningElement {
    @track result;
    @track num1;
    @track num2;
    showErrorToast(){
        const event = new ShowToastEvent({
            title : 'ERROR',
            message : 'Denominator can not be 0.',
            variant : 'error',
        })
        this.dispatchEvent(event);
    }
    showErrorToast1(){
        const event = new ShowToastEvent({
            title : 'ERROR',
            message : 'Result can not be negative.',
            variant : 'error',
        })
        this.dispatchEvent(event);
    }
    onInputChangeHandler(event) {
        const name = event.target.name;
        if (name === 'Number1') {
            this.num1 = event.target.value;
        } else if (name === 'Number2') {
            this.num2 = event.target.value;
        }
    }
    addition(){
        if(this.num2 === null || this.num2 === ''){
            
            this.result = parseFloat(this.num1);
        } 
        else{
            this.result = parseFloat(this.num1) + parseFloat(this.num2) ;
        }        
    }
    subtraction() {
        if(parseFloat(this.num1) < parseFloat(this.num2)){
            this.showErrorToast1();
            //alert('Result can not be negative.');
            this.result = '';
        }
        else{
            this.result = parseFloat(this.num1) - parseFloat(this.num2);
        }        
    }
    multiplication() {
        this.result = parseFloat(this.num1) * parseFloat(this.num2);
    }    
    division() {        
        if(parseFloat(this.num2) === 0) {
            this.showErrorToast();
            //alert('Denominator can not be 0.');
            this.result = '';
        } else {
            this.result = parseFloat(this.num1) / parseFloat(this.num2);
        }
    }
}