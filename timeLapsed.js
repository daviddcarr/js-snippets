//finds the amount of time lapsed between two given times
function getHours(h1,m1,s1,h2,m2,s2) {
    var time = {second:0, minute:0, hour:0};
    //var bugs = 0;
    if(s1 < s2) {
       time.second = s2 - s1;
    } else if (s1 > s2) {
        time.second = (60 - s1) + s2;
    } else if (s1 === 0 && s2 === 0) {
        time.second = 0;
    } else {
        time.second = 0;
    }

    if(m1 < m2) {
       time.minute = m2 - m1;
    } else if (m1 > m2) {
        time.minute = (60 - m1) + m2;
    } else if (m1 === 0 && m2 === 0) {
        time.minute = 0;
    } else {
        time.minute = 0;
    }

    if(h1 < h2){
        time.hour = h2 - h1;
    } else if(h1 > h2){
        time.hour = (12 - h1) + h2;
    } else if (h1 === 0 && h2 === 0) {
        time.hour = 0;
        //bugs = 0;
    }  else if (h1 === h2 && m1 < m2) {
        time.hour =  0;
        //bugs = 0;
    } else if (h1 === h2 && m1 > m2) {
        time.hour = 0;
        //bugs = 1;
    } else if (h1 === h2 && m1 === m2) {
        time.hour = 0;
        //bugs = 1;
    }

    if(s1 > s2 && m1 != m2){
        time.minute--; 
    }

    if(m1 > m2 && h1 != h2){
        time.hour--; 
    }

    return time;
}

//Convert seconds to {hours,minutes,seconds}
function simplifyTime(s) {
    if (s > 3600) {
        var hours = Math.floor(s / 3600);
        if((s % 3600) > 60) {
            var minutes = Math.floor((s - (hours * 3600)) / 60),
                seconds = s % 60;
        } else {
            var minutes = 0,
                seconds = s % 3600;
        }
    } else if (s > 60) {
        var hours = 0,
            minutes = Math.floor(s / 60),
            seconds = s % 60;
    } else {
        var hours = 0,
            minutes = 0,
            seconds = s;
    }
    
    return {hours:hours, minutes:minutes, seconds:seconds};
}

//Returns a string in standard time format "01:23:45"
function stringTime(h,m,s) {
    if(m < 10) {
        var min = "0" + m;
    } else {
        var min = m;
    }
    if(s < 10) {
        var sec = "0" + s;
    } else {
        var sec = s;
    }
    
    return h + ":" + min + ":" + sec;
}
