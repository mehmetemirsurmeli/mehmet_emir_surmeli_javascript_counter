let value = document.querySelector('#value');
let spanValue = 0;

const btnDecrease = document.querySelector('#decrease');
const btnReset = document.querySelector('#reset');
const btnIncrease = document.querySelector('#increase');

btnDecrease.addEventListener('click', () => {
    spanValue++;
    value.textContent = spanValue;
});
btnReset.addEventListener('click', () => {
    spanValue = 0;
    value.textContent = spanValue;
});
btnIncrease.addEventListener('click', () => {
    spanValue--;
    value.textContent = spanValue;
});

if (value.spanValue > 0) {
    spanValue.style.color = "green"
} else if (value.spanValue < 0) {
    value.style.color = "red";
}
else {
    value.style.color = "black";

}
