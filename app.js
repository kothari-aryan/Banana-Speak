var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler () {
    outputDiv.innerText = "asdfasda " + txtInput.value
};

btnTranslate.addEventListener("click", clickHandler);

// Calling Serer from Javascript
var url = "any server's url"

fetch(url)
// Converting response to json format
.then(response => response.json())
// Take the json format file and console it
.then(json => console.log(json))

// Uderstanding Arrow =>
fetch(url)
.then(function responseHandler(response) {return response.json() })
.then(function logJson(json) {console.log(json) })