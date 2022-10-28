"use strict";
const nav = document.querySelector(".nav-tog");

// toggle opacity
nav.addEventListener("click", (e) => {
  const unorderedList = document.querySelector(".nav ul");
  unorderedList.classList.toggle("active");
});
