const song = document.getElementById('song');
const choices = ["Hello - Adele", "Pierre er min gud - Eibert","September - EWF"]
const b1 = document.getElementById("btn");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
const finish = document.getElementById("finish");
let count = 0;
let like = 0;
let total = 10;
let result =0;

b1.addEventListener("click", saveLike);
b2.addEventListener("click",saveDislike);
b3.addEventListener("click",nextSong);

nextSong();
function saveLike () {
    console.log(song.innerText + " liked")
    like++;
    document.getElementById("result-text").innerHTML = like/total;
    count++;
    console.log(count)
    endCheck();
}
function saveDislike(){
    console.log(song.innerText + " disliked")
    count++;
    console.log(count)
    endCheck();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function nextSong() {
    //get from generated list of possible recommendation
    const next = choices[getRandomInt(3)];
    song.innerText = next;
}

function calculateSuccess(){
    return result = like/total;
}

function endCheck(){
    if (count ===total){
        calculateSuccess();
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        finish.style.visibility = "visible"

    } else {
        nextSong();
    }
}


window.onbeforeunload = function (){
    alert('Please make sure you have submitted your choices by pressing Finish Test before leaving')
}


