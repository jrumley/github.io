let playStatus = document.querySelector("#play-status");
let song = document.querySelector("#song")

playStatus.addEventListener("click", playFunction);

function playFunction() {
    if (playStatus.className == "fa fa-play") {
        this.classList.remove("fa", "fa-play");
        this.classList.add("fa", "fa-pause");
        song.play();
    } else if (playStatus.className == "fa fa-pause") {
        this.classList.remove("fa", "fa-pause");
        this.classList.add("fa", "fa-play");
        song.pause();
    }
    song.onended = function() {
        playStatus.classList.remove("fa", "fa-pause");
        playStatus.classList.add("fa", "fa-play");
    }
};