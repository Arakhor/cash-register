const purchaseBtnEl = document.getElementById("purchase-btn");
const changeDueEl = document.getElementById("change-due");
const cashEl = document.getElementById("cash");

let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

function subtractFloat(a, b) {
  return (a * 1000 - b * 1000) / 1000;
}

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
      change[i][1]++;
      cid[i][1] = subtractFloat(cid[i][1], lookup[i]);
      changeDue = subtractFloat(changeDue, lookup[i]);
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

  const printChange = (status) => {
    let changeString = ``;
    switch (status) {
      case "open":
        change.forEach((x, i) => {
          if (x[1] > 0) {
            changeString += `<p>${x[0]}: $${x[1] * lookup[i]}</p>`;
          }
        });
        break;
      case "closed":
        for (let i = 3; i >= 0; i--) {
          changeString += `<p>${change[i][0]}: $${
            change[i][1] * lookup[i]
          }</p>`;
        }
        break;
    }

    return changeString;
  };

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash == price) {
    changeDueEl.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
  } else if (changeDue > 0) {
    changeDueEl.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
  } else if (isDrawerEmpty()) {
    changeDueEl.innerHTML = `<p>Status: CLOSED</p>${printChange("closed")}`;
  } else {
    changeDueEl.innerHTML = `<p>Status: OPEN</p>${printChange("open")}`;
  }
});
