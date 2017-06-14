var score = 0;

function scoreScroll() {
    score += 1;
    document.getElementById("value").innerHTML = score;
}

function scoreHover() {
    score += 5;
    document.getElementById("value").innerHTML = score;
}