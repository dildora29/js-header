"use strict";

const download = document.querySelector(".download");
const overly = document.querySelector(".overly");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".bi");
const menu = document.querySelector(".menu");

download.addEventListener("click", () => {
  overly.classList.remove("hidden");
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  overly.classList.add("hidden");
  modal.classList.add("hidden");
});

overly.addEventListener("click", () => {
  overly.classList.add("hidden");
  modal.classList.add("hidden");
  menu.classList.remove("open");
});

const menuNav = document.querySelector(".menu-nav");
const openNav = document.querySelector(".humber");
const navClouse = document.querySelector(".close-x");

openNav.addEventListener("click", () => {
  overly.classList.remove("hidden");
  menuNav.classList.remove("hidden");
  menuNav.classList.add("open");
});

navClouse.addEventListener("click", () => {
  overly.classList.add("hidden");
  menuNav.classList.add("hidden");
  menuNav.classList.remove("open");
});

overly.addEventListener("click", () => {
  overly.classList.add("hidden");
  menuNav.classList.remove("hidden");
  menuNav.classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    overly.classList.add("hidden");
    menuNav.classList.remove("hidden");
    menuNav.classList.remove("open");
  }
});

document.addEventListener("keydown", (even) => {
  if (even.key === "Escape") {
    modal.classList.add("hidden");
    overly.classList.add("hidden");
    menu.classList.remove("open");
  }
});
