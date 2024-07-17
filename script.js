var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("introSlides");
  var dots = document.getElementsByClassName("introTxt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

function toggleTab(current, other) {
  let currentBtn = document.getElementById(current);
  let otherBtn = document.getElementById(other);
  let currentDiv = document.getElementById(`${current}Table`);
  let otherDiv = document.getElementById(`${other}Table`);

  if (currentBtn.classList.contains("active")) {
    return;
  } else {
    otherBtn.classList.remove("active");
    otherDiv.classList.remove("active");
    currentBtn.classList.add("active");
    currentDiv.classList.add("active");
  }
}

const ascenLvl = [
  "firstAscenLvl",
  "secondAscenLvl",
  "thirdAscenLvl",
  "fourthAscenLvl",
  "fifthAscenLvl",
  "sixthAscenLvl",
  "seventhAscenLvl",
];
const ascen = [
  "firstAscen",
  "secondAscen",
  "thirdAscen",
  "fourthAscen",
  "fifthAscen",
  "sixthAscen",
  "seventhAscen",
];
const HPLevel = [
  "2,606",
  "5,189",
  "6,674",
  "8,372",
  "9,875",
  "11,387",
  "12,907",
];
const ATKLevel = ["68", "135", "174", "218", "258", "297", "337"];
const DEFLevel = ["159", "317", "408", "512", "603", "696", "789"];
const HPAsc = ["3,467", "5,801", "7,490", "8,985", "10,487", "11,999"];
const ATKAsc = ["90", "151", "195", "234", "274", "313"];
const DEFAsc = ["212", "354", "458", "549", "641", "733"];
const ERAsc = ["100", "108", "124", "140", "164", "196"];
const initStats = ["1,004/12,907", "26/337", "61/789", "100%/196%"];
const MAX_HP_STRING = "/12,907";
const MAX_ATK_STRING = "/337";
const MAX_DEF_STRING = "/789";
const MAX_ER_STRING = "/196%";
const MAX_HP_NUMBER = 12907;
const MAX_ATK_NUMBER = 337;
const MAX_DEF_NUMBER = 789;
const MAX_ER_NUMBER = 196;
let initLvl = [];
let counterLvl = 0;
let counterStatLvl = 0;
let counterStatAsc = 0;
let flagAsc = true;

function levelUp() {
  if (flagAsc) {
    // lvl changing
    let currentLvl = document.getElementById(ascenLvl[counterLvl]);
    let nextLvl = currentLvl.textContent.replace(/(\d+)\/(\d+)/, "$2/$2");
    initLvl.push(currentLvl.textContent);
    currentLvl.textContent = nextLvl;

    // HP leveling scaling
    let currentHPbar = document.getElementById("statHP");
    let curHP = parseInt(
      currentHPbar.innerHTML.split("/")[0].replace(/,/g, "")
    );
    let curHPpercen = (curHP / MAX_HP_NUMBER) * 100;
    let nextHP = HPLevel[counterStatLvl] + MAX_HP_STRING;
    currentHPbar.innerHTML = nextHP;
    let nextHPpercen =
      (parseInt(HPLevel[counterStatLvl].replace(/,/g, "")) / MAX_HP_NUMBER) *
      100;
    move("statHP", curHPpercen, nextHPpercen);

    // ATK leveling scaling
    let currentATKbar = document.getElementById("statATK");
    let curATK = parseInt(currentATKbar.innerHTML.split("/")[0]);
    let curATKpercen = (curATK / MAX_ATK_NUMBER) * 100;
    let nextATK = ATKLevel[counterStatLvl] + MAX_ATK_STRING;
    currentATKbar.innerHTML = nextATK;
    let nextATKpercen =
      (parseInt(ATKLevel[counterStatLvl]) / MAX_ATK_NUMBER) * 100;
    move("statATK", curATKpercen, nextATKpercen);

    // DEF leveling scaling
    let currentDEFbar = document.getElementById("statDEF");
    let curDEF = parseInt(currentDEFbar.innerHTML.split("/")[0]);
    let curDEFpercen = (curDEF / MAX_DEF_NUMBER) * 100;
    let nextDEF = DEFLevel[counterStatLvl] + MAX_DEF_STRING;
    currentDEFbar.innerHTML = nextDEF;
    let nextDEFpercen =
      (parseInt(DEFLevel[counterStatLvl]) / MAX_DEF_NUMBER) * 100;
    move("statDEF", curDEFpercen, nextDEFpercen);

    // Unlock ascension
    flagAsc = false;

    // counterLvl managing
    counterLvl++;
    if (counterLvl > ascenLvl.length) {
      counterLvl = 0;
    }

    // counterStatLvl managing
    counterStatLvl++;
    if (counterStatLvl > HPLevel.length) {
      counterStatLvl = 0;
    }

    // btn managing
    let lvlUpBtn = document.getElementById("lvlUpBtn");
    let ascBtn = document.getElementById("ascBtn");
    if (counterLvl != 0) {
      let resetBtn = document.getElementById("resetBtn");
      resetBtn.classList.remove("w3-disabled");
    }
    lvlUpBtn.classList.add("w3-disabled");
    if (counterLvl < ascenLvl.length) {
      ascBtn.classList.remove("w3-disabled");
    }
  }
}

function ascension() {
  // marking changing
  if (counterLvl >= 1) {
    let currentAsc = document.getElementById(ascen[counterLvl]);
    let prevAsc = document.getElementById(ascen[counterLvl - 1]);
    prevAsc.classList.remove("active");
    currentAsc.classList.add("active");
  }

  // HP ascension scaling
  let currentHPbar = document.getElementById("statHP");
  let curHP = parseInt(currentHPbar.innerHTML.split("/")[0].replace(/,/g, ""));
  let curHPpercen = (curHP / MAX_HP_NUMBER) * 100;
  let nextHP = HPAsc[counterStatAsc] + MAX_HP_STRING;
  currentHPbar.innerHTML = nextHP;
  let nextHPpercen =
    (parseInt(HPAsc[counterStatAsc].replace(/,/g, "")) / MAX_HP_NUMBER) * 100;
  move("statHP", curHPpercen, nextHPpercen);

  // ATK ascension scaling
  let currentATKbar = document.getElementById("statATK");
  let curATK = parseInt(currentATKbar.innerHTML.split("/")[0]);
  let curATKpercen = (curATK / MAX_ATK_NUMBER) * 100;
  let nextATK = ATKAsc[counterStatAsc] + MAX_ATK_STRING;
  currentATKbar.innerHTML = nextATK;
  let nextATKpercen = (parseInt(ATKAsc[counterStatAsc]) / MAX_ATK_NUMBER) * 100;
  move("statATK", curATKpercen, nextATKpercen);

  // DEF ascension scaling
  let currentDEFbar = document.getElementById("statDEF");
  let curDEF = parseInt(currentDEFbar.innerHTML.split("/")[0]);
  let curDEFpercen = (curDEF / MAX_DEF_NUMBER) * 100;
  let nextDEF = DEFAsc[counterStatAsc] + MAX_DEF_STRING;
  currentDEFbar.innerHTML = nextDEF;
  let nextDEFpercen = (parseInt(DEFAsc[counterStatAsc]) / MAX_DEF_NUMBER) * 100;
  move("statDEF", curDEFpercen, nextDEFpercen);

  // // ER ascension scaling
  let currentERbar = document.getElementById("statER");
  let curER = parseInt(currentERbar.innerHTML.replace(/%/g, "").split("/")[0]);
  let curERpercen = (curER / MAX_ER_NUMBER) * 100;
  let nextER = ERAsc[counterStatAsc] + "%" + MAX_ER_STRING;
  currentERbar.innerHTML = nextER;
  let nextERpercen = (parseInt(ERAsc[counterStatAsc]) / MAX_ER_NUMBER) * 100;
  move("statER", curERpercen, nextERpercen);

  // counterStatAsc managing
  counterStatAsc++;
  if (counterStatAsc > HPAsc.length) {
    counterStatAsc = 0;
  }

  // btn managing
  let lvlUpBtn = document.getElementById("lvlUpBtn");
  let ascBtn = document.getElementById("ascBtn");
  if (counterLvl < ascenLvl.length) {
    ascBtn.classList.add("w3-disabled");
    lvlUpBtn.classList.remove("w3-disabled");
  }
  flagAsc = true;
}

function reset() {
  // Lock asc
  flagAsc = true;

  // Reset ascen table
  let currentAsc = document.getElementById(ascen[counterLvl]);
  /*Note: in case user didn't ascen but want to reset, counterLvl need to be minus 1*/
  if (!currentAsc.classList.contains("active")) {
    counterLvl = counterLvl - 1;
    currentAsc = document.getElementById(ascen[counterLvl]);
  }
  currentAsc.classList.remove("active");
  document.getElementById(ascen[0]).classList.add("active");
  for (let i = 0; i < initLvl.length; i++) {
    let currentLvl = document.getElementById(ascenLvl[i]);
    currentLvl.textContent = initLvl[i];
  }
  initLvl = [];

  // Reset counter
  counterLvl = 0;
  counterStatLvl = 0;
  counterStatAsc = 0;

  // Reset stat table
  let currentHPbar = document.getElementById("statHP");
  let currentATKbar = document.getElementById("statATK");
  let currentDEFbar = document.getElementById("statDEF");
  let currentERbar = document.getElementById("statER");
  currentHPbar.innerHTML = initStats[0];
  currentHPbar.style.width = "7.785%";
  currentATKbar.innerHTML = initStats[1];
  currentATKbar.style.width = "7.784%";
  currentDEFbar.innerHTML = initStats[2];
  currentDEFbar.style.width = "7.785%";
  currentERbar.innerHTML = initStats[3];
  currentERbar.style.width = "51.02%";

  // Reset buttons
  let lvlUpBtn = document.getElementById("lvlUpBtn");
  let ascBtn = document.getElementById("ascBtn");
  let resetBtn = document.getElementById("resetBtn");
  if (lvlUpBtn.classList.contains("w3-disabled")) {
    lvlUpBtn.classList.remove("w3-disabled");
  }
  if (!ascBtn.classList.contains("w3-disabled")) {
    ascBtn.classList.add("w3-disabled");
  }
  if (!resetBtn.classList.contains("w3-disabled")) {
    resetBtn.classList.add("w3-disabled");
  }
}

// Move progress bar
function move(id, start, end) {
  let elem = document.getElementById(id);
  let width = start;
  let rate = setInterval(frame, 25);
  function frame() {
    if (width >= end) {
      clearInterval(rate);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

function dropDownTrigger(id) {
  let dropDownContent = document.getElementById(id);
  if (!dropDownContent.classList.contains("w3-show")) {
    dropDownContent.classList.add("w3-show");
  } else {
    dropDownContent.classList.remove("w3-show");
  }
}

function infoPopUp(id) {
  let info = document.getElementById(id);
  if (info.style.display == "none") info.style.display = "inline";
  else info.style.display = "none";
  setTimeout(infoPopUp, 500);
}
