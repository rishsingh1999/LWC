import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track result;
    num1;
    num2;

    onInputChangeHandler(event) {
        const name = event.target.name;
        if (name === 'Number1') {
            this.num1 = event.target.value;
        } else if (name === 'Number2') {
            this.num2 = event.target.value;
        }
    }

    onButtonCLick(event) {
        var operation = event.target.label;
        if (!isNaN(this.num1) && !isNaN(this.num2)) {
            const numb1 = parseInt(this.num1, 10);
            const numb2 = parseInt(this.num2, 10);
            var tempResult = 0;
            if (operation === 'Add') {
                tempResult = `${numb1 + numb2}`;
            } else if (operation === 'Subtract') {
                tempResult = `${numb1 - numb2}`;
            } else if (operation === 'Multiply') {
                tempResult = `${numb1 * numb2}`;
            } else if (operation === 'Divide') {
                tempResult = `${numb1 / numb2}`;
            }
            if (tempResult !== null && tempResult !== '' && tempResult !== undefined && !isNaN(tempResult)) {
                this.result = tempResult;
            }
        }
    }
}