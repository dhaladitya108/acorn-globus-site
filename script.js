let count = 0;
var counterPhoneCalls = document.getElementsByClassName("counter")[0];
setInterval(() => {
  if (count < 500) {
    count = count + 1;
    counterPhoneCalls.innerHTML = `${count}M`;
  }
}, 1);

let count2 = 18500;
var counterCostAndTime = document.getElementsByClassName("counter")[1];
setInterval(() => {
  if (count2 < 19000) {
    count2 = count2 + 1;
    counterCostAndTime.innerHTML = `${count2}`;
  }
}, 1.2);

let count3 = 1831;
var counterStatsBar = document.getElementsByClassName("counter")[2];
setInterval(() => {
  if (count3 < 2331) {
    count3 = count3 + 1;
    counterStatsBar.innerHTML = `${count3}`;
  }
}, 1.4);

let count4 = 111760;
var counterCupCoffee = document.getElementsByClassName("counter")[3];
setInterval(() => {
  if (count4 < 112260) {
    count4 = count4 + 1;
    counterCupCoffee.innerHTML = `${count4}`;
  }
}, 1.6);
