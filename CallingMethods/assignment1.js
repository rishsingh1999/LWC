import { LightningElement } from 'lwc';
import callMethod1 from '@salesforce/apex/CallingMethods.callMethod1';
import callMethod2 from '@salesforce/apex/CallingMethods.callMethod2';
import callMethod3 from '@salesforce/apex/CallingMethods.callMethod3';

export default class CallingMethodByPromises extends LightningElement {
    result;
    result2;
    result3;
    connectedCallback(){
        this.invokeApexClass();
    }
    invokeApexClass(){
        callMethod1().then(result => 
            {
            console.log('Method 1 result '+ result);
            this.result = 'Method 1 result '+ result;

            callMethod2(
                {
                message1: result
            }).then(result2 => 
                {
                console.log('Method 2 result '+ result2);
                this.result2 = 'Method 1 result '+result +result2;
                callMethod3({
                    message2:result2
                }).then(result3 => {
                    console.log('Method 3 result '+result3);
                    this.result3 = 'Method 1 result '+result +result2+ result3;

                }).catch(error => {
                    console.log('Error'+error);
                });
            }).catch(error => {
                console.log('Error'+error);
            });
        }).catch(error => {
            console.log('Error'+error);
        });

    }
}
