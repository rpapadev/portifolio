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