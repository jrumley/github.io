let playStatus = document.querySelector("#play-status");
let song = document.querySelector("#song");

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





$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
    var navbarHeight = $navbar.outerHeight();
    var movement = 0;
    var lastDirection = 0;
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      movement += st - lastScrollTop;
  
      if (st > lastScrollTop) { // scroll down
        if (lastDirection != 1) {
          movement = 0;
        }
        var margin = Math.abs(movement);
        if (margin > navbarHeight) {
          margin = navbarHeight;
        }
        margin = -margin;
        $navbar.css('margin-top', margin+"px")
  
        lastDirection = 1;
      } else { // scroll up
        if (lastDirection != -1) {
          movement = 0;
        }
        var margin = Math.abs(movement);
        if (margin > navbarHeight) {
          margin = navbarHeight;
        }
        margin = margin-navbarHeight;
        $navbar.css('margin-top', margin+"px")
  
        lastDirection = -1;
      }
  
      lastScrollTop = st;
      // console.log(margin);
    });
});