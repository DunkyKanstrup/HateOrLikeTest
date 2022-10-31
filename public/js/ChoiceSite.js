const song = document.getElementById('song');
const button = document.getElementById("btn")
let count = 0;

button.addEventListener("click", saveChoice)

function saveChoice() {
    if (button.innerText === 'Like') {
        console.log("Like")
        //write to doc
        console.log(song.innerText + "liked");
        count++;
        console.log(count);
        nextSong();
    } else if (button.innerText === "Dislike") {
        //write to doc
        console.log("Don't like")
        console.log(song.innerText + "disliked");
        count++;
        console.log(count);
        nextSong();
    } else {

        nextSong();
        console.log(count);
    }
    if (count === 10) {
        button.disabled = true;
    }
}

function nextSong() {
    //get from generated list of possible recommendation
    song.innerText = "Test"
}
