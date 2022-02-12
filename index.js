"use strict";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random = (num) => Math.floor(Math.random(num) * (num + 1));
setInterval(() => {
  const s1 = document.getElementsByClassName("s1");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s1[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));
setInterval(() => {
  const s3 = document.getElementsByClassName("s3");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s3[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));
setInterval(() => {
  const s2 = document.getElementsByClassName("s2");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s2[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));
setInterval(() => {
  const s4 = document.getElementsByClassName("s4");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s4[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));

setInterval(() => {
  const s5 = document.getElementsByClassName("s5");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s5[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));

setInterval(() => {
  const s6 = document.getElementsByClassName("s6");
  const rand_c = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // document.body.style.backgroundColor = rand_c;
  s6[0].style.backgroundColor = rand_c;
}, getRandomInt(500, 10000));
