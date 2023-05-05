const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const seta = header.querySelector('.seta');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        seta.classList.toggle('rotacionado');
        if (item.classList.contains('active')) {
            setTimeout(() => {
                content.style.display = 'block';
            }, 200); // Define o mesmo atraso de 0,2 segundos definido na classe .accordion-item.active .accordion-content
        } else {
          content.style.display = 'none';
      }
    });
});

