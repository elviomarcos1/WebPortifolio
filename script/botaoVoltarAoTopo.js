    const btn = document.querySelector('.botao-voltar-ao-topo');

    // Mostrar botão quando rolar 200px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1650) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    // Ao clicar, rolar suavemente para o topo
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });