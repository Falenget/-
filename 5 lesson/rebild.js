var raw, column;
var square;
var container = document.getElementById("container");

for (raw = 0;raw < 8;++raw) {
    for (column = 0; column < 8; ++column) {
        square = document.createElement("div");
        if ((raw + column) % 2 == 0) {
            square.style.backgroundColor = "white";
        }
        else {
            square.style.backgroundColor = "blue"; 
        } 
        square.classList.add("square");
        container.appendChild(square);
        }
    }