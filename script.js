var value, result;

function buttom(number) {
    value = document.calculator.screen.value += number;
}

function reset() {
    document.calculator.screen.value = "";
}

function calculate() {
    result = eval(value);
    document.calculator.screen.value = result.toLocaleString('pt-br');
}