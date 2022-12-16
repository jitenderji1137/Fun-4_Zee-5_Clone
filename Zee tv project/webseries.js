function searchbox() {
  location.href = "/search.html";
}
let locallogin = localStorage.getItem("logindata");
let buttendata = document.getElementById("login-logout-button");
if (locallogin == null) {
  buttendata.innerText = "Login";
} else {
  buttendata.innerText = "Logout";
}
buttendata.addEventListener("click", () => {
  if (locallogin == null) {
    location.href = "/Login.html";
  } else {
    localStorage.clear();
    location.href = "/index.html";
  }
});
let data = fetch("https://jitenderji1137.github.io/zee5apidata/Funapidata.json")
  .then((data) => {
    return data.json();
  })
  .then((fetchdata) => {
    console.log(fetchdata);
    divinside(fetchdata);
    div1inside(fetchdata);
    div2inside(fetchdata);
    div3inside(fetchdata);
    div4inside(fetchdata);
    div5inside(fetchdata);
    div6inside(fetchdata);
    div7inside(fetchdata);
    div8inside(fetchdata);
    div9inside(fetchdata);
    div10inside(fetchdata);
  })
  .catch(() => {});
function divinside(data) {
  let divone = document.getElementById("firstdiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].topwebseries == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div1inside(data) {
  let divone = document.getElementById("seconddiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].mustwatchwebseries == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div2inside(data) {
  let divone = document.getElementById("thirddiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].nailbitthril == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div3inside(data) {
  let divone = document.getElementById("fourthdiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].spark == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div4inside(data) {
  let divone = document.getElementById("fifthdiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].mostwatchwebseries == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div5inside(data) {
  let divone = document.getElementById("sixdiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].actionpacked == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div6inside(data) {
  let divone = document.getElementById("sevendiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].crimefictionlovers == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
function div7inside(data) {
  let divone = document.getElementById("eightdiv");
  let count = 0;
  for (let a = 0; a < data.length; a++) {
    // console.log(data[a].image);
    if (count >= 20) {
      break;
    }
    if (data[a].superstartvshow == "yes") {
      count++;
      let div1 = document.createElement("div");
      let link = document.createElement("a");
      link.setAttribute("href", data[a].link);
      let image = document.createElement("img");
      image.setAttribute("src", data[a].image);
      let div2 = document.createElement("div");
      div2.setAttribute("id", "imagecontant");
      // let h1 = document.createElement("h1");
      // h1.innerText = data[a].name;
      let div3 = document.createElement("div");
      let btns1 = document.createElement("button");
      // btns1.innerText = "WATCH";
      let watchlink = document.createElement("a");
      watchlink.setAttribute("href", data[a].link);
      watchlink.innerText = "WATCH";
      let btns2 = document.createElement("button");
      btns2.innerText = "SHARE";
      btns1.append(watchlink);
      div3.append(btns1, btns2);
      div2.append(div3);
      link.append(image);
      div1.append(link, div2);
      divone.append(div1);
    }
  }
}
