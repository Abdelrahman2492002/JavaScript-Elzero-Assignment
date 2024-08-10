/*let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");
myElement.appendChild(myComment);
myElement.append(myText);

document.body.appendChild(myElement);
console.log(myElement);
*/

let mainDiv = document.createElement("div");
let h2Element = document.createElement("h2");
let pElement = document.createElement("p");

let h2Text = document.createTextNode("Product Heading");
let pText = document.createTextNode("Product Paragraph");

mainDiv.className = "product";
h2Element.appendChild(h2Text);
pElement.appendChild(pText);

mainDiv.appendChild(h2Element);
mainDiv.appendChild(pElement);

document.body.appendChild(mainDiv);

for (let i = 1; i <= 100; i++) {
  h2Text.textContent = "Product Heading " + i;
  pText.textContent = "Paragraph Text " + i;
  let clone = mainDiv.cloneNode(true);
  document.body.appendChild(clone);
}
