let homeScore = 0;
let awayScore = 0;

let homeScoreDisplay = document.getElementById("home-score");
let awayScoreDisplay = document.getElementById("away-score");

let homeHead = document.getElementById("home-score-head");
let awayHead = document.getElementById("away-score-head");

function homeOnePoint() {
    homeScore += 1;
    homeScoreDisplay.textContent = homeScore;
    inTheLead()
}

function homeTwoPoint() {
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
    inTheLead()   
}

function homeThreePoint() {
    homeScore += 3;
    homeScoreDisplay.textContent = homeScore;
    inTheLead()
}

function awayOnePoint() {
    awayScore += 1;
    awayScoreDisplay.textContent = awayScore;
    inTheLead()
}

function awayTwoPoint() {
    awayScore += 2;
    awayScoreDisplay.textContent = awayScore;
    inTheLead()
}

function awayThreePoint() {
    awayScore += 3;
    awayScoreDisplay.textContent = awayScore;
    inTheLead()
}

function resetScore() {
    homeScore = 0;
    awayScore = 0;
    homeScoreDisplay.textContent = homeScore;
    awayScoreDisplay.textContent = awayScore;
    homeHead.classList.remove("leading");
    awayHead.classList.remove("leading");
}

function inTheLead() {
    if(homeScore > awayScore) {
        homeHead.classList.add("leading");
        awayHead.classList.remove("leading");
    }
    
    if(homeScore < awayScore) {
        homeHead.classList.remove("leading");
        awayHead.classList.add("leading");
    }
    
    if(homeScore === awayScore) {
        homeHead.classList.remove("leading");
        awayHead.classList.remove("leading");
    }
}

