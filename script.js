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

// ----- create recommendations
document.getElementById("modal-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const formData = new FormData(e.target);
  const answers = {
    c1goals: formData.get("c1goals"),
    c1misuse: formData.get("c1misuse").toLowerCase(),
    c1software: formData.get("c1software").toLowerCase(),
  };

  const recommendation = generateRecommendation(answers);
  document.getElementById("recommendationOutput").innerText = recommendation;
  modal.close();
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
    return "We recommend you consider implementing both a monthly and a daily PWYC model.";
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
