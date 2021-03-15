let btn_area = document.querySelector('.btn-collection');
let time = document.querySelector(".time");

// initalize time to Seoul
setTime(0);
let initial_setTime = setInterval(function(){setTime(0)}, 1000);


btn_area.addEventListener('click', (event) => {
    if(event.target.nodeName == 'BUTTON'){
        changeTime(event.target.className);
    }
})

function changeTime(city){

}
// // event listener for when the Seoul button is clicked
// btn_seoul.addEventListener("click", function (){
//     // set button color according to button click
//     btn_seoul.style.backgroundColor = "blue";
//     btn_berkeley.style.backgroundColor = "black";
//     btn_new_york.style.backgroundColor = "black";

//     // set seoul boxShadow
//     btn_seoul.style.boxShadow = "0px 0px 8px blue";

//     // clear inital time
//     clearInterval(initial_setTime);
//     // set inital time to seoul
//     setTime(0);
//     // start seoul time interval
//     let interval_seoul = setInterval(function(){setTime(0)}, 1000);

//     // when other buttons are clicked, remove the seoul time interval
//     btn_berkeley.addEventListener("click", function stop(){
//         clearInterval(interval_seoul);
//     });
//     btn_new_york.addEventListener("click", function stop(){
//         clearInterval(interval_seoul);
//     });
// });

// // event listener for when the Berkeley button is clicked
// btn_berkeley.addEventListener("click", function(){
//     // set button color according to button click
//     btn_seoul.style.backgroundColor = "black";
//     btn_berkeley.style.backgroundColor = "blue";
//     btn_new_york.style.backgroundColor = "black";

//     // remove seoul boxShadow
//     btn_seoul.style.boxShadow = "0 0 #000";

//     // clear inital time
//     clearInterval(initial_setTime);
//     // set inital time to Berkeley
//     setTime(7);
//     // start Berkeley time interval
//     let interval_berkeley = setInterval(function(){setTime(7)}, 1000);

//     // when other buttons are clicked, remove the Berkeley time interval
//     btn_seoul.addEventListener("click", function stop(){
//         clearInterval(interval_berkeley);
//     });
//     btn_new_york.addEventListener("click", function stop(){
//         clearInterval(interval_berkeley);
//     });
// });

// // event listener for when the New York button is clicked
// btn_new_york.addEventListener("click", function(){
//     // set button color according to button click
//     btn_seoul.style.backgroundColor = "black";
//     btn_berkeley.style.backgroundColor = "black";
//     btn_new_york.style.backgroundColor = "blue";

//     // remove seoul boxShadow
//     btn_seoul.style.boxShadow = "0 0 #000";

//     // clear inital time
//     clearInterval(initial_setTime);
//     // set inital time to New York
//     setTime(10);
//     // start New York time interval
//     let interval_new_york = setInterval(function(){setTime(10)}, 1000);

//     // when other buttons are clicked, remove the New York time interval
//     btn_seoul.addEventListener("click", function stop(){
//         clearInterval(interval_new_york);
//     });
//     btn_berkeley.addEventListener("click", function stop(){
//         clearInterval(interval_new_york);
//     });
// });

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