// todo:
// 1) box sizing when you input large numbers, should there be a size limit?
// 2) refactor based on JS guys video
// 3) "slide out" on the right side of calc for more advanced/custom functions

class Calculator{
    constructor(pastOperand, presOperand, operator) {
        this.pastOperand = pastOperand;
        this.presOperand = presOperand;
        this.operator = operator;
        console.log("Constructing Calculator object...");
        
        // console.log("presOperand = " + presOperand.innerText);
    }

    compute(currOperator) {
        let newPresOperand = '';
        switch (currOperator) {
            case("divide"):
                newPresOperand = Number(pastOperand.innerText) / Number(presOperand.innerText);
                break;
            case("multiply"):
                newPresOperand = Number(pastOperand.innerText) * Number(presOperand.innerText);
                break;
            case("subtract"):
                newPresOperand = Number(pastOperand.innerText) - Number(presOperand.innerText);
                break;
            case("add"):
                newPresOperand = Number(pastOperand.innerText) + Number(presOperand.innerText);
                break;
            default:
                console.log("error with operator");            
        }
        this.clear();
        this.presOperand.innerText = newPresOperand;
    }

    clear() {
        pastOperand.innerText = '';
        operator.innerText = '';
        presOperand.innerText = '';
    }

    equals() {
        // loads the operator from the operatorbox 
        let currOperator = this.decipherOperator(operator.innerText);

        // if currOperator is truthy value like +, -, etc., 
        // perform calculation for that operator
        if (currOperator) {
            calc.compute(currOperator)
        }
    }

    append(value) {
        presOperand.innerText = presOperand.innerText + value;
    }

    decipherOperator(operator) {
        switch(operator) {
            case "": return false;
            case "÷": return "divide";
            case "×": return "multiply";
            case "-": return "subtract";
            case "+": return "add";
            default: return false; 
        }
    }
}
const numberBtn = document.querySelectorAll('[number]');

const equalsBtn = document.querySelector('[equals]');
const zeroBtn = document.querySelector('[zero');
const clearBtn = document.querySelector('[clear]')
const addBtn = document.querySelector('[add]');
const subtractBtn = document.querySelector('[subtract]');
const multiplyBtn = document.querySelector('[multiply]');
const divideBtn = document.querySelector('[divide]');
const negateBtn = document.querySelector('[negate]');
const percentBtn = document.querySelector('[percent]');
const decimalBtn = document.querySelector('[decimal]');

// top row, screen
const pastOperand = document.querySelector('[pastOperandBox]');
const operator = document.querySelector('[operatorBox]');
const presOperand = document.querySelector('[presOperandBox]');

calc = new Calculator(pastOperand, presOperand, operator);

equalsBtn.addEventListener('click', (e) => {
    calc.equals();
})

numberBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
    let btnInnerText = btn.innerText;
    calc.append(btnInnerText);
})})

zeroBtn.addEventListener('click', (e) => {
    if (presOperand.innerText != "0") {
        let value = zeroBtn.innerText;
        calc.append(value)
    }
})

clearBtn.addEventListener('click', (e) => {
    calc.clear();
})

decimalBtn.addEventListener('click', (e) => {
    let str = presOperand.innerText;

    if (str.includes('.') == false) {
        presOperand.innerText = presOperand.innerText + decimalBtn.innerText;
    }
})

negateBtn.addEventListener('click', e => {
    presOperand.innerText = Number(presOperand.innerText) * (-1);
})

percentBtn.addEventListener('click', (e) => {
    presOperand.innerText = Number(presOperand.innerText) * 100;
})

// operator buttons

addBtn.addEventListener('click', (e) => {
    operator.innerText = "+";
    pastOperand.innerText = presOperand.innerText;
    presOperand.innerText = '';

})

subtractBtn.addEventListener('click', (e) => {
    operator.innerText = "-";
    pastOperand.innerText = presOperand.innerText;
    presOperand.innerText = '';
})

multiplyBtn.addEventListener('click', (e) => {
    operator.innerHTML = "&#xD7;";
    pastOperand.innerText = presOperand.innerText;
    presOperand.innerText = '';
})

divideBtn.addEventListener('click', (e) => {
    operator.innerText = "÷";
    pastOperand.innerText = presOperand.innerText;
    presOperand.innerText = '';
})