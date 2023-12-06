let value = document.querySelector('#value');
let spanValue = 0;

const btnDecrease = document.querySelector('#decrease');
const btnReset = document.querySelector('#reset');
const btnIncrease = document.querySelector('#increase');

btnDecrease.addEventListener('click', () => {
    spanValue++;
    colorChange();
    value.textContent = spanValue;
});
btnReset.addEventListener('click', () => {
    spanValue = 0;
    colorChange();

    value.textContent = spanValue;
});
btnIncrease.addEventListener('click', () => {
    spanValue--;
    colorChange();
    value.textContent = spanValue;
});


function colorChange() {
    if (spanValue > 0) {
        document.getElementById("value").style.color = "green";

    } else if (spanValue < 0) {
        document.getElementById("value").style.color = "red";
    }
    else {
        document.getElementById("value").style.color = "black";

    }

}
console.log(document.getElementById("value"))