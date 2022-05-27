import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Calculator extends LightningElement {
    @track result;
    @track num1;
    @track num2;
    
    showErrorToast(errorMessage){
        const event = new ShowToastEvent({
            title : 'ERROR',
            message : errorMessage,
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
        console.log(this.num1);
        console.log(this.num2);
        
        if(this.num2 === null || this.num2 === ''){
            
            this.result = parseFloat(this.num1);
        } 
        else{
            this.result = parseFloat(this.num1) + parseFloat(this.num2) ;
        }        
    }
    subtraction() {
        if(parseFloat(this.num1) < parseFloat(this.num2)){
            this.showErrorToast('Result can not be negative');
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
            this.showErrorToast('Denominator can not be 0');
            
            //alert('Denominator can not be 0.');
            this.result = '';
        } else {
            this.result = parseFloat(this.num1) / parseFloat(this.num2);
        }
    }
}
