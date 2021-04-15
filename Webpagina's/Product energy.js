var test;
var index = 0;

var slideShowArray = ['normal Blue fire','green apple Blue fire','grape Blue fire','rasberry Blue fire'];




window.onload = fuction()
    test = document.getElementById("test");
   setInterval(slideShow, 3500);



function slideShowArray(){
    test.style.backgroundImage = "url(img/" + slideShowArray[index] + ".png)";
    index++;
    if(index == slideShowArray.length){
      index = 0;
}
}
