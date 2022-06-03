var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURl + "?" + "text=" + text
}

function clickHandler () {
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json)
        .then(json => console.log(json.contents.translated))
};

btnTranslate.addEventListener("click", clickHandler);