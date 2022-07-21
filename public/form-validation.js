var nameInput = document.getElementById("fullName");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var selectInput = document.getElementById("select");
var policyCheck = document.getElementById("privacyPolicy");

var submitButton = document.getElementById("submitButton");
submitButton.disabled = true;

var nameInvalid = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "`",
  "~",
  ",",
  "<",
  ">",
  "?",
  "/",
  `\\`,
  "|",
  ":",
  ";",
  '"',
  "{",
  "}",
  "[",
  "]",
];

var emailValid = ["@", "."];

var validName = undefined;
var validEmail = undefined;
var validReason = undefined;
var validMessage = undefined;
var validCheck = undefined;

var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail");
var errorSelect = document.getElementById("errorSelect");
var errorMessage = document.getElementById("errorMessage");
var errorMessageLength = document.getElementById("errorMessageLength");
var errorNameCharacters = document.getElementById("errorNameCharacters");
var errorPolicy = document.getElementById("errorPolicy");

nameInput.addEventListener("input", (event) => {
  const containsInvalidCharacters = nameInvalid.some((invalidChar) =>
    nameInput.value.includes(invalidChar)
  );
  errorName.classList.add("d-none");
  errorNameCharacters.classList.add("d-none");

  if (nameInput.value.length < 3) {
    errorName.classList.remove("d-none");
    nameInput.style.boxShadow = "0px -4px 0px #ff705d inset";
    nameInput.style.borderColor = "#ff705d";
    validName = false;
  }

  if (containsInvalidCharacters) {
    errorNameCharacters.classList.remove("d-none");
    nameInput.style.boxShadow = "0px -4px 0px #ff705d inset";
    nameInput.style.borderColor = "#ff705d";
    validName = false;
  }

  if (nameInput.value.length >= 3 && !containsInvalidCharacters) {
    nameInput.style.boxShadow = "0px -4px 0px #5e2dff inset";
    nameInput.style.borderColor = "#5e2dff";
    validName = true;
  }
  if (
    !validName ||
    !validEmail ||
    !validReason ||
    !validMessage ||
    !validCheck
  ) {
    submitButton.disabled = true;
  }

  if (validName && validEmail && validReason && validMessage && validCheck) {
    submitButton.disabled = false;
  }
});

emailInput.addEventListener("input", (event) => {
  const containsValidEmailCharacters = emailValid.every((validChar) =>
    emailInput.value.includes(validChar)
  );

  errorEmail.classList.add("d-none");
  if (!containsValidEmailCharacters) {
    errorEmail.classList.remove("d-none");
    emailInput.style.boxShadow = "0px -4px 0px #ff705d inset";
    emailInput.style.borderColor = "#ff705d";
    validEmail = false;
  }
  if (containsValidEmailCharacters) {
    emailInput.style.boxShadow = "0px -4px 0px #5e2dff inset";
    emailInput.style.borderColor = "#5e2dff";
    validEmail = true;
  }
  if (
    !validName ||
    !validEmail ||
    !validReason ||
    !validMessage ||
    !validCheck
  ) {
    submitButton.disabled = true;
  }

  if (validName && validEmail && validReason && validMessage && validCheck) {
    submitButton.disabled = false;
  }
});

selectInput.addEventListener("change", (event) => {
  if (selectInput.value === "Reason of Contact") {
    errorSelect.classList.remove("d-none");
    validReason = false;
  }
  if (selectInput.value != "Reason of Contact") {
    errorSelect.classList.add("d-none");
    validReason = true;
  }
  if (
    !validName ||
    !validEmail ||
    !validReason ||
    !validMessage ||
    !validCheck
  ) {
    submitButton.disabled = true;
  }

  if (validName && validEmail && validReason && validMessage && validCheck) {
    submitButton.disabled = false;
  }
});

messageInput.addEventListener("input", (event) => {
  errorMessage.classList.add("d-none");
  errorMessageLength.classList.add("d-none");
  if (messageInput.value.length < 50) {
    errorMessage.classList.remove("d-none");
    messageInput.style.boxShadow = "0px -4px 0px #ff705d inset";
    messageInput.style.borderColor = "#ff705d";
    validMessage = false;
  }
  if (messageInput.value.length > 250) {
    errorMessageLength.classList.remove("d-none");
    messageInput.style.boxShadow = "0px -4px 0px #ff705d inset";
    messageInput.style.borderColor = "#ff705d";
    validMessage = false;
  }
  if (messageInput.value.length >= 50 && messageInput.value.length <= 250) {
    messageInput.style.boxShadow = "0px -4px 0px #5e2dff inset";
    messageInput.style.borderColor = "#5e2dff";
    validMessage = true;
  }
  if (
    !validName ||
    !validEmail ||
    !validReason ||
    !validMessage ||
    !validCheck
  ) {
    submitButton.disabled = true;
  }

  if (validName && validEmail && validReason && validMessage && validCheck) {
    submitButton.disabled = false;
  }
});

policyCheck.addEventListener("change", (event) => {
  errorPolicy.classList.add("d-none");
  if (!policyCheck.checked) {
    errorPolicy.classList.remove("d-none");
    validCheck = false;
  }
  if (policyCheck.checked) {
    errorPolicy.classList.add("d-none");
    validCheck = true;
  }

  if (
    !validName ||
    !validEmail ||
    !validReason ||
    !validMessage ||
    !validCheck
  ) {
    submitButton.disabled = true;
  }

  if (validName && validEmail && validReason && validMessage && validCheck) {
    submitButton.disabled = false;
  }
});
