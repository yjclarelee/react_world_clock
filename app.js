let btn_seoul = document.getElementById("seoul"),
    btn_berkeley = document.getElementById("berkeley"),
    btn_new_york = document.getElementById("new-york"),
    time = document.getElementById("time");

// initalize time to Seoul
setTime(0);
let initial_setTime = setInterval(function(){setTime(0)}, 1000);

// event listener for when the Seoul button is clicked
btn_seoul.addEventListener("click", function (){
    // set button color according to button click
    btn_seoul.style.backgroundColor = "blue";
    btn_berkeley.style.backgroundColor = "black";
    btn_new_york.style.backgroundColor = "black";

    // clear inital time
    clearInterval(initial_setTime);
    // set inital time to seoul
    setTime(0);
    // start seoul time interval
    let interval_seoul = setInterval(function(){setTime(0)}, 1000);

    // when other buttons are clicked, remove the seoul time interval
    btn_berkeley.addEventListener("click", function stop(){
        clearInterval(interval_seoul);
    });
    btn_new_york.addEventListener("click", function stop(){
        clearInterval(interval_seoul);
    });
});

// event listener for when the Berkeley button is clicked
btn_berkeley.addEventListener("click", function(){
    // set button color according to button click
    btn_seoul.style.backgroundColor = "black";
    btn_berkeley.style.backgroundColor = "blue";
    btn_new_york.style.backgroundColor = "black";

    // clear inital time
    clearInterval(initial_setTime);
    // set inital time to Berkeley
    setTime(7);
    // start Berkeley time interval
    let interval_berkeley = setInterval(function(){setTime(7)}, 1000);

    // when other buttons are clicked, remove the Berkeley time interval
    btn_seoul.addEventListener("click", function stop(){
        clearInterval(interval_berkeley);
    });
    btn_new_york.addEventListener("click", function stop(){
        clearInterval(interval_berkeley);
    });
});

// event listener for when the New York button is clicked
btn_new_york.addEventListener("click", function(){
    // set button color according to button click
    btn_seoul.style.backgroundColor = "black";
    btn_berkeley.style.backgroundColor = "black";
    btn_new_york.style.backgroundColor = "blue";

    // clear inital time
    clearInterval(initial_setTime);
    // set inital time to New York
    setTime(10);
    // start New York time interval
    let interval_new_york = setInterval(function(){setTime(10)}, 1000);

    // when other buttons are clicked, remove the New York time interval
    btn_seoul.addEventListener("click", function stop(){
        clearInterval(interval_new_york);
    });
    btn_berkeley.addEventListener("click", function stop(){
        clearInterval(interval_new_york);
    });
});

function setTime(num){
    // get current time
    let fullTime = new Date(),
        hour = (fullTime.getHours()+num) % 24,
        minute = fullTime.getMinutes(),
        sec = fullTime.getSeconds();

    // if the digit is single, put 0 before it
    if(hour < 10){
        hour = '0' + hour;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(sec < 10){
        sec = '0' + sec;
    }

    // set the innerText of the time
    time.innerText = `${hour} : ${minute} : ${sec}`;
    console.log(num);
}