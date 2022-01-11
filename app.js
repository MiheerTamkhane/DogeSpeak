//url of api
const serverURL = "https://api.funtranslations.com/translate/doge.json";

const button = document.querySelector("button");
const inputText = document.querySelector("#text-area");
const outputDiv = document.querySelector(".output");

// getURL fuction which adds user input to url.
const getURL = (text) => serverURL + "?text=" + text;

// error fuction
const errHandler = (err) => {
  alert("Something went wrong! " + err);
};

// fuction which retrives data from api
const clickHandler = () => {
  let textInput = inputText.value;
  //contacting with api
  fetch(getURL(textInput))
    .then((res) => res.json())
    .then((data) => (outputDiv.innerText = data.contents.translated))
    .catch(errHandler);
};

// Event handlers
button.addEventListener("click", clickHandler);
