let form = document.querySelector(".js-form"),
  formInputs = document.querySelectorAll(".js-input"),
  inputEmail = document.querySelector(".js-input-email"),
  inputPhone = document.querySelector(".js-input-phone"),
  inputCheckbox = document.querySelector(".js-input-checkbox");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      alert("Незаполненное поле");
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("inputs not filled");
    return false;
  }

  if (!validateEmail(emailVal)) {
    alert("Неверная почта");
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (!validatePhone(phoneVal)) {
    alert("Ошибка: перепроверьте телефон");
    inputPhone.classList.add("error");
    return false;
  } else {
    inputPhone.classList.remove("error");
  }

  if (!inputCheckbox.checked) {
    console.log("checkbox not checked");
    alert("Подтвердить действие");
    inputCheckbox.classList.add("error");
    return false;
  } else {
    inputCheckbox.classList.remove("error");
  }
};
