const purchaseBtnEl = document.getElementById("purchase-btn");
const changeDueEl = document.getElementById("change-due");
const cashEl = document.getElementById("cash");

let price = 3.26;
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

purchaseBtnEl.addEventListener("click", () => {
  let cash = cashEl.value * 1;
  let changeDue = cash - price;
  let change = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ];
  const lookup = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  for (let i = cid.length - 1; i >= 0; i--) {
    while (changeDue >= lookup[i] && cid[i][1] >= lookup[i]) {
      console.log(changeDue);
      change[i][1]++;
      cid[i][1] -= lookup[i];
      changeDue -= lookup[i];
    }
  }

  const isDrawerEmpty = () => {
    let bool = true;
    cid.forEach((x) => {
      if (x[1] > 0) {
        bool = false;
      }
    });
    return bool;
  };

  const printChange = () => {
    let changeString = ``;
    change.forEach((x, i) => {
      if (x[1] > 0) {
        changeString += `${x[0]}: $${x[1] * lookup[i]}\n`;
      }
    });
    return changeString;
  };

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash == price) {
    changeDueEl.innerText = `No change due - customer paid with exact cash`;
  } else if (changeDue > 0) {
    changeDueEl.innerText = `Status: INSUFFICIENT_FUNDS`;
  } else if (isDrawerEmpty()) {
    changeDueEl.innerText = `Status: CLOSED`;
  } else {
    changeDueEl.innerText = `Status: OPEN \n${printChange()}`;
  }
});
