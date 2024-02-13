var a = document.querySelector(".apple");
var sh = document.querySelector(".sh");
var l = document.querySelector(".heart");
var count = 0;
const n = "Akshay";
const s = "Chinnu";
var i = 0;
function move() {
    l.style.visibility = "visible";
    if (count < 50) {
        l.style.marginTop = `${count}px`;
        count += 5;
    }
    else {
        l.style.alignSelf = "center";
        l.style.marginTop=0;
    }
}
function displayNextCharacter() {
    if (i < n.length) {
        a.innerHTML += n[i];
        sh.innerHTML += s[i];
        i++;
    } else {
        clearInterval(intervalId);
        setInterval(move, 400);
    }
}
var intervalId = setInterval(displayNextCharacter, 500);

