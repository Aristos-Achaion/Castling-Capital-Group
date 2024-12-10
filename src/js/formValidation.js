// Input field validator
const validateField = (fieldId, msgId) => {
  const value = document.getElementById(fieldId).value;
  const msgElement = document.getElementById(msgId);

  msgElement.textContent = "";
  msgElement.classList.remove("shown");

  if (!value) {
    msgElement.classList.add("shown");
    msgElement.textContent = "The field is required";
    return false;
  }
  return true;
};

// Email field validator
const validateEmail = () => {
  const email = document.getElementById("email").value;
  const emailMsg = document.getElementById("email-msg");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailMsg.textContent = "";
  emailMsg.classList.remove("shown");

  if (!email) {
    emailMsg.classList.add("shown");
    emailMsg.textContent = "The field is required";
    return false;
  }

  if (!emailRegex.test(email)) {
    emailMsg.classList.add("shown");
    emailMsg.textContent = "E-mail is invalid";
    return false;
  }
  return true;
};

// Phone field validator
const validatePhone = () => {
  const phone = document.getElementById("phone").value;
  const phoneMsg = document.getElementById("phone-msg");

  phoneMsg.textContent = "";
  phoneMsg.classList.remove("shown");

  if (!phone) {
    phoneMsg.classList.add("shown");
    phoneMsg.textContent = "The field is required";
    return false;
  }

  const phoneRegex = /^\d{3}\s?\d{3}\s?\d{4}$/;
  if (!phoneRegex.test(phone)) {
    phoneMsg.classList.add("shown");
    phoneMsg.textContent = "Phone number is invalid";
    return false;
  }

  return true;
};

// Counter handler
const messageTextarea = document.getElementById("message");
const messageCounter = document.getElementById("counter");
const updateCounter = () => {
  const currentLength = messageTextarea.value.length;
  messageCounter.textContent = `${currentLength} / 500`;
};

const validateName = () => validateField("name", "name-msg");
const validateMessage = () => validateField("message", "message-msg");

// Clear input fields
const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
};

// Validate form on submit
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    const loader = document.getElementById("loader");
    const popup = document.getElementById("popup");
    const submitBtn = document.getElementById("submit-btn");
    loader.style.display = "block";
    submitBtn.disabled = true;
    setTimeout(() => {
      loader.style.display = "none";
      popup.style.display = "flex";
      setTimeout(() => {
        popup.style.display = "none";
        clearForm();
        updateCounter();
        submitBtn.disabled = false;
      }, 3000);
    }, 3000);
  }
});

// Validate form on change and focusout
const addValidationListeners = (fieldId, validationFunction) => {
  const field = document.getElementById(fieldId);
  field.addEventListener("change", validationFunction);
  field.addEventListener("focusout", validationFunction);
};

addValidationListeners("name", validateName);
addValidationListeners("email", validateEmail);
addValidationListeners("phone", validatePhone);
addValidationListeners("message", validateMessage);

// Event listener for counter
messageTextarea.addEventListener("input", updateCounter);
