let scorePoints = document.getElementById("score")
let guestScore = document.getElementById("guest__score")
let points = 0
let guestPoints = 0

function incrementHome1() {
    points += 1
    scorePoints.innerHTML = points
}

function incrementHome2() {
    points += 2
    scorePoints.innerHTML = points
}

function incrementHome3() {
    points += 3
    scorePoints.innerHTML = points
}

function incrementGuest1() {
    guestPoints += 1
    guestScore.innerHTML = guestPoints
}

function incrementGuest2() {
    guestPoints += 2
    guestScore.innerHTML = guestPoints
}

function incrementGuest3() {
    guestPoints += 3
    guestScore.innerHTML = guestPoints
}

