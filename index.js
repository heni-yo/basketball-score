let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeWinner = document.getElementById("home-winner")
let guestWinner = document.getElementById("guest-winner")

let homeCount = 0
let guestCount = 0
////////
function plusOneH(){
    homeCount += 1
    homeScore.innerText = homeCount
    whoIsTheWinner()
}

function plusTwoH(){
    homeCount += 2
    homeScore.textContent = homeCount
    whoIsTheWinner()
}

function plusThreeH(){
    homeCount += 3
    homeScore.textContent = homeCount
    whoIsTheWinner()
}
/////////
function plusOneG(){
    guestCount += 1
    guestScore.textContent = guestCount
    whoIsTheWinner()
}

function plusTwoG(){
    guestCount += 2
    guestScore.textContent = guestCount
    whoIsTheWinner()
}

function plusThreeG(){
    guestCount += 3
    guestScore.textContent = guestCount
    
    whoIsTheWinner()
}
/////////
function Reset(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}

function whoIsTheWinner(){
        
    if(homeCount>guestCount){
        homeWinner.textContent = "winner"
        guestWinner.textContent = "loser"
    }
    if(homeCount<guestCount){
        homeWinner.textContent =  "loser"
        guestWinner.textContent = "winner"
    }
    if(homeCount===guestCount){
        homeWinner.textContent = "draw"
        guestWinner.textContent = "drew"
    }
}


