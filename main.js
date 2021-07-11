var count = new Date("31 december, 2021 13:00:00").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var d = count - now;
        
        var days = Math.floor(d/(1000*60*60*24));
        var hours = Math.floor((d%(1000*60*60*24)) / (1000*60*60));
        var minutes = Math.floor((d%(1000*60*60)) / (1000*60));
        var seconds = Math.floor((d%(1000*60)) / 1000);

        document.getElementById("kun").innerHTML = days;
        document.getElementById("soat").innerHTML = hours;
        document.getElementById("minut").innerHTML = minutes;
        document.getElementById("SONIYA").innerHTML = seconds;

    }, 1000)