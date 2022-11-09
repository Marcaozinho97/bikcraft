//menu mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".header-mobile",
    ".header-menu",
    ".header-menu li",
  );
  mobileNavbar.init();

  //ativar itens do orçamento
  const parametros = new URLSearchParams(location.search); 
  
  function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento){
      elemento.checked = true;
    }
  }
  
  parametros.forEach(ativarProduto);

  //perguntas frequentes

  const perguntas = document.querySelectorAll('.perguntas button');

  function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute('aria-expanded', ativa);
  }

  function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
  }

  perguntas.forEach(eventosPerguntas);

  //galeria de imagens
  const galeria = document.querySelectorAll('.bicicleta-imagens img');
  const galeriaContainer = document.querySelector('.bicicleta-imagens');

  function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width:1000px)').matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  }
  
  function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
  }

  galeria.forEach(eventosGaleria);

  //animação
  if(window.SimpleAnime){
  new SimpleAnime();
}