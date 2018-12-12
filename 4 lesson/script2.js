var input = document.getElementById("field");
var result = document.getElementById("itog");
var button = document.getElementById("convert")

function toF()
{
    var sum = Number(input.value);
    result.value = 9/5 * sum + 32;
}

button.addEventListener("click", toF());