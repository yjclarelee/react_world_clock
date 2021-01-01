let btn_seoul = document.getElementById("seoul"),
    btn_berkeley = document.getElementById("berkeley"),
    btn_new_york = document.getElementById("new-york"),
    time = document.getElementById("time");

// let fullTime = new Date(),
//     hour = fullTime.getHours(),
//     minute = fullTime.getMinutes(),
//     sec = fullTime.getSeconds();

btn_seoul.addEventListener("click", function changeColor(event){
    btn_seoul.style.backgroundColor = "blue";
    btn_berkeley.style.backgroundColor = "black";
    btn_new_york.style.backgroundColor = "black";
});

btn_berkeley.addEventListener("click", function changeColor(event){
    btn_seoul.style.backgroundColor = "black";
    btn_berkeley.style.backgroundColor = "blue";
    btn_new_york.style.backgroundColor = "black";
});

btn_new_york.addEventListener("click", function changeColor(event){
    btn_seoul.style.backgroundColor = "black";
    btn_berkeley.style.backgroundColor = "black";
    btn_new_york.style.backgroundColor = "blue";
});

function setTime(){
    let fullTime = new Date(),
        hour = fullTime.getHours(),
        minute = fullTime.getMinutes(),
        sec = fullTime.getSeconds();
    if(hour < 10){
        hour = '0' + hour;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    time.innerText = `${hour} : ${minute} : ${sec}`;
}

// time.innerText = `${hour} : ${minute} : ${second}`;
setTime();
setInterval(setTime, 1000);


// body.addEventListener("click", function changeColor(event){
//     btn_seoul.style.backgroundColor = "black";
//     btn_berkeley.style.backgroundColor = "black";
//     btn_new_york.style.backgroundColor = "black";}
// );
