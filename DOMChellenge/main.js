document.body.style.cssText =
  "font-family: Tahoma,Arial; background-color: #f5f5f5; margin: 0;";

//===================================Make Header============================================//

const headerElement = document.createElement("header");
headerElement.className = "webSite-header";
headerElement.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; background-color: white; padding: 10px 40px";

// Make Logo
const h2LogoElement = document.createElement("h2");
const logoText = document.createTextNode("Elzero");
h2LogoElement.className = "webSite-logo";
h2LogoElement.style.cssText = "font-size: 22px; color: #4caf6c";
h2LogoElement.appendChild(logoText);
headerElement.appendChild(h2LogoElement);

// Make ul
const linksElements = document.createElement("ul");
linksElements.className = "webSite-links";
linksElements.style.cssText =
  "list-style: none; display: flex; gap: 10px;align-items: center; justify-content: center;";
headerElement.appendChild(linksElements);

// Make fubction to make li Elements
const createLinkElement = (text) => {
  const linkElement = document.createElement("li");
  linkElement.className = "webSite-link";

  Object.assign(linkElement.style, {
    listStyle: "none",
    color: "#8a8484",
  });

  const linkElementText = document.createTextNode(text);
  linkElement.appendChild(linkElementText);

  return linkElement;
};

const linkText = ["Home", "About", "Service", "Contact"];
linkText.forEach((text) => {
  const linkElement = createLinkElement(text);
  linksElements.appendChild(linkElement);
});

document.body.appendChild(headerElement);

//===================================Make Content============================================//

const divContent = document.createElement("div");
divContent.className = "webSite-content";
divContent.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px , 1fr)); gap: 15px; margin: 20px";

for (let i = 1; i <= 15; i++) {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.style.cssText =
    "background-color: white; padding: 40px; display: flex; flex-direction: column; align-items: center;gap: 10px;";

  const productNumber = document.createElement("span");
  productNumber.style.fontSize = "25px";
  productNumber.textContent = i;

  const productName = document.createElement("span");
  productName.style.color = "#8a8484";
  productName.textContent = "product";

  productDiv.appendChild(productNumber);
  productDiv.appendChild(productName);
  divContent.appendChild(productDiv);
}

document.body.appendChild(divContent);

//===================================Footer Content============================================//

const footerElement = document.createElement("div");
const footerText = document.createTextNode("Copyright 2021");
footerElement.className = "footer";

footerElement.style.cssText =
  "background-color: #4caf6c; color: white; padding: 20px 0; text-align: center; font-size: 30px";

footerElement.appendChild(footerText);
document.body.appendChild(footerElement);
