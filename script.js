"use strict";

const btnShowModal = document.querySelectorAll(".btn");
const btnCloseModal = document.getElementById("btn-close-modal");

const modalWindow = document.getElementById("modal");

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modalWindow.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
});
