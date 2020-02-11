"use strict";
window.addEventListener("DOMContentLoaded", writeLetter);
const text = document.querySelector(".typewritten").textContent;
let count = 0;
document.querySelector(".typewritten").textContent = "";

function writeLetter() {
  console.log("writeLetter");
  //Husk at det første tal er det første tegn i strengen, det sidste tal kommer IKKE med i strengen. Derfor + 1
  document.querySelector(".typewritten").textContent = text.substring(0, count + 1);
  console.log("wait");
  count++;
  console.log(count);
  setTimeout(moreLettersOrNot, 100);
}

function moreLettersOrNot() {
  console.log("moreLettersOrNo");
  if (text.length > count) {
    console.log("go on");
    writeLetter();
  } else {
    console.log("stop");
  }
}
