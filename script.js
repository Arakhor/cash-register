// const cash = document.getElementById("cash").value;
const purchaseBtnEl = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due").value;

let price = 23.5;
const cid = [
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
// let cash = document.getElementById("cash").value;
// const cidReduced = cid.reduce((a, b) => a + b[1], 0);
let cash = 100;

function getNewCid(change) {
  const lookup = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  let newCid = cid.slice();

  for (let i = newCid.length - 1; i >= 0; i--) {
    while (newCid[i][1] >= lookup[i] && change >= lookup[i]) {
      newCid[i][1] -= lookup[i];
      change -= lookup[i];
    }
  }
  return newCid;
}

function getChangeStr() {
  const change = cash - price;
  let changeStr = `Status: OPEN\n`;
  const newCid = getNewCid(change);
  console.log(cid);
}

purchaseBtnEl.addEventListener("click", () => {
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    // } else if (cash === price) {
    // alert("No change due - customer paid with exact cash");
  } else {
    getChange();
  }
});
