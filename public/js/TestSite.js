
alert("By proceeding to take this test you are allowing us to save the result from this test");



addTrackEvent();
document.querySelector("#start").disabled = true;
let songPool = document.getElementById('songPool');
function addTrackEvent() {
    let add = document.querySelector(".add");
    add.addEventListener("click", e => {
        addTrack();
        console.log("Clicked!");
        console.log(document.getElementById("songPool").getElementsByTagName("li"));
    });
}

function addTrack() {
    let songList = document.getElementById("songList").options;
    let chosenSong = document.getElementById("listForm").value;

            for (let i = 0; i < songList.length; i++) {
                if (chosenSong === songList[i].value){
                    let newSong = document.createElement("li");
                    newSong.append(document.createTextNode(document.getElementById("listForm").value));
                    songPool.append(newSong);
                    startTest();
                    break;
                }
            }
}


function startTest(){
    if(songPool.getElementsByTagName("li").length === 10){
        document.querySelector("#start").disabled = false;
        document.querySelector(".add").disabled = true;
    }
}

function getSongs() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', )
    var url, availableOption;
    url = 'resources/song.json';

    $.getJSON(url, function (data) {
        //populate the cars datalist
        $(data.songs).each(function () {
            availableOption = "<option value=\"" + this.id + "\">" + this.name + "</option>";
            $('#songPool').append(availableOption);
        });
    });
}
