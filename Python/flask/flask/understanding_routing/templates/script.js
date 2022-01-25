let cookies = document.querySelector(".cookies");

function emptyCart(){
    alert("Your Cart is empty!")
}
function acceptCookies(element){
    cookies.remove();
}

function setNewImage() {
    document.getElementById("img1").src = "images/assets/succulents-2.jpg";
}
function setOldImage() {
    document.getElementById("img1").src = "images/assets/succulents-1.jpg";
}