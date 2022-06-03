var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURl + "?" + "text=" + text
}

// Do this is error occurs in fetching URL
function errorHandler(error) {
    console.log("error occured:", error)
}

function clickHandler () {
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json)
        .then(json => console.log(json.contents.translated))
        // If error happens call this function
        .catch(errorHandler)
};

// Inside Catch Code

// function catch(callbackfn) {
    // do something...
    // more something...
    // callbackfn(error)
// };

btnTranslate.addEventListener("click", clickHandler);