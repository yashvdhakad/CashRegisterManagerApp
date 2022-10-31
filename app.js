const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");

checkBtn.addEventListener("click", billAmountAndCashGivenCheck());

function billAmountAndCashGivenCheck() {
  console.log(billAmount.value);
  console.log(cashGiven.value);
}