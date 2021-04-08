var test;
var slideShowArray = ['grape', 'normaal', 'green apple', 'rasberry'];
var index = 0;

window.onload = function(){
    test = document.getElementById("test");
    setInterval(slideShow, 3500);
}

function slideShow(){
    test.style.backgroundImage = "url(img/" + slideShowArray[index] + ".jpg)";
    index++; 
    if(index == slideShowArray.length){
        index = 0;
    }
}