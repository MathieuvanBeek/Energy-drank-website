window.onclick = function(element){

    document.getElementById('drop-nav').onclick = function(){
        var menu = document.getElementById('menu');
        console.log(element.target.id);
        if(element.target.id == document.getElementById('drop-nav').id){
        if(menu.style.display == 'none'){
            menu.style.display = "flex";
        }else{
            menu.style.display = 'none'
        }
    }
}
}
