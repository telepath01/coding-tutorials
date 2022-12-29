"use strict";

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
