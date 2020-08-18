// const nbrClouds = 6;

// let src1 = require("../assets/cloud1.svg");

// /////////////////////////////////////////////////

// for (let i = 0; i < nbrClouds; i++) {
//   createCloud();
// }
// let clouds = document.querySelectorAll(".cloud");
// clouds.forEach(cloud => {
//   setLeftAndTop(cloud);
// });

// /////////////////////////////////////////////////

// function createCloud() {
//   let img = document.createElement('img');
//   img.className = ("cloud");
//   img.src = src1;
//   let article = document.getElementById("sky");
//   article.appendChild(img);
// }

// function setLeftAndTop(cloud) {
//   let left = randomNumberForLeft();
//   let top = randomNumberForTop();
//   while (left > 25 && left < 60 && top > 30 && top < 70 || top > 90) {
//     console.log("plop");
//     left = randomNumberForLeft();
//     top = randomNumberForTop();
//   }
//   cloud.style.left = (left + "%");
//   cloud.style.top = (top + "%");
// }

// function randomNumberForLeft() {
//   let randomposition = Math.floor(Math.random() * 100) -10;
//   return randomposition;
// }

// function randomNumberForTop() {
//   let randomposition = Math.floor(Math.random() * 100) + 10;
//   return randomposition;
// }