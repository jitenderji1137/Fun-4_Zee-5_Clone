var button = document.getElementById('onerightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('firstdiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('oneleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('firstdiv');
    sideScroll(container,'left',5,500,10);
};
var button = document.getElementById('secondrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('seconddiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('secondleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('seconddiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('thirdrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('thirddiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('thirdleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('thirddiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('fourrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('fourthdiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('fourleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('fourthdiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('fiverightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('fifthdiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('fiveleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('fifthdiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('sixrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('sixdiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('sixleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('sixdiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('sevenrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('sevendiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('sevenleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('sevendiv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('eightrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('eightdiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('eightleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('eightdiv');
    sideScroll(container,'left',5,500,10);
};




var button = document.getElementById('ninerightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('ninediv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('nineleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('ninediv');
    sideScroll(container,'left',5,500,10);
};



var button = document.getElementById('tenrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('tendiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('tenleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('tendiv');
    sideScroll(container,'left',5,500,10);
};


var button = document.getElementById('elevenrightscrollbtn');
button.onclick = function () {
    var container = document.getElementById('elevendiv');
    sideScroll(container,'right',5,500,10);
};

var back = document.getElementById('elevenleftscrollbtn');
back.onclick = function () {
    var container = document.getElementById('elevendiv');
    sideScroll(container,'left',5,500,10);
};
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}