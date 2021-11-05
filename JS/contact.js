import testInputLength from "./libs/testInputLength.js";

const submit = document.querySelector("#submit");
const fullNameError = document.querySelector(".fullNameError");
const subjectError = document.querySelector(".subjectError");
const emailError = document.querySelector(".emailError");
const messageError = document.querySelector(".messageError");

submit.onclick = function (event) {
  event.preventDefault();
  const fullName = document.querySelector("#fullname").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  testInputLength(fullName, 3, fullNameError);
  testInputLength(subject, 3, subjectError);
  testInputLength(message, 3, messageError);

  if (validateEmail(email)) {
    emailError.classList.add("hide");
    emailError.classList.remove("show");
  } else {
    emailError.classList.add("show");
    emailError.classList.remove("hide");
  }
};

function validateEmail(emailAddy) {
  const emailExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}
