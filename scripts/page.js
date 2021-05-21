"use strict"

window.onload = function () {

    const fCBtn = document.getElementById("fCBtn");
    fCBtn.onclick = fCBtnClicked;

    const cFBtn = document.getElementById("cFBtn");
    cFBtn.onclick = cFBtnClicked;

}

function fCBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);

    let results = (numberOne - 32) * (5 / 9);
    
    const resultsField = document.getElementById("results");
    resultsField.value = results.toFixed(2);
    
}

function cFBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);


    let results = (numberOne * (9 / 5)) + 32;
    
    const resultsField = document.getElementById("results");
    resultsField.value = results.toFixed(2);
}

