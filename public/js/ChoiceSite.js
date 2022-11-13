const song = document.getElementById('song');
const choices = ["Hello - Adele", "Pierre er min gud - Eibert","September - EWF"]
const b1 = document.getElementById("btn");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
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
    count++;
    like++;
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
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
    } else {
        nextSong();
    }
}

document.getElementById("result-text").innerHTML = result;
window.onbeforeunload = function (){
    alert('Please make sure you have submitted your choices by pressing Finish Test before leaving')
}


