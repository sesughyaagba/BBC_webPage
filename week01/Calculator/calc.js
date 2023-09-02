let divd = (x, y) => x / y;
let multp = (x, y) => x * y;

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let divdbtn = document.getElementById("divdbtn");
let multbtn = document.getElementById("multbtn");
let resultParagraph = document.getElementById("resultParagraph");

divdbtn.addEventListener('click', () => {
    let result = divd(Number(num1.value), Number(num2.value));
    resultParagraph.textContent = `The divd of ${num1.value} and ${num2.value} is ${result}`;

})

multbtn.addEventListener('click', () => {
    let result = multp(Number(num1.value), Number(num2.value));
    resultParagraph.textContent = `The multp of ${num1.value} and ${num2.value} is ${result}`;
})