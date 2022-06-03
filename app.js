var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured:", error)
    alert("Something went wrong try again after some time")
}

function clickHandler () {
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            // showing output in website output box
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        // If error happens call this function
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);