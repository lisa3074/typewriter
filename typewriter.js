"use strict";
window.addEventListener("DOMContentLoaded", start);
let count;
let countA;
let countB;
const text0 = document.querySelector("#typewriter0").textContent;
const text1 = document.querySelector("#typewriter1").textContent;
const text2 = document.querySelector("#typewriter2").textContent;
let lyd1 = document.querySelector("#typekey1");
let lyd11 = document.querySelector("#typekey11");
let lyd2 = document.querySelector("#typekey2");
let lyd22 = document.querySelector("#typekey22");
let typespace = document.querySelector("#typespace");
let typespace2 = document.querySelector("#typespace2");

function start() {
  count = 0;
  countA = 0;
  countB = 0;
  console.log("start");
  //delete all text i all tags with the class
  document.querySelectorAll(".typewritten").forEach(textString => {
    textString.textContent = "";
  });
  document.querySelector(".click").addEventListener("click", writeLetter);
}

function writeLetter() {
  console.log("writeLetter");
  let random = Math.floor(Math.random() * 300) + 50;
  //CLEANING
  document.querySelector(".click").removeEventListener("click", writeLetter);
  document.querySelector(".click").classList.add("hide");

  //AUDIO (if the current character equals " ")
  if (text0.substring(count, count + 1) == " ") {
    //if typespace hasn't startet playing
    if (typespace.currentTime < 0.1) {
      typespace.play();
      //if typespace is playing
    } else {
      typespace2.play();
    }
  } //Otherwise all characters that can be devided by 2:
  else if (count % 2) {
    if (lyd1.currentTime < 0.1) {
      lyd1.play();
    } else {
      lyd11.play();
    }
  } else {
    if (lyd2.currentTime < 0.1) {
      lyd2.play();
    } else {
      lyd22.play();
    }
    //Put an eventListner on all audio tags - listen for when the sound has ended and rewind
    document.querySelectorAll("audio").forEach(lyd => {
      lyd.addEventListener("ended", function() {
        this.currentTime = 0;
      });
    });
  }
  //If text string is longer than count
  if (text0.length > count) {
    //Remember the first number/character is printet, the last is NOT. Hence + 1.
    document.querySelector("#typewriter0").textContent = text0.substring(0, count + 1);
    count++;
  } //If text string is longer than countA
  else {
    if (text1.length > countA) {
      document.querySelector("#typewriter1").textContent = text1.substring(0, countA + 1);
      countA++;
    } //If text string is longer than countB
    else {
      if (text2.length > countB) {
        document.querySelector("#typewriter2").textContent = text2.substring(0, countB + 1);
        countB++;
      }
    }
  }
  //Set random timer
  setTimeout(moreLettersOrNot, random);
}

function moreLettersOrNot() {
  console.log("moreLettersOrNo");
  //If one or several og the text strings are not done being written:
  if (text0.length > count || text1.length > countA || text2.length > countB) {
    console.log("go on");
    writeLetter();
  } //If all text strings are done:
  else {
    console.log("stop");
    setTimeout(() => {
      //Wait for 2 sec before returning to the start screen
      document.querySelector(".click").classList.remove("hide");
      start();
    }, 2000);
  }
}
