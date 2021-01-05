//SECTION TO DISPLAY THE NUMBER OF TIMES WE ARE CONTACTED

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

// FORMS SECTION

var employerBtn = document.querySelector("#option-1");
var jobSeekerBtn = document.querySelector("#option-2");
var numberOrNameInput = document.querySelector("#nameOrNumber");

employerBtn.addEventListener("click", () => {
  employerBtn.style.backgroundColor = "#e01631";
  employerBtn.style.color = "white";
  numberOrNameInput.placeholder = "Company Name";
  jobSeekerBtn.style.removeProperty("background-color");
  jobSeekerBtn.style.color = "rgb(57, 57, 139)";
});

jobSeekerBtn.addEventListener("click", () => {
  console.log("Ayush");
  jobSeekerBtn.style.backgroundColor = "#2a2a68";
  jobSeekerBtn.style.color = "white";
  numberOrNameInput.placeholder = "Phone Number";
  employerBtn.style.backgroundColor = "white";
  employerBtn.style.color = "rgb(57, 57, 139)";
});

// HIRE US SECTION
var likeBtn = document.querySelector("#container-4-btn-1");
var hireUsBtn = document.querySelector("#container-4-btn-2");

likeBtn.addEventListener("mouseover", () => {
  likeBtn.style.backgroundColor = "#571f9c";
  likeBtn.style.color = "white";
  hireUsBtn.style.backgroundColor = "#571f9c";
  hireUsBtn.style.color = "white";
});

likeBtn.addEventListener("mouseout", () => {
  likeBtn.style.backgroundColor = "";
  likeBtn.style.color = "";
  hireUsBtn.style.backgroundColor = "";
  hireUsBtn.style.color = "";
});

hireUsBtn.addEventListener("mouseover", () => {
  likeBtn.style.backgroundColor = "#571f9c";
  likeBtn.style.color = "white";
  hireUsBtn.style.backgroundColor = "#571f9c";
  hireUsBtn.style.color = "white";
});

hireUsBtn.addEventListener("mouseout", () => {
  likeBtn.style.backgroundColor = "";
  likeBtn.style.color = "";
  hireUsBtn.style.backgroundColor = "";
  hireUsBtn.style.color = "";
});