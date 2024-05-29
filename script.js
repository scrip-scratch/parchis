const path = document.querySelector(".path");
const pathVertical = document.querySelector(".path-vertical");
const pathHorLeft = document.querySelector(".path-hor-left");
const pathHorRight = document.querySelector(".path-hor-right");

let firstDice = 1;
let secondDice = 1;
let activePlayer = "a";
let moveEnded = false;
let stepCounter = 0;

for (let index = 0; index <= 44; index++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  let cellIndex = 12;
  if (index > 0) {
    switch (index) {
      case 1:
        cellIndex = 13;
        break;
      case 2:
        cellIndex = 14;
        break;
      case 3:
        cellIndex = 11;
        break;
      case 4:
        cellIndex = "b_1";
        break;
      case 5:
        cellIndex = 15;
        break;
      case 6:
        cellIndex = 10;
        break;
      case 7:
        cellIndex = "b_2";
        break;
      case 8:
        cellIndex = 16;
        break;
      case 9:
        cellIndex = 9;
        break;
      case 10:
        cellIndex = "b_3";
        break;
      case 11:
        cellIndex = 17;
        break;
      case 12:
        cellIndex = 8;
        break;
      case 13:
        cellIndex = "b_4";
        break;
      case 14:
        cellIndex = 18;
        break;
      case 15:
        cellIndex = 7;
        break;
      case 16:
        cellIndex = "b_5";
        break;
      case 17:
        cellIndex = 19;
        break;
      case 18:
        cellIndex = 6;
        break;
      case 19:
        cellIndex = "x";
        break;
      case 20:
        cellIndex = 20;
        break;
      case 21:
        cellIndex = "x";
        break;
      case 22:
        cellIndex = "x";
        break;
      case 23:
        cellIndex = "x";
        break;
      case 24:
        cellIndex = 48;
        break;
      case 25:
        cellIndex = "x";
        break;
      case 26:
        cellIndex = 34;
        break;
      case 27:
        cellIndex = 47;
        break;
      case 28:
        cellIndex = "d_5";
        break;
      case 29:
        cellIndex = 35;
        break;
      case 30:
        cellIndex = 46;
        break;
      case 31:
        cellIndex = "d_4";
        break;
      case 32:
        cellIndex = 36;
        break;
      case 33:
        cellIndex = 45;
        break;
      case 34:
        cellIndex = "d_3";
        break;
      case 35:
        cellIndex = 37;
        break;
      case 36:
        cellIndex = 44;
        break;
      case 37:
        cellIndex = "d_2";
        break;
      case 38:
        cellIndex = 38;
        break;
      case 39:
        cellIndex = 43;
        break;
      case 40:
        cellIndex = "d_1";
        break;
      case 41:
        cellIndex = 39;
        break;
      case 42:
        cellIndex = 42;
        break;
      case 43:
        cellIndex = 41;
        break;
      case 44:
        cellIndex = 40;
        break;
      default:
        break;
    }
  }
  if (Number.isInteger(cellIndex)) {
    cell.innerHTML = cellIndex;
  }
  if (cellIndex != "x") {
    cell.id = `cell_${cellIndex}`;
  }
  pathVertical.append(cell);
}

for (let index = 0; index <= 17; index++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  let cellIndex = 0;
  if (index > 0) {
    switch (index) {
      case 1:
        cellIndex = 1;
        break;
      case 2:
        cellIndex = 2;
        break;
      case 3:
        cellIndex = 3;
        break;
      case 4:
        cellIndex = 4;
        break;
      case 5:
        cellIndex = 5;
        break;
      case 6:
        cellIndex = 55;
        break;
      case 7:
        cellIndex = "a_1";
        break;
      case 8:
        cellIndex = "a_2";
        break;
      case 9:
        cellIndex = "a_3";
        break;
      case 10:
        cellIndex = "a_4";
        break;
      case 11:
        cellIndex = "a_5";
        break;
      case 12:
        cellIndex = 54;
        break;
      case 13:
        cellIndex = 53;
        break;
      case 14:
        cellIndex = 52;
        break;
      case 15:
        cellIndex = 51;
        break;
      case 16:
        cellIndex = 50;
        break;
      case 17:
        cellIndex = 49;
        break;
      default:
        break;
    }
  }
  if (Number.isInteger(cellIndex)) {
    cell.innerHTML = cellIndex;
  }
  cell.id = `cell_${cellIndex}`;
  pathHorLeft.append(cell);
}

for (let index = 0; index <= 17; index++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  let cellIndex = 21;
  if (index > 0) {
    switch (index) {
      case 1:
        cellIndex = 22;
        break;
      case 2:
        cellIndex = 23;
        break;
      case 3:
        cellIndex = 24;
        break;
      case 4:
        cellIndex = 25;
        break;
      case 5:
        cellIndex = 26;
        break;
      case 6:
        cellIndex = "c_5";
        break;
      case 7:
        cellIndex = "c_4";
        break;
      case 8:
        cellIndex = "c_3";
        break;
      case 9:
        cellIndex = "c_2";
        break;
      case 10:
        cellIndex = "c_1";
        break;
      case 11:
        cellIndex = 27;
        break;
      case 12:
        cellIndex = 33;
        break;
      case 13:
        cellIndex = 32;
        break;
      case 14:
        cellIndex = 31;
        break;
      case 15:
        cellIndex = 30;
        break;
      case 16:
        cellIndex = 29;
        break;
      case 17:
        cellIndex = 28;
        break;
      default:
        break;
    }
  }
  if (Number.isInteger(cellIndex)) {
    cell.innerHTML = cellIndex;
  }
  cell.id = `cell_${cellIndex}`;
  pathHorRight.append(cell);
}

document.querySelectorAll(".cell").forEach((field, index) => {
  if ([37, 39, 40, 41, 43].includes(index)) {
    field.classList.add("cell--disable");
    field.innerHTML = "";
  }

  // field.addEventListener("click", () => {
  //   const selectedBullet = document.querySelector('.bullet--selected');

  //   if (selectedBullet) {
  //     const selectedBulletParent = selectedBullet.parentNode;

  //     if (selectedBullet.parentNode.classList.contains('path-base')) {
  //       selectedBullet.classList.remove('bullet--selected');
  //       activeteAllBullets();
  //       return;
  //     }
  //     if ([37, 39, 40, 41, 43].includes(index)) {
  //       selectedBullet.classList.remove('bullet--selected');
  //       activeteAllBullets();
  //       return;
  //     }
  //     field.append(selectedBullet);
  //     selectedBullet.classList.remove('bullet--selected');
  //     activeteAllBullets();

  //     checkStartFieldTagAmount(selectedBulletParent);
  //   }
  // })
});

function checkStartFieldTagAmount(field) {
  if (
    !field.classList.contains("path-start") &&
    !field.classList.contains("path-base")
  ) {
    return;
  }
  const alreadyTag = field.querySelector(".path-start-amount-tag");
  if (alreadyTag) alreadyTag.remove();

  const fieldBullets = field.querySelectorAll(".bullet");
  if (fieldBullets.length > 1) {
    const amountTag = document.createElement("div");
    amountTag.innerHTML = fieldBullets.length;
    amountTag.classList.add("path-start-amount-tag");
    field.append(amountTag);
  }
}

// document.querySelectorAll(".path-start").forEach((field) => {
//   field.addEventListener("click", (e) => {
//     e.stopPropagation();
//     const selectedBullet = document.querySelector('.bullet--selected');
//     if (selectedBullet) {
//       const selectedBulletParent = selectedBullet.parentNode;
//       field.append(selectedBullet);
//       selectedBullet.classList.remove('bullet--selected');
//       checkStartFieldTagAmount(field);
//       checkStartFieldTagAmount(selectedBulletParent);
//     }
//     activeteAllBullets();
//   })
// })

function removeAllBullets() {
  const bullets = document.querySelectorAll(".bullet");
  bullets.forEach((bullet) => {
    bullet.remove();
  });
}

const gameState = {
  a: {
    1: "base",
    2: "start",
    3: 10,
    4: 22,
    5: 33,
  },
  b: {
    1: "home_5",
    2: "home_4",
    3: "base",
    4: "start",
    5: 12,
  },
  c: {
    1: "base",
    2: "base",
    3: "start",
    4: "start",
    5: "home_5",
  },
  d: {
    1: 55,
    2: "base",
    3: "base",
    4: "home_3",
    5: 44,
  },
};

function setBullets(state) {
  removeAllBullets();
  Object.keys(state).forEach((key) => {
    Object.values(state[key]).forEach((value, index) => {
      const base = document.querySelector(".path-base--" + key);
      const start = document.querySelector(".path-start--" + key);

      const bullet = document.createElement("div");
      bullet.classList.add("bullet");
      bullet.classList.add("bullet--" + key);
      bullet.id = "bullet_" + key + "_" + (index + 1);

      if (value === "base") {
        base.append(bullet);
        return;
      }
      if (value === "start") {
        start.append(bullet);
        return;
      }
      if (Number.isInteger(value)) {
        const cell = document.querySelector("#cell_" + value);
        if (cell) cell.append(bullet);
        return;
      }
    });
    checkStartFieldTagAmount(document.querySelector(".path-base--" + key));
    checkStartFieldTagAmount(document.querySelector(".path-start--" + key));
  });
}

setBullets(gameState);

function disableAllBullets() {
  document.querySelectorAll(".bullet").forEach((bullet) => {
    bullet.classList.add("bullet--disabled");
  });
}

function activeteAllBullets() {
  document.querySelectorAll(".bullet").forEach((bullet) => {
    bullet.classList.remove("bullet--disabled");
  });
}

function unselectAllBullets() {
  const bullets = document.querySelectorAll(".bullet");
  bullets.forEach((bullet) => {
    bullet.classList.remove("bullet--selected");
  });
}

// path.addEventListener("click", () => {
//   const selectedBullet = document.querySelector('.bullet--selected');
//   if (selectedBullet) {
//     selectedBullet.classList.remove('bullet--selected');
//     activeteAllBullets();
//   }
// })

const dice = document.querySelector(".path-dice");
dice.addEventListener("click", () => {
  const first = Math.floor(Math.random() * 6) + 1;
  const second = Math.floor(Math.random() * 6) + 1;
  const diceItems = document.querySelectorAll(".path-dice__item");
  firstDice = first;
  secondDice = second;
  diceItems[0].innerHTML = first;
  diceItems[1].innerHTML = second;
  activeBullets();
});

function activeBullets() {
  const playerBullets = document.querySelectorAll(".bullet--" + activePlayer);
  playerBullets.forEach((bullet) => {
    bullet.classList.add("bullet--active");
  });
}

path.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("bullet--" + activePlayer)) {
    unselectAllBullets();
    target.classList.add("bullet--selected");
    return;
  }

  if (target.classList.contains("cell")) {
    const activeBullet = document.querySelector(".bullet--selected");
    if (activeBullet) {
      if (activeBullet.parentNode.contains("path-base")) {
      }

      const cell_id = target.id.split("_")[1];
      const bullet_id = activeBullet.id.split("_")[2];
      console.log(bullet_id);

      gameState[activePlayer][bullet_id] = +cell_id;
      console.log(gameState);
      setBullets(gameState);
    }
  }

  // console.log(e.target);

  // bullet.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //
  // })
});

// handleMove();
