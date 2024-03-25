var countDownDate = new Date("Apr 05, 2024 10:05:00").getTime();

var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "D "
    document.getElementById("hours").innerHTML = hours + "H " 
    document.getElementById("mins").innerHTML = minutes + "M " 
    document.getElementById("secs").innerHTML = seconds + "S" 

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "A contagem chegou ao fim!!";
    }
    }, 1000);
