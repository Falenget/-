var optionsIterator;
var options = [];
var QCounter = 0, correct = 0;
var container = document.getElementById("container");
var question = document.getElementById("questions");

function load() {
    question.innerHTML = questions[QCounter].text;
    for (optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
        options[optionsIterator].innerHTML = questions[QCounter].options[optionsIterator];
    }
}

function proceed(event) {
    var index = event.target.index;
    if (questions[QCounter].correct == index) {
        correct++;
    }
    QCounter++;
    if (QCounter == questions.length) {
        document.body.innerHTML = "<h1>Правильных ответов: " + correct + "/" + questions.length + "</h1>";
    } else {
        load();
    }
}

for (optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
    var option = document.createElement("div");
    option.classList.add("panel", "panel_option");
    option.index = optionsIterator;
    option.addEventListener("click", proceed);
    container.appendChild(option);
    options.push(option);
}

load();