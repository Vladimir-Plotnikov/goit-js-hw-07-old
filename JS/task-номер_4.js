const buttonMinus = document.querySelector("button[data-action='decrement']")

const buttonPlus = document.querySelector("button[data-action='increment']")

const counterValue = document.querySelector('#value');


buttonPlus.addEventListener('click', increment)
buttonMinus.addEventListener('click', decrement)
function increment() {
    document.getElementById('value').textContent = +document.getElementById('value').textContent + 1;
}
function decrement() {
    document.getElementById('value').textContent -= 1;
}

