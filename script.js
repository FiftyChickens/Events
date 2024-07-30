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
    let makeBox = document.createElement("div");

    boxContainer.appendChild(makeBox);
    makeBox.style.backgroundColor = storedColor;
    makeBox.className = "box";
    makeBox.setAttribute("id", boxCounter);

    makeBox.innerText = makeBox.id;

    boxCounter++;
  };
  // listens for 'New box' button click
  boxButton.addEventListener("click", function () {
    newBox();
  });

  // when double click occurse in the document on the box class remove box
  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.value === "box") {
      e.target.remove();
    }
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.value === "box") {
      e.target.innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
    }
  });
});
