'use strict';

const btn = document.querySelector(".btn");
const body = document.querySelector(".body");

function randomColor() {

    let makingColorCode = '0123456789ABCDEF';
    let finalCode = '#';

    for (let counter = 0; counter < 6; counter++) {
         finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
}

function getRandomColor() {
    document.body.style.backgroundColor = randomColor();
 }

function onClick() {
    getRandomColor();
}

btn.addEventListener('click', onClick);

