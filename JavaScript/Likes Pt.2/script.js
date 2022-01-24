var likes = [9, 12, 9];
var spans = [
    document.querySelector("#count-1"),
    document.querySelector("#count-2"),
    document.querySelector("#count-3")
];

function like(id){
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)"
}