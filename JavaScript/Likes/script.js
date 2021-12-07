var countElement1 = document.querySelector("#count-1")
var countElement2 = document.querySelector("#count-2")
var countElement3 = document.querySelector("#count-3")

let likeCount1 = 9;
function like1(){
    likeCount1++;
    countElement1.innerText = likeCount1 + " like(s)";
    console.log(count);
}

let likeCount2 = 12;
function like2(){
    likeCount2++;
    countElement2.innerText = likeCount2 + " like(s)";
}

let likeCount3 = 9;
function like3(){
    likeCount3++;
    countElement3.innerText = likeCount3 + " like(s)";;
}