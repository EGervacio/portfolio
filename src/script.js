 const backToTopBtn = document.getElementById("backToTopBtn");

    // Actualiza la posición del botón al desplazarse
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Mostrar el botón cuando nos desplazamos más de 300px
      if (scrollY > 500) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.transform = `translateY(${scrollY}px)`;
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // Función para desplazarse al inicio
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }