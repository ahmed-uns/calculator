
let lcd = document.getElementById('lcd');
let buttons = document.getElementsByClassName("Number");
let x;
for (button of buttons ) {
    button.addeventlistener('click',console.log(button.innerHTML))
}