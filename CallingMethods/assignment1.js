import { LightningElement } from 'lwc';
import callMethod1 from '@salesforce/apex/CallingMethods.callMethod1';
import callMethod2 from '@salesforce/apex/CallingMethods.callMethod2';
import callMethod3 from '@salesforce/apex/CallingMethods.callMethod3';

export default class CallingMethodByPromises extends LightningElement {
    result;
    result2;
    result3;
    temp;

    firstMethod(){
        setTimeout(()=>{
        callMethod1().then(result => {
            this.temp = result;
            this.result1 = "Method1 result:" + ' '+  this.temp;
            
            setTimeout(() => {
            callMethod2().then(result => {
                this.temp = this.temp + ' ' + result;                
                this.result2 = "Method2 result:" +' ' + this.temp;

                setTimeout(() => {
                callMethod3().then(result => {
                    this.temp = this.temp +' ' + result;
                    this.result3 = "Method3 result:" + ' ' + this.temp;
                })
                .catch(_error => {
                    console.log("error occured");
                })},6000)
            })
            .catch(_error => {
                console.log("error occured");
            })},4000)
        })
        .catch(_error => {
            console.log("error occured");
        })},2000);
    }
}
