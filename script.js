// const cash = document.getElementById("cash").value;
const purchaseBtnEl = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due").value;

let price = 23.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
const cidReduced = cid.reduce((a, b) => a + b[1], 0);

let status = `Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04`;

function getChange() {
  const lookup = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let cash = document.getElementById("cash").value;
  cid.forEach((x) => {
    console.log(x)
  })
}

purchaseBtnEl.addEventListener("click", () => {
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    alert("No change due - customer paid with exact cash");
  } else {
    getChange();
  }
});
