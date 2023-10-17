// Todo when back on wed: figure out bug with event listeners. We want to
// have the innerhtml of screen be the innerhtml of a SINGLE button
// when it is clicked.


const equalsBtn = document.querySelector('[equals]');
const clearBtn = document.querySelector('[clear]')
const screen = document.querySelector('[screen]');
const numberBtn = document.querySelectorAll('[number]');
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
    // equalsBtn.style.color = 'blue';
    console.log("Wu - it works!");
})

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', (e)=> {
        screen.innerHTML = screen.innerHTML + numberBtn[i].innerHTML;
        // console.log(numberBtn[i].innerHTML)
    })
}

clearBtn.addEventListener('click', (e) => {
    screen.innerHTML = '';
})

decimalBtn.addEventListener('click', (e) => {
    let str = screen.innerHTML;

    if (str.includes('.') == false) {
        screen.innerHTML = screen.innerHTML + decimalBtn.innerHTML;
    }
})

