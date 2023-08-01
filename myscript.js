function typeWriter() {
    let i = 0;
    let j = 0;
    const messages = ["Fácil", "Rápido", "Prático"];
    const speed = 100; // Velocidade em milissegundos
  
    function type() {
      if (i < messages[j].length) {
        document.getElementById("message").innerHTML += messages[j].charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, speed);
      }
    }
  
    function erase() {
      if (i >= 0) {
        let newText = messages[j].substring(0, i);
        document.getElementById("message").innerHTML = newText;
        i--;
        setTimeout(erase, speed);
      } else {
        j++;
        if (j >= messages.length) {
          j = 0;
        }
        setTimeout(type, 500); // Tempo de espera de 2 segundos
      }
    }
  
    type();
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

function validateForm() {
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      alert("Por favor, preencha todos os campos antes de enviar o e-mail.");
      return false; // Impede o envio do formulário
  }

  return true;
}