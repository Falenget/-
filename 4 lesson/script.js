var button = document.getElementById("knopka");
var count = 0;

function print() {
    count = count + 1;
    console.log("Количество нажатий:" + count);
}

button.addEventListener("click", print);