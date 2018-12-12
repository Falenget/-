var tiles = [];

function createCell() {
    var cell = document.createElement("div");
    cell.classList.add("field-cell", "field-cell-null");
    return cell;
}

function setCellOffset(cell) {
    cell.style.left = (15 + (15 + 81.25) * cell.x) + "px";
    cell.style.top = (15 + (15 + 81.25) * cell.y) + "px";
}

function appendCell(cell) {
    var field = document.getElementById("field");
    field.appendChild(cell);
}

function createField() {
    var x, y, cell;
    for(y = 0; y < 4; ++y) {
        for(x = 0; x < 4; ++x) {
            cell = createCell();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}

function createCellTiles() {
    var cell = document.createElement("div");
    cell.classList.add("field-cell", "field-cell-tile");
    return cell;
}

function createTiles() {
    var x, y, cell, n;
    for(y = 0; y < 4; ++y) {
        for(x = 0; x < 4; ++x) {
            n = y * 4 + x + 1;
            if (n < 16) {
            cell = createCell();
            cell.y = y;
            cell.x = x;
            cell.innerHTML = n;
            setCellOffset(cell);
            appendCell(cell);
            tiles.push(cell);
            }
        }
    }
}

function between(a,b,c) {
    return a<= c && c <= b || b <= c && c <= a;
}

createField();
createTiles();