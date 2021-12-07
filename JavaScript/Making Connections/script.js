

let requestCounter = document.querySelector("#request-number");
let connectionNumber = document.querySelector("#connection-count");

let username = document.querySelector("#user-name");

function accept(id) {
    let element = document.querySelector(id);
    element.remove();
    requestCounter.innerText--;
    connectionNumber.innerText++;
}
function ignore(id) {
    let element = document.querySelector(id);
    element.remove();
    requestCounter.innerText--;
}
function edit(){
    username.innerText = "OOOF"
}