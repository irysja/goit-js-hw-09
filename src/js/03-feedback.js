import throttle from "lodash/throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500);

function loadFormState() {
  const savedState = localStorage.getItem("feedback-form-state");
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

form.addEventListener("input", saveFormState);

window.addEventListener("DOMContentLoaded", loadFormState);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value && messageInput.value) {
    const userInput = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.removeItem("feedback-form-state");
    emailInput.value = "";
    messageInput.value = "";

    console.log("User Input:", userInput);
  } else {
    console.log("Error: Please fill both fields.");
  }
});

