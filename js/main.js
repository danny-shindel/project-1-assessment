// state
let runningTotal;

//cashed elements
const inputEl = document.querySelector('input');
const totalEl = document.getElementById('total')

//event listeners
document.getElementById('0')
    .addEventListener('click', handleClick);

document.getElementById('1')
    .addEventListener('click', handleClick);

//functions

init()

function init(){
    runningTotal = 0;
    inputEl.value = 1;
    render();
}

function handleClick(evt){
    evt.target.id > 0 ? runningTotal += parseInt(inputEl.value) : runningTotal -= parseInt(inputEl.value)
    render()
}

function render(){
    totalEl.textContent = runningTotal
    runningTotal >= 0 ? totalEl.style.color = "black" : totalEl.style.color = "red"
}
