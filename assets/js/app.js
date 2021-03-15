let btn_area = document.querySelector('.btn-collection');
let time = document.querySelector(".time");

// initalize time to Seoul
setTime(0);
let interval = setInterval(function(){setTime(0)}, 1000);

btn_area.addEventListener('click', (event) => {
    if(event.target.nodeName == 'BUTTON'){
        changeTime(event.target.className);
    }
})

function changeTime(city){
    clearInterval(interval);
    timeDifference = getHourForCity(city);
    setTime(timeDifference);
    interval = setInterval(function(){setTime(timeDifference)}, 1000);
}

function getHourForCity(city){
    switch(city){
        case 'seoul':
            return 0;
        case 'berkeley':
            return 8;
        case 'new-york':
            return 11;
        default:
            return 0;
    }
}

function setTime(num){
    // get current time
    let fullTime = new Date();
    let hour = (fullTime.getHours()+num) % 24;
    let minute = fullTime.getMinutes();
    let sec = fullTime.getSeconds();

    // if the digit is single, put 0 before it
    hour = padZero(hour);
    minute = padZero(minute);
    sec = padZero(sec);
    
    time.innerText = `${hour} : ${minute} : ${sec}`;
}

function padZero(num){
    if(num > 9) return num;
    else return '0' + num;
}