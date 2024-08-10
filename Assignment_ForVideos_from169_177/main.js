let myRequest = new XMLHttpRequest();
myRequest.open("Get", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let content;
    for (let i = 0; i < mainData.length; i++) {
      mainData[i]["article name"] = "all";
      content = `<div id="data">
        <div>
          <h2>${mainData[i].id}</h2>
          <p>${mainData[i].article}</p>
          <p>${mainData[i]["article name"]}</p>
          <p>${mainData[i]["article content"]} </p>
        </div>
      </div>`;
      document.body.innerHTML += content;
    }

    let updatedData = JSON.stringify(mainData);
  }
  console.log("Data Loaded");
};
