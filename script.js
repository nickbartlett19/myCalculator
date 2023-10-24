// Todo when back on wed: figure out bug with event listeners. We want to
// have the innerhtml of screen be the innerhtml of a SINGLE button
// when it is clicked.


const equalsBtn = document.querySelector('[equals]');
const numberBtn = document.querySelectorAll('[number]');
const clearBtn = document.querySelector('[clear]')

// top row, screen
const pastOperand = document.querySelector('[pastOperandBox]');
const operator = document.querySelector('[operatorBox]');
const presOperand = document.querySelector('[presOperandBox]');

const addBtn = document.querySelector('[add]');
const subtractBtn = document.querySelector('[subtract]');
const multiplyBtn = document.querySelector('[multiply]');
const divideBtn = document.querySelector('[divide]');
const negateBtn = document.querySelector('[negate]');
const percentBtn = document.querySelector('[percent]');
const decimalBtn = document.querySelector('[decimal]');

// console.log(equalsBtn.innerHTML);
// console.log(equalsBtn);

equalsBtn.addEventListener('click', (e)=> {
    // console.log("Wu - it works!");

    console.log(operator.innerHTML);
    const currOperator = decipherOperator(operator.innerHTML);
    console.log(currOperator);

    if (currOperator !== false) {
        var newPresOperand = '';
        // newPresOperand = Number(newPresOperand);
        switch (currOperator) {
            case("divide"):
                newPresOperand = Number(pastOperand.innerHTML) / Number(presOperand.innerHTML);
                break;
            case("multiply"):
                newPresOperand = Number(pastOperand.innerHTML) * Number(presOperand.innerHTML);
                break;
            case("subtract"):
                newPresOperand = Number(pastOperand.innerHTML) - Number(presOperand.innerHTML);
                break;
            case("add"):
                console.log(pastOperand.innerHTML);
                newPresOperand = Number(pastOperand.innerHTML) + Number(presOperand.innerHTML);
                break;
            default:
                console.log("error with operator");            
        }
    }
    console.log(newPresOperand);
    pastOperand.innerHTML = '';
    operator.innerHTML = '';
    presOperand.innerHTML = '';
    presOperand.innerHTML = newPresOperand; 

})

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', (e)=> {
        presOperand.innerHTML = presOperand.innerHTML + numberBtn[i].innerHTML;
        // console.log(numberBtn[i].innerHTML)
    })
}

clearBtn.addEventListener('click', (e) => {
    pastOperand.innerHTML = '';
    operator.innerHTML = '';
    presOperand.innerHTML = '';
})

decimalBtn.addEventListener('click', (e) => {
    let str = presOperand.innerHTML;

    if (str.includes('.') == false) {
        presOperand.innerHTML = presOperand.innerHTML + decimalBtn.innerHTML;
    }
})

// operator buttons

addBtn.addEventListener('click', (e) => {
    operator.innerHTML = "+";
    pastOperand.innerHTML = presOperand.innerHTML;
    presOperand.innerHTML = '';

})

subtractBtn.addEventListener('click', (e) => {
    operator.innerHTML = "-";
    pastOperand.innerHTML = presOperand.innerHTML;
    presOperand.innerHTML = '';
})

multiplyBtn.addEventListener('click', (e) => {
    operator.innerHTML = "&#xD7;";
    pastOperand.innerHTML = presOperand.innerHTML;
    presOperand.innerHTML = '';
})

divideBtn.addEventListener('click', (e) => {
    operator.innerHTML = "÷";
    pastOperand.innerHTML = presOperand.innerHTML;
    presOperand.innerHTML = '';
})


function decipherOperator(operator) {
    if (operator === "÷") {
        return "divide";
    }
    else if (operator === "×") {
        return "multiply";
    }
    else if (operator === "-") {
        return "subtract";
    }
    else if (operator === "+") {
        return "add";
    }
    else {
        return false;
    }
}
