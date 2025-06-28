let gs = [];
let us = [];
let s = false;
let l = 0;
let btns = ["r", "g", "p", "y"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!s) {
    console.log("Game started");
    s = true;
    lu();
  }
});

function bf(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function lu() {
  us = [];
  l++;
  h2.innerText = `Level ${l}`;

  let randomm = Math.floor(Math.random() * 4);
  let randcolo = btns[randomm];
  let randbtn = document.querySelector(`.${randcolo}`);

  gs.push(randcolo);
  bf(randbtn);
  console.log("Random:", randcolo);
}

function ca(idx) {
  if (us[idx] === gs[idx]) {
    if (us.length === gs.length) {
      setTimeout(lu, 1000);
    }
  } else {
    h2.innerText = "Game Over! Press any key to restart";
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "";
    }, 250);
    re();
  }
}

function bp() {
  let btn = this;
  bf(btn);

  let uc = btn.getAttribute("id");
  us.push(uc);

  ca(us.length - 1);
}

let allb = document.querySelectorAll(".btn");
for (let btn of allb) {
  btn.addEventListener("click", bp);
}

function re() {
  s = false;
  gs = [];
  us = [];
  l = 0;
}
