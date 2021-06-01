serverURL = "https://api.funtranslations.com/translate/doge.json";

const button = document.querySelector("button");
const inputText = document.querySelector("#text-area");
const outputDiv = document.querySelector(".output");
const getURL = (text) => {
  return serverURL + "?text=" + text;
};

const errHandler = (err) => {
  alert("Something went wrong! " + err);
};

const clickHandler = () => {
  let textInput = inputText.value;

  //contacting with api
  fetch(getURL(textInput))
    .then((res) => res.json())
    .then((data) => {
      outputDiv.innerText = data.contents.translated;
    })
    .catch(errHandler);
};

button.addEventListener("click", clickHandler);
