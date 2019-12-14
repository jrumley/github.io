let browserType = "";
let missionClass = document.querySelector("#mission");

window.addEventListener("load", function() {
    // CHROME
    if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        browserType = "Google Chrome";
    }
    // FIREFOX
    else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        browserType = "Mozilla Firefox";
    }
    // INTERNET EXPLORER
    else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        browserType = "Internet Exploder";
    }
    // EDGE
    else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        browserType = "Internet Exploder";
    }
    // SAFARI
    else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        browserType = "Safari";
        missionClass.className = "";
    }
    // OPERA
    else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        browserType = "Opera";
    }
    // YANDEX BROWSER
    else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        browserType = "YaBrowser";
    }
    // OTHERS
    else {
        browserType = "Others";
    };
});

