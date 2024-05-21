const red = document.getElementsById("red-watch");
const blue = document.getElementsByClassName("troca-cor-azul");
const black = document.getElementsByClassName("troca-cor-preto");

const changeImg = (ColorChanging = () => {
  const redWatch = document.getElementsById("red-watch");
  const blueWatch = document.getElementsByClassName("troca-cor-azul");
  const blackWatch = document.getElementsByClassName("troca-cor-preto");

  if (red.click === true) {
    redWatch.src = "./assets/Apple Watch Vermelho.webp";
  }

  if (blue.click === true) {
    blueWatch.src = "./assets/Apple Azul.webp";
  }

  if (black.click === true) {
    blackWatch.src = "./assets/Apple Watch Preto.webp";
  }
});

red.addEventListener("click");
blue.addEventListener("click");
black.addEventListener("click");
