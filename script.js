// Variables
let points = 0;
let students = 0;
let intermeds = 0;
let professionals = 0;
let ais = 0;
let aiSpeed = 1000; // Update and then call Interval() to increase speed
let aiStrength = 0;
let composers = 0;

// Functions
function clicked () {
  points = points + 1 + students + (intermeds * 10) + (professionals * 25) + (composers * 40);
  document.getElementById("clickCount").innerHTML = points;

  if (points > 100) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Mezzo Piano";
  } 
  if (points > 500) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Mezzo Forte";    
  } 
  if (points > 1000) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Forte";
  } 
  if (points > 5000) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Fortissimo";
  }
}

function Interval () {
  if (ais > 0) {
    clearInterval(intervalRun);
  }
  globalThis.intervalRun = setInterval(aiCompose, aiSpeed);
}

Interval();

function aiCompose() {
  points += ais * 30;
  document.getElementById("clickCount").innerHTML = points;

  if (points > 100) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Mezzo Piano";
  } 
  if (points > 500) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Mezzo Forte";    
  } 
  if (points > 1000) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Forte";
  } 
  if (points > 5000) {
    document.getElementById("dynamic").innerHTML = "Current Dynamic: Fortissimo";
  }

  if (aiStrength == 1) {
    aiSpeed = 1000;
    Interval();
  }
  if (aiStrength == 2) {
    aiSpeed = 700;
    Interval();
  }
  if (aiStrength == 3) {
    aiSpeed = 500;
    Interval();
  }
  if (aiStrength == 4) {
    aiSpeed = 275;
    Interval();
  }
  if (aiStrength == 5) {
    aiSpeed = 125;
    Interval();
  }
}

function hireStudent() {
  let cost = Math.round((1.125 ** students) * 100)
  if (points >= cost) {
    points -= cost;
    students++;
    cost = Math.round((1.125 ** students) * 100)
    document.getElementById("clickCount").innerHTML = points;
    document.getElementById("studentAmt").innerHTML = "You Have " + students + " Music Student(s)"
    document.getElementById("hireStudentBtn").innerHTML = "Hire a Music Student - ♬" + cost;
  } else {
    return;
  }
}

function hireIntermed() {
  let cost = Math.round((1.2575 ** intermeds) * 350)
  if (points >= cost) {
    points -= cost;
    intermeds++;
    cost = Math.round((1.2575 ** intermeds) * 350)
    document.getElementById("clickCount").innerHTML = points;
    document.getElementById("intermedAmt").innerHTML = "You Have " + intermeds + " Intermediate Musician(s)"
    document.getElementById("hireIntermedBtn").innerHTML = "Hire an Intermediate Musician - ♬" + cost;
  } else {
    return;
  }
}

function hireProfessional() {
  let cost = Math.round((1.3 ** professionals) * 600)
  if (points >= cost) {
    points -= cost;
    professionals++;
    cost = Math.round((1.3 ** professionals) * 600)
    document.getElementById("clickCount").innerHTML = points;
    document.getElementById("professionalAmt").innerHTML = "You Have " + professionals + " Professional Musician(s)"
    document.getElementById("hireProfessionalBtn").innerHTML = "Hire a Professional Musician - ♬" + cost;
  } else {
    return;
  }
}

function hireAI() {
  if (ais == 0) {
    document.getElementById("computerStrength").innerHTML = "Your Computer Is a Potato";
    aiStrength++;
  }
  let cost = Math.round((1.45 ** ais) * 1250)
  if (points >= cost) {
    points -= cost;
    ais++;
    cost = Math.round((1.45 ** ais) * 1250)
    document.getElementById("clickCount").innerHTML = points;
    document.getElementById("aiAmt").innerHTML = "You Have " + ais + " AI Composer(s)"
    document.getElementById("hireAIBtn").innerHTML = "Hire an AI Composer - ♬" + cost;
  } else {
    return;
  }
}

function hireComposer() {
  let cost = Math.round((1.35 ** composers) * 2500)
  if (points >= cost) {
    points -= cost;
    composers++;
    cost = Math.round((1.35 ** composers) * 2500)
    document.getElementById("clickCount").innerHTML = points;
    document.getElementById("composerAmt").innerHTML = "You Have " + composers + " Classical Composer(s)"
    document.getElementById("hireComposerBtn").innerHTML = "Hire a Classical Composer - ♬" + cost;
  } else {
    return;
  }
}

function strengthenComputer() {
  if (ais < 1) {
    return;
  }
  let cost = Math.round((1.3 ** aiStrength) * 1700)
  if (points >= cost) {
    points -= cost;
    if (aiStrength == 1) aiStrength = 2;
    else if (aiStrength == 2) aiStrength = 3;
    else if (aiStrength == 3) aiStrength = 4;
    else if (aiStrength == 4) {
      aiStrength = 5;
      let btn = document.getElementById("strengthenComputerBtn");
      btn.innerHTML = "You Have Reached Max Computer Strength";
      btn.disabled = true;
    }
    else if (aiStrength == 5) return;
    cost = Math.round((1.3 ** aiStrength) * 1700)
    document.getElementById("clickCount").innerHTML = points;
    let strengthEl = document.getElementById("computerStrength");
    if (aiStrength == 2) strengthEl.innerHTML = "Your Computer Is A School Computer";
    if (aiStrength == 3) strengthEl.innerHTML = "Your Computer Is A Typical PC";
    if (aiStrength == 4) strengthEl.innerHTML = "Your Computer Is A Gaming PC";
    if (aiStrength == 5) strengthEl.innerHTML = "Your Computer Is A Supercomputer";
    if (aiStrength != 5) document.getElementById("strengthenComputerBtn").innerHTML = "Strengthen Computer (Increase AI Speed) - ♬" + cost;
  }
}