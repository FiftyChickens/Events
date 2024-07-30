document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container");
  const boxButton = document.querySelector("#new-box-button");
  const colorForm = document.getElementById("color-form");
  const inputColor = document.querySelector("#color-input");
  let storedColor = "";
  let boxCounter = 0;

  colorForm.addEventListener("submit", function (e) {
    let allBoxes = document.querySelectorAll("div.box");
    storedColor = inputColor.value;

    allBoxes.forEach((element) => {
      element.style.backgroundColor = storedColor;
    });

    inputColor.value = "";
    e.preventDefault();
  });

  newBox = function () {
    let makeBox = document.createElement("div");

    boxContainer.appendChild(makeBox);
    makeBox.style.backgroundColor = storedColor;
    makeBox.className = "box";
    makeBox.setAttribute("id", boxCounter);

    makeBox.innerText = makeBox.id;

    boxCounter++;
  };
});
