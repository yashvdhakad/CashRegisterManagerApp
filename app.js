const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#errorMessage");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const bill = Number(billAmount.value);
const cash = Number(cashGiven.value);

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

const showMessage = (msg) => {
  message.style.display = "block";
  message.innerText = msg;
}

const calculateChange = (amountToBeReturned) => {
  for (i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};

const callbackFunction = () => {
  if (bill > 0 && cash >= bill) {
    const amountToBeReturned = cash - bill;
    return calculateChange(amountToBeReturned);
  } else {
    showMessage('Do you wanna wash plates?');
  }
};

checkBtn.addEventListener("click", callbackFunction);