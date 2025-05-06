// opens the modal immediately when the page is loaded
const modal = document.querySelector("#modal");
modal.showModal();

// ----- close
const closeButton = document.querySelector("#close-button");

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.close();
  const textOutput = document.querySelector("#text-output");
  textOutput.innerText = "You closed the modal without entering anything. Boo.";
}

// ----- submit
const modalForm = document.querySelector("#modal-form");

modalForm.addEventListener("submit", gatherInfo);

function gatherInfo() {
  const textOutput = document.querySelector("#text-output");
  textOutput.innerText = "You entered: " + modalForm.stuff.value;
}
