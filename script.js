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
    return "We would recommend that you focus on implementing a PWYC monthly membership. Some pros of this program include greater revenue potential and maintained program integrity. Some cons of this program include the fact that it may be harder to implement into your gym software and requires more staff time to start/maintain.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "yes" &&
    answers.c1software === "no"
  ) {
    return "We would recommend that you focus on implementing a PWYC monthly membership. Part of this may include looking into software that would be able to keep up with these PWYC model needs or learning how to rework your current system to allow for multiple pricing systems. Some pros of this program include greater revenue potential and maintained program integrity. Some cons of this program include the fact that it may be harder to implement into your gym software and requires more staff time to start/maintain.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "no" &&
    answers.c1software === "yes"
  ) {
    return "We would recommend that you consider implementing both a PWYC monthly membership and PWYC day passes. Pros of monthly membership include greater revenue potential and maintained program integrity while pros of day passes include ease of implementation into your software and more accessibility for participants. Cons of monthly membership include the fact that it may be harder to implement into your gym software and requires more staff time to start/maintain where cons of day passes include not increasing recurring membership and that they are the easiest to take advantage of.";
  } else if (
    answers.c1goals === "Recurring revenue" &&
    answers.c1misuse === "no" &&
    answers.c1software === "no"
  ) {
    return "We would recommend that you consider implementing both a PWYC monthly membership and PWYC day passes. Part of this may include looking into software that would be able to keep up with the PWYC monthly membership needs or learning how to rework your current system to allow for multiple pricing systems. Pros of monthly membership include greater revenue potential and maintained program integrity while pros of day passes include ease of implementation into your software and more accessibility for participants. Cons of monthly membership include the fact that it may be harder to implement into your gym software and requires more staff time to start/maintain where cons of day passes include not increasing recurring membership and that they are the easiest to take advantage of.";
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
