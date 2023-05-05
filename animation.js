const animateRightToLeft = document.querySelector('.img-beneficios');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateRightToLeft.classList.add('animate');
    } else {
      animateRightToLeft.classList.remove('animate');
    }
  });
});

observer.observe(animateRightToLeft);