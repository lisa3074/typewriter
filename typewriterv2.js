"use strict";
window.addEventListener("DOMContentLoaded", init);
function init() {
  const element = document.querySelector("#typewriter0").textContent;
  typewriter(element, done);
}

function typewriter(element, callback) {
  let count;
  start();
  function start() {
    count = 0;
    console.log("start");
    //delete all text i all tags with the class
    document.querySelector("#typewriter0").textContent = "";
    writeLetter();
  }

  function writeLetter() {
    console.log("writeLetter");
    let random = Math.floor(Math.random() * 300) + 50;
    //If text string is longer than count
    if (element.length > count) {
      //Remember the first number/character is printet, the last is NOT. Hence + 1.
      document.querySelector("#typewriter0").textContent = element.substring(0, count + 1);
      count++;
    }
    //Set random timer
    setTimeout(moreLettersOrNot, random);
  }

  function moreLettersOrNot() {
    console.log("moreLettersOrNo");
    //If one or several og the text strings are not done being written:
    if (element.length > count) {
      console.log("go on");
      writeLetter();
    } //If all text strings are done:
    else if (callback) {
      callback();
    }
  }
}

function done() {
  console.log("Done");
  typewriter(document.querySelector(".type").textContent);
}
