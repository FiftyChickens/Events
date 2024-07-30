document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container");
  const boxButton = document.querySelector("#new-box-button");
  const colorForm = document.getElementById("color-form");
  const inputColor = document.querySelector("#color-input");
  let storedColor = "";
  let boxCounter = 0;

  // sets and stores color of boxses made;
  colorForm.addEventListener("submit", function (e) {
    let allBoxes = document.querySelectorAll("div.box");
    storedColor = inputColor.value;

    allBoxes.forEach((element) => {
      element.style.backgroundColor = storedColor;
    });

    inputColor.value = "";
    e.preventDefault();
  });

  // function for making box when button: 'New box' is clicked.
  newBox = function () {
    const makeBox = document.createElement("div");

    boxContainer.appendChild(makeBox);
    makeBox.style.backgroundColor = storedColor;
    makeBox.className = "box";
    makeBox.setAttribute("id", boxCounter);

    makeBox.innerText = makeBox.id;

    boxCounter++;
  };
  // if 'New Box' button clicked add new box
  boxButton.addEventListener("click", function () {
    newBox();
  });
  // If key n pressed add new box
  document.addEventListener("keypress", function (e) {
    if (e.target.id !== "color-input") {
      if (e.key.toUpperCase() === "N") {
        newBox();
      }
    }
  });

  // when double click occurse in the document on the box class remove box
  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.value === "box") {
      e.target.remove();
    }
  });

  // mouseover box will display coordiantes and mouseleave box will return back to id number
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.value === "box") {
      e.target.innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
    }

    e.target.addEventListener("mouseleave", function (e) {
      if (e.target.classList.value === "box") {
        e.target.innerText = e.target.id;
      }
    });
  });
});
