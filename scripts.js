const redButton1 = document.getElementById("red-button-watch-1");
const blueButton1 = document.getElementById("blue-button-watch-1");
const blackButton1 = document.getElementById("black-button-watch-1");
const redButton2 = document.getElementById("red-button-watch-2");
const blueButton2 = document.getElementById("blue-button-watch-2");
const blackButton2 = document.getElementById("black-button-watch-2");
const redButton3 = document.getElementById("red-button-watch-3");
const blueButton3 = document.getElementById("blue-button-watch-3");
const blackButton3 = document.getElementById("black-button-watch-3");
const redButton4 = document.getElementById("red-button-book-1");
const blueButton4 = document.getElementById("blue-button-book-1");
const blackButton4 = document.getElementById("black-button-book-1");
const redButton5 = document.getElementById("red-button-book-2");
const blueButton5 = document.getElementById("blue-button-book-2");
const blackButton5 = document.getElementById("black-button-book-2");
const redButton6 = document.getElementById("red-button-book-3");
const blueButton6 = document.getElementById("blue-button-book-3");
const blackButton6 = document.getElementById("black-button-book-3");

const changePhoto1 = () => {
  const firstContainerImg = document.getElementById("watch-1");

  if ((redButton1.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Vermelho.webp";
  }
};

const changePhoto2 = () => {
  const firstContainerImg = document.getElementById("watch-1");
  if ((blueButton1.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Azul.webp";
  }
};

const changePhoto3 = () => {
  const firstContainerImg = document.getElementById("watch-1");
  if ((blackButton1.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Preto .jpg";
  }
};

const changePhoto4 = () => {
  const firstContainerImg = document.getElementById("watch-2");

  if ((redButton2.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Vermelho.webp";
  }
};

const changePhoto5 = () => {
  const firstContainerImg = document.getElementById("watch-2");
  if ((blueButton2.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Azul.webp";
  }
};

const changePhoto6 = () => {
  const firstContainerImg = document.getElementById("watch-2");
  if ((blackButton2.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Preto.webp";
  }
};

const changePhoto7 = () => {
  const firstContainerImg = document.getElementById("watch-3");

  if ((redButton3.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Vermelho.webp";
  }
};

const changePhoto8 = () => {
  const firstContainerImg = document.getElementById("watch-3");
  if ((blueButton3.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch Azul.webp";
  }
};
const changePhoto9 = () => {
  const firstContainerImg = document.getElementById("watch-3");
  if ((blackButton3.click = true)) {
    firstContainerImg.src = "./assets/Apple Watch preto.webp";
  }
};

const changePhoto10 = () => {
  const firstContainerImg = document.getElementById("mackbook-1");

  if ((redButton4.click = true)) {
    firstContainerImg.src = "./assets/mackbook-vermelho.webp";
  }
};

const changePhoto11 = () => {
  const firstContainerImg = document.getElementById("mackbook-1");
  if ((blueButton4.click = true)) {
    firstContainerImg.src = "./assets/mackbook-azul.jpg";
  }
};

const changePhoto12 = () => {
  const firstContainerImg = document.getElementById("mackbook-1");
  if ((blackButton4.click = true)) {
    firstContainerImg.src = "./assets/mackbook-preto.jpg";
  }
};

const changePhoto13 = () => {
  const firstContainerImg = document.getElementById("mackbook-2");

  if ((redButton5.click = true)) {
    firstContainerImg.src = "./assets/mackbook-vermelho.webp";
  }
};

const changePhoto14 = () => {
  const firstContainerImg = document.getElementById("mackbook-2");
  if ((blueButton5.click = true)) {
    firstContainerImg.src = "./assets/mackbook-azul.jpg";
  }
};

const changePhoto15 = () => {
  const firstContainerImg = document.getElementById("mackbook-2");
  if ((blackButton5.click = true)) {
    firstContainerImg.src = "./assets/mackbook-preto.jpg";
  }
};

const changePhoto16 = () => {
  const firstContainerImg = document.getElementById("mackbook-3");

  if ((redButton6.click = true)) {
    firstContainerImg.src = "./assets/mackbook-vermelho.webp";
  }
};

const changePhoto17 = () => {
  const firstContainerImg = document.getElementById("mackbook-3");
  if ((blueButton6.click = true)) {
    firstContainerImg.src = "./assets/mackbook-azul.jpg";
  }
};

const changePhoto18 = () => {
  const firstContainerImg = document.getElementById("mackbook-3");
  if ((blackButton6.click = true)) {
    firstContainerImg.src = "./assets/mackbook-preto.jpg";
  }
};

redButton1.addEventListener("click", changePhoto1);
blueButton1.addEventListener("click", changePhoto2);
blackButton1.addEventListener("click", changePhoto3);
redButton2.addEventListener("click", changePhoto4);
blueButton2.addEventListener("click", changePhoto5);
blackButton2.addEventListener("click", changePhoto6);
redButton3.addEventListener("click", changePhoto7);
blueButton3.addEventListener("click", changePhoto8);
blackButton3.addEventListener("click", changePhoto9);
redButton4.addEventListener("click", changePhoto10);
blueButton4.addEventListener("click", changePhoto11);
blackButton4.addEventListener("click", changePhoto12);
redButton5.addEventListener("click", changePhoto13);
blueButton5.addEventListener("click", changePhoto14);
blackButton5.addEventListener("click", changePhoto15);
redButton6.addEventListener("click", changePhoto16);
blueButton6.addEventListener("click", changePhoto17);
blackButton6.addEventListener("click", changePhoto18);
