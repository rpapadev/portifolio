var loop = true;
var i = 0, text;
text = "Praticidade, sem dor de cabeça!"

function typing(){
        if (i < text.length) {
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,50);
        }
}

function showhide(){
    var menuBtn = document.querySelector('.items-menu-mobile i');
    menuBtn.addEventListener('click',()=>{
        let itemsMenu = document.querySelector('.menu-mobile');
        if (itemsMenu.classList.contains('show')) {
            itemsMenu.classList.remove('show');
            itemsMenu.classList.add('hide');
        }else{
            itemsMenu.classList.remove('hide');
            itemsMenu.classList.add('show');
        }
    })
}