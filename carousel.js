let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0; 
  } else if (index < 0) {
    currentIndex = totalSlides - 1; 
  } else {
    currentIndex = index; 
  }

  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`; 

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  if (currentIndex < slides.length - 1) {
    
    showSlide(currentIndex + 1);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    
    showSlide(currentIndex - 1);
  }
}

function currentSlide(index) {
  showSlide(index);
}


