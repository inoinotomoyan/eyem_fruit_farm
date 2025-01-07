document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll("*");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const windowTop = window.pageYOffset;
    const windowBottom = windowTop + windowHeight;

    fadeElements.forEach((element) => {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const elementBottom = elementTop + element.offsetHeight;

      if (elementBottom > windowTop && elementTop < windowBottom) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // 初期表示チェック
});
