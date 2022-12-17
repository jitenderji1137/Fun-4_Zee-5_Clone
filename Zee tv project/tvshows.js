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


let slidedata = fetch(
  "https://jitenderji1137.github.io/zee5apidata/homepageslidingimage.json"
)
  .then((slie) => {
    return slie.json();
  })
  .then((data) => {
    console.log(data);
    homeslide(data);
  })
  .catch(() => {});
function homeslide(data) {
  for (let a = 7; a <14 ; a++) {
    if (a === 7) {
      let image = document.getElementById("slideimageone");
      let text = document.getElementById("textone");
      image.setAttribute("src", data[a].img1);
      text.innerText = data[a].title;
    } else if (a === 8) {
      let image1 = document.getElementById("slideimagetwo");
      let text1 = document.getElementById("texttwo");
      image1.setAttribute("src", data[a].img1);
      text1.innerText = data[a].title;
    } else if (a === 9) {
      let image2 = document.getElementById("slideimagethree");
      let text2 = document.getElementById("textthree");
      image2.setAttribute("src", data[a].img1);
      text2.innerText = data[a].title;
    } else if (a === 10) {
      let image3 = document.getElementById("slideimagefour");
      let text3 = document.getElementById("textfour");
      image3.setAttribute("src", data[a].img1);
      text3.innerText = data[a].title;
    } else if (a === 11) {
      let image4 = document.getElementById("slideimagefive");
      let text4 = document.getElementById("textfive");
      image4.setAttribute("src", data[a].img1);
      text4.innerText = data[a].title;
    } else if (a === 12) {
      let image5 = document.getElementById("slideimagesix");
      let text5 = document.getElementById("textsix");
      image5.setAttribute("src", data[a].img1);
      text5.innerText = data[a].title;
    } else if (a === 13) {
      let image6 = document.getElementById("slideimageseven");
      let text6 = document.getElementById("textseven");
      image6.setAttribute("src", data[a].img1);
      text6.innerText = data[a].title;
    }
  }
}


let data = fetch("https://jitenderji1137.github.io/zee5apidata/Funapidata.json")
  .then((data) => {
    return data.json();
  })
  .then((fetchdata) => {
    //    console.log(fetchdata);
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
    if (data[a].zeetvshow == "yes") {
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
    if (data[a].zeepunjabishow == "yes") {
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
    if (data[a].popularfreetvshow == "yes") {
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
    if (data[a].andtvshow == "yes") {
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
    if (data[a].romanticshow == "yes") {
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
    if (data[a].watchagainontvzeetv == "yes") {
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
    if (data[a].horershow == "yes") {
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
