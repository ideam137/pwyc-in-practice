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

//----- submit
const modalForm = document.querySelector("#modal-form");

//modalForm.addEventListener("submit", closeModal);
modalForm.addEventListener("submit", gatherInfo);

function gatherInfo() {
  const textOutput = document.querySelector("#text-output");
  textOutput.innerText = "You entered: " + modalForm.stuff.value;
}

// ----- create recommendations
document
  .getElementById("modal-form")
  .addEventListener("submit-button", function (e) {
    e.preventDefault(); // Prevent form submission

    const formData = new FormData(e.target);
    const answers = {
      c1goals: formData.get("c1goals"),
      c1misuse: formData.get("c1misuse"),
      c1software: formData.get("c1software"),
    };

    const recommendation = generateRecommendation(answers);
    document.getElementById("recommendationOutput").innerText = recommendation;
  });

function generateRecommendation(answers) {
  if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "yes"
  ) {
    return "We recommend having PWYC monthly memberships.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "no"
  ) {
    return "Start with Python for data science. JavaScript isn't necessary yet.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "no" &&
    answers.c1software === "yes"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "no" &&
    answers.c1software === "no"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Ease of access" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "yes"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Ease of access" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "no"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Ease of access" &&
    answers.c1misuse === "no" &&
    answers.c1software === "yes"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Ease of access" &&
    answers.c1misuse === "no" &&
    answers.c1software === "no"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Both" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "yes"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Both" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "no"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Both" &&
    answers.c1misuse === "no" &&
    answers.c1software === "yes"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else if (
    answers.c1goals === "Both" &&
    answers.c1misuse === "no" &&
    answers.c1software === "no"
  ) {
    return "Consider backend development with Node.js or explore DevOps tools.";
  } else {
    return "huh";
  }
}
