var countDownDate = new Date("jan 1 1970 00:00:00").getTime();
var ktwebsite_event_time = document.getElementById("ktwebsite-event-time");

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var day = document.getElementById("dayText");
    var hour = document.getElementById("hourText");
    var min = document.getElementById("minText");
    var sec = document.getElementById("secText");

    if(days == 1){
        day.innerHTML = "day";
    } else {
        day.innerHTML = "days";
    }

    if(hours == 1){
        hour.innerHTML = "hour";
    } else {
        hour.innerHTML = "hours";
    }

    if(minutes == 1){
        min.innerHTML = "minute";
    } else {
        min.innerHTML = "minutes";
    }

    if(seconds == 1){
        sec.innerHTML = "second";
    } else {
        sec.innerHTML = "seconds";
    }
    
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    
    if (timeleft < 0) {
        clearInterval(myfunc);
        
        ktwebsite_event_time.style.display = "none";
        var ktwebsite_event_box4 = document.getElementById("ktwebsite-event-box4");
        ktwebsite_event_box4.classList.add("box4-disappear");
        setTimeout(() => {
            ktwebsite_event_box4.classList.remove("box4-disappear");
            ktwebsite_event_box4.style.display = "none";
        }, 250);
        var ktwebsite_event_box3 = document.getElementById("ktwebsite-event-box3");
        ktwebsite_event_box3.classList.add("box3-disappear");
        setTimeout(() => {
            ktwebsite_event_box3.classList.remove("box3-disappear");
        }, 250);
    }
}, 1000);

