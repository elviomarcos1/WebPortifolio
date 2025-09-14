    const btn = document.querySelector('.botao-voltar-ao-topo');

    window.addEventListener("scroll", () => {
      if (window.scrollY > 1650) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
