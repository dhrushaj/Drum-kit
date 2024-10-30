// document.querySelector("button.a").addEventListener("click", tom1);
// document.querySelector("button.s").addEventListener("click", tom2);
// document.querySelector("button.d").addEventListener("click", tom3);
// document.querySelector("button.j").addEventListener("click", tom4);
// document.querySelector("button.w").addEventListener("click", snare);
// document.querySelector("button.k").addEventListener("click", crash);
// document.querySelector("button.l").addEventListener("click", bass);

function tom1() {
    var tom = new Audio("./sounds/tom-1.mp3");
    tom.play();
}
function tom2() {
    var tom = new Audio("./sounds/tom-2.mp3");
    tom.play();
}
function tom3() {
    var tom = new Audio("./sounds/tom-3.mp3");
    tom.play();
}
function tom4() {
    var tom = new Audio("./sounds/tom-4.mp3");
    tom.play();
}
function crash() {
    var tom = new Audio("./sounds/crash.mp3");
    tom.play();
}
function bass() {
    var tom = new Audio("./sounds/kick-bass.mp3");
    tom.play();
}
function snare() {
    var tom = new Audio("./sounds/snare.mp3");
    tom.play();
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}
document.addEventListener("keydown", clicked);
function clicked(event) {
    if (event.type == "click")
        var key = event.target.innerHTML;
    //this.innerHTML will output the contents of the parent <div>, not the button that was clicked. 
    else if (event.type == "keydown")
        var key = event.key;

    animation(key);
    switch (key) {
        case "w":
            snare();
            break;
        case "a":
            tom1();
            break;
        case "s":
            tom2();
            break;
        case "d":
            tom3();
            break;
        case "j":
            tom4();
            break;
        case "k":
            crash();
            break;
        case "l":
            bass();
            break;
    }
}

function animation(key) {
    var active = document.querySelector("." + key);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}