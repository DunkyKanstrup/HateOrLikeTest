
addTrackEvent();

function addTrackEvent() {
    let add = document.querySelector(".add");
    add.addEventListener("click", e => {
        addTrack();
    });
}

function addTrack() {
    let songList = document.getElementById("songList").options;
    let chosenSong = document.getElementById("listForm").value;
    console.log(chosenSong);

    console.log(songList.length);
    for (let i = 0; i < songList.length; i++) {
        console.log(songList[i].value);
        if (chosenSong === songList[i].value){
            let favSong = document.getElementById("songPool");
            let newSong = document.createElement("li");
            newSong.append(document.createTextNode(document.getElementById("listForm").value))
            favSong.append(newSong);
            console.log("Song Should have been added")
            console.log(songList[i]);
            break;
        }
    }
}

function checkSong(){

}

// function addTrack() {
//     let newTrack = document.querySelector(".track").cloneNode(true);
//     newTrack.querySelector("input").value = "";
//     document.querySelector(".inputs").appendChild(newTrack);
//     toggleRemoveButton();
// }

// function removeTrackEvent() {
//     document.querySelector('.tracks').addEventListener('click', e=> {
//         let target = e.target;
//         if (!target.classList.contains("remove")) return;
//
//         removeTrack(target);
//     });
// }
//
// function removeTrack(target) {
//     target.parentNode.parentNode.removeChild(target.parentNode);
//     toggleRemoveButton();
// }
