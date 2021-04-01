var button;

var blikjes = ['woody','rex','buzz','slinky','Mr. potatohead'];

window.onload = fuction(){
    test = document.getElementById("test");
    button = document.getElementById("readArray");
    berekening();
    button.onclick = function(){
        getArrayForEach();
    }

}

fuction getArrayFor(){
    for(var index = 0; index < blikjes.length; index++){
        test.innerHTML += blikjes[index] + index+ "<br>";
    }
}
function getArrayForEach(){
    for(var smaken of blikjes){
        test.innerHTML += smaken + "<br>";
    }
}