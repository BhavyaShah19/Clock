setInterval(() => {
    date = new Date();
    hrs = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];

    hrsrot = 30 * hrs + min / 2;
    minrot = 6 * min;
    secrot = 6 * sec;

    hour.style.transform = `rotate(${hrsrot}deg)`;
    minute.style.transform = `rotate(${minrot}deg)`;
    second.style.transform = `rotate(${secrot}deg)`;

    document.getElementById('day').innerHTML = n;
}, 1000);