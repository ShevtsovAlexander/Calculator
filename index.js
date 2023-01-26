const userInput = document.querySelector('#user_input')

var expr = "";

press = (num) => {
    console.log(expr += num);
    userInput.value = expr;
}
equal = () => {
    userInput.value = eval(expr);
}

erase = () => {
    expr = ""
    userInput.value = expr;
}