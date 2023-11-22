let donations = 0;
let selected = false;
let selId = 0;
//Onclick function to highlight selected donation amount
function setValue(element) {
  let val = element;
  if (!selected) {
    val.style.background = "#82d14b";
    selId = val;
    selected = true;
  } else {
    selId.style.background = "#262c36";
    val.style.background = "#82d14b";
    selId = val;
  }
}

function validateCVC() {
  const cvc = document.getElementById("cvc");
  const cvcreg = /\d{3,4}/;
  return matchExists(cvcreg, cvc.value);
}

function matchExists(regex, value) {
  let mat = value.match(regex);
  const matchExists = mat != null;
  return matchExists && mat[0].length == value.length;
}
function validateCC() {
  const cc = document.getElementById("cc");
  const ccreg = /\d{16}/;
  return matchExists(ccreg, cc.value);
}
function validateName() {
  const name = document.getElementById("name");
  const namereg = /[a-zA-Z]*\s?[a-zA-Z]*/;
  return matchExists(namereg, name.value);
}
function validateDate() {
  const date = document.getElementById("date");
  const datereg = /(1[0-2]|0[1-9]|\d)\/(1[7-9]|[2-9]\d)/;
  return matchExists(datereg, date.value);
}
function validate() {
  const indicator = document.getElementsByClassName("form-indicator")[0];
  const cvc = validateCVC();
  const cc = validateCC();
  const date = validateDate();
  const name = validateName();

  const allAreValid = cvc && cc && date && name;

  if (allAreValid) {
    switch (Number(selId.id)) {
      case 1:
        donations += 5;
        break;
      case 2:
        donations += 10;
        break;
      case 3:
        donations += 20;
        break;
      case 4:
        donations += 40;
        break;
      case 5:
        donations += 100;
        break;
      case 6:
        donations += 250;
        break;
      case 7:
        donations += 1000;
        break;
      default:
        break;
    }
    const donation = document.getElementById("donation");
    donation.innerHTML = "";
  } else {
    if (!cc) {
      const ccError = document.getElementById("cc");
      ccError.style.color = "red";
    }
    if (!cvc) {
      const cvcError = document.getElementById("cvc");
      cvcError.style.color = "red";
    }
    if (!date) {
      const dateError = document.getElementById("date");
      dateError.style.color = "red";
    }
    if (!name) {
      const nameError = document.getElementById("name");
      nameError.style.color = "red";
    }
  }
  //   donations +=
  //   indicator.style.background ="blue";
  // }else{
  //   indicator.style.background ="red";
  // }
}
