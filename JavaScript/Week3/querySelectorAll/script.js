var pTags = document.querySelectorAll("p");

function getColor(element){
    console.log(element.value);
    //pTag.style.color = element.value;
    for(var i=0; i<pTags.length; i++) {
        if(i%2 == 0){
        pTags[i].style.color = element.value;
        }
    }
}