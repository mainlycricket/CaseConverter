let textEditor = document.getElementById("text");
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");

upperCaseButton.addEventListener("click", function () {
    textEditor.value = textEditor.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", function () {
    textEditor.value = textEditor.value.toLowerCase();
});

properCaseButton.addEventListener("click", function () {
    const words = textEditor.value.toLowerCase().split(" ");
    let proper_words = [];
    for (let word of words) {
        proper_words.push(word[0].toUpperCase() + word.slice(1));
        }
    textEditor.value = proper_words.join(" ");
});

sentenceCaseButton.addEventListener("click", function () {
    textEditor.value = textEditor.value.toLowerCase();
    const lines = textEditor.value.toLowerCase().split(". ");
    let sentences = [];
    for (let line of lines) {
        line = line.trimLeft();
        sentences.push(line[0].toUpperCase() + line.slice(1));
    }
    textEditor.value = sentences.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}