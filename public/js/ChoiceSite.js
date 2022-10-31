const song = document.getElementById('song');
const choices = ["Hello - Adele", "Pierre er min gud - Eibert","September - EWF"]
const b1 = document.getElementById("btn");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
let count = 0;

b1.addEventListener("click", saveLike);
b2.addEventListener("click",saveDislike);
b3.addEventListener("click",nextSong);

function saveLike () {
    console.log(song.innerText + " liked")
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

function endCheck(){
    if (count ===10){
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        alert("You have completed the test! Thank you for your help!")
    } else {
        nextSong();
    }
}



