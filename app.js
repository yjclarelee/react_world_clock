let btn_seoul = document.getElementById("seoul"),
    btn_berkeley = document.getElementById("berkeley"),
    btn_new_york = document.getElementById("new-york")
    body = document.body;

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

// body.addEventListener("click", function changeColor(event){
//     btn_seoul.style.backgroundColor = "black";
//     btn_berkeley.style.backgroundColor = "black";
//     btn_new_york.style.backgroundColor = "black";}
// );
