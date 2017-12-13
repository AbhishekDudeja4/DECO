

var selected = document.querySelectorAll(".selPort");
var it = document.querySelectorAll("div .item");
it[0].addEventListener("click", function () {
    selected[0].style.display = "block";
    for(var k = 0 ; k<it.length ; k++){
        if(k != 0){
            selected[k].style.display = "none";
        }
    }
})

it[1].addEventListener("click", function () {
    selected[1].style.display = "block";
    for(var k = 0 ; k<it.length ; k++){
        if(k != 1){
            selected[k].style.display = "none";
        }
    }
})

it[2].addEventListener("click", function () {
    selected[2].style.display = "block";
    for(var k = 0 ; k<it.length ; k++){
        if(k != 2){
            selected[k].style.display = "none";
        }
    }
})