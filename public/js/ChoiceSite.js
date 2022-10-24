const button = document.querySelector('opinion');
const song = document.querySelector('p');
let count = 0;

button.addEventListener('click', saveChoice);

function saveChoice() {
    while (count <= 10){
        if (button.value === 'Like') {
            //write to doc
            console.log(song.innerText + "liked");
            count++;
            nextSong();
        } else if (button.value === "Don't like"){
            //write to doc
            console.log(song.innerText + "disliked");
            count++;
            nextSong();
        } else {
            nextSong();
        }
    }
}

function nextSong() {
    //get from generated list of possible recommendation
    song.textContent = "new song randomized from list"
}
