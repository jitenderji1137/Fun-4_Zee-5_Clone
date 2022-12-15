
let data = fetch("https://jitenderji1137.github.io/zee5apidata/Funapidata.json")
.then((data)=>{
   return data.json();
}).then((fetchdata)=>{
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
}).catch(()=>{
         
});
function divinside(data){
let divone = document.getElementById("firstdiv");
    for(let a = 0;a<data.length;a++){
        // console.log(data[a].image);
        if(data[a].topwebseries == "yes"){
        let div1 = document.createElement("div");
        let link = document.createElement("a");
        link.setAttribute("href",data[a].link);
        let image = document.createElement("img");
        image.setAttribute("src",data[a].image);
        let div2 = document.createElement("div");
        div2.setAttribute("id","imagecontant");
        // let h1 = document.createElement("h1");
        // h1.innerText = data[a].name;
        let div3 = document.createElement("div");
        let btns1 = document.createElement("button");
        // btns1.innerText = "WATCH";
        let watchlink = document.createElement("a");
        watchlink.setAttribute("href",data[a].link);
        watchlink.innerText="WATCH";
        let btns2 = document.createElement("button");
        btns2.innerText = "SHARE";
        btns1.append(watchlink);
        div3.append(btns1,btns2)
        div2.append(div3);
        link.append(image);
        div1.append(link,div2);
        divone.append(div1);
        }
    }
}
function div1inside(data){
    let divone = document.getElementById("seconddiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].mustwatchwebseries == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div2inside(data){
    let divone = document.getElementById("thirddiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].nailbitthril == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div3inside(data){
    let divone = document.getElementById("fourthdiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].spark == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div4inside(data){
    let divone = document.getElementById("fifthdiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].mostwatchwebseries == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div5inside(data){
    let divone = document.getElementById("sixdiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].actionpacked == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div6inside(data){
    let divone = document.getElementById("sevendiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].crimefictionlovers == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}
function div7inside(data){
    let divone = document.getElementById("eightdiv");
        for(let a = 0;a<data.length;a++){
            // console.log(data[a].image);
            if(data[a].superstartvshow == "yes"){
            let div1 = document.createElement("div");
            let link = document.createElement("a");
            link.setAttribute("href",data[a].link);
            let image = document.createElement("img");
            image.setAttribute("src",data[a].image);
            let div2 = document.createElement("div");
            div2.setAttribute("id","imagecontant");
            // let h1 = document.createElement("h1");
            // h1.innerText = data[a].name;
            let div3 = document.createElement("div");
            let btns1 = document.createElement("button");
            // btns1.innerText = "WATCH";
            let watchlink = document.createElement("a");
            watchlink.setAttribute("href",data[a].link);
            watchlink.innerText="WATCH";
            let btns2 = document.createElement("button");
            btns2.innerText = "SHARE";
            btns1.append(watchlink);
            div3.append(btns1,btns2)
            div2.append(div3);
            link.append(image);
            div1.append(link,div2);
            divone.append(div1);
        }
    }
}