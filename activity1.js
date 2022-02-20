var score = 0;
function upscore(){
    score = score + 1;
    document.getElementById("score").innerHTML="Score : "+ score;

}

function savescore(){
    localStorage.setItem("score",score);
}

function next(){
    window.location = "activity_2.html";
}