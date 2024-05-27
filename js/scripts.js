setMenuState();
implementCountdown();

function setMenuState() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var menuElement = document.getElementById("navbar-links");

    if (width >= 750) {
        menuElement.style.display = "inline-block";
    } else {
        menuElement.style.display = "none";
    }

    addEventListener("resize", (event) => { });

    onresize = (event) => {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var menuElement = document.getElementById("navbar-links");

        if (width >= 750) {
            menuElement.style.display = "inline-block";
        } else {
            menuElement.style.display = "none";
        }
    };
}


function toggleMenu() {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var menuElement = document.getElementById("navbar-links");

    if (width >= 750) {
        // we should have a normal menu for desktop
        if (menuElement.style.display == "none") {
            menuElement.style.display = "inline-block";
        }

    } else {

        if (menuElement.style.display === "block") {
            menuElement.style.display = "none";
        } else {
            menuElement.style.display = "block";
        }

    }

}


function implementCountdown() {
    
    var countDownDate = new Date("May 29, 2024 14:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor(distance / (1000 * 60));

    if (distance < 0) {
        endCountdown();
        return;
    } else {
        updateCountdown(days, hours, minutes);
    }

    var intervalVal = setInterval(function () {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor(distance / (1000 * 60));

        if (distance < 0) {
            clearInterval(intervalVal);
            endCountdown();
        } else {
            updateCountdown(days, hours, minutes);
        }

    }, 1000);
}

function updateCountdown(days, hours, minutes) {

    if(minutes <= 30) {
        document.getElementById("countdown-value").innerHTML = "It's almost time, please take your seats";
        return;
    }
    
    if(days < 1){
        // less than a day
        if(hours > 14 || minutes > 840){
            document.getElementById("countdown-value").innerHTML = 'One more sleep!';
        } else {
            document.getElementById("countdown-value").innerHTML = "Today\'s the day!";
        }
        
    } else {
        // more than a day
        document.getElementById("countdown-value").innerHTML = (days + 1) + ((days + 1) <= 1 ? " day " : " days ") + " until we say 'I do'.";
    }
    
}

function endCountdown() {
    document.getElementById("countdown-value").innerHTML = "We're officially Mr and Mrs Davies.";
}

