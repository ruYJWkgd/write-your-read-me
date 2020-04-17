var commonmark = require("../commonmark.js");

const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const converter = new commonmark.HtmlRenderer();
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

const renderPreview = (value) => {
  //converter.HtmlRenderer(value);
  //preview.innerHTML = html;
  parsed = reader.parse(value); // parsed is a 'Node' tree
  // transform parsed if you like...
  result = writer.render(parsed); // result is a String
  preview.innerHTML = result;
};

textEditor.addEventListener("keyup", (evt) => {
  const { value } = evt.target;

  window.localStorage.setItem("markdown", value);
  //const html = converter(value);
  //parsed = reader.parse(value);
  //result = writer.render(parsed);

  renderPreview(value);
});

const storedMarkdown = window.localStorage.getItem("markdown");

if (storedMarkdown) {
  textEditor.value = storedMarkdown;
  renderPreview(storedMarkdown);
}
