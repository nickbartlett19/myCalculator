// Todo when back on wed: figure out bug with event listeners. We want to
// have the innerhtml of screen be the innerhtml of a SINGLE button
// when it is clicked.


const equalsBtn = document.querySelector('[equals-button]');
const screen = document.querySelector('[screen]');
const numberBtn = document.querySelectorAll('[number]');
// console.log(equalsBtn.innerHTML);
// console.log(equalsBtn);

equalsBtn.addEventListener('click', (e)=> {
    // equalsBtn.style.color = 'blue';
    // console.log("Wu - it works!");
})

numberBtn.forEach(numberBtn => {
    addEventListener('click', (e)=> {
        console.log(numberBtn.innerHTML)
        // screen.innerHTML = button.innerHTML;
    })
})

console.log(numberBtn.length);
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', (e)=> {
        console.log()
        console.log(numberBtn[i].innerHTML)
        // screen.innerHTML = button.innerHTML;
    })
    console.log("added eventlistener to ", numberBtn[i].innerHTML);
}