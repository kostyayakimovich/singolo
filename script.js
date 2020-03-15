const MENU = document.getElementById("menu");
const sliderLeft1 = document.getElementById("sliderLeft1");
const sliderRight1 = document.getElementById("sliderRight1");
const sliderLeft2 = document.getElementById("sliderLeft2");
const sliderRight2 = document.getElementById("sliderRight2");
const SLIDER = document.getElementById("slider");
const slide1 = document.getElementById("slide1");
const img = document.createElement("img");
const blackVertical = document.getElementById("blackVertical");
const blackHorisont = document.getElementById("blackHorisont");
const imgVertical = document.getElementById("imgVertical");
const imgHorizontal = document.getElementById("imgHorizontal");
const portfolioContainer = document.getElementById("portfolioContainer");
const MENUportolio = document.getElementById("menuPortfolio");
const allPortfolio = document.getElementById("allPortfolio");
const imgPortfolioBox = [
  { name: "design1", src: "./assets/img_portfolio/ship.jpg" },
  { name: "design2", src: "./assets/img_portfolio/princess.jpg" },
  { name: "design3", src: "./assets/img_portfolio/city.jpg" },
  { name: "design4", src: "./assets/img_portfolio/robotlove.jpg" },
  { name: "design5", src: "./assets/img_portfolio/monster_group.jpg" },
  { name: "design6", src: "./assets/img_portfolio/ide.jpg" },
  { name: "design7", src: "./assets/img_portfolio/monster_plus.jpg" },
  { name: "design8", src: "./assets/img_portfolio/birds.jpg" },
  { name: "design9", src: "./assets/img_portfolio/green_monster.jpg" },
  { name: "design10", src: "./assets/img_portfolio/video_recorder.jpg" },
  { name: "design11", src: "./assets/img_portfolio/white_monster.jpg" },
  { name: "design11", src: "./assets/img_portfolio/degree.jpg" }
];
let countClickArrow = 0;
let countClickArrow2 = 0;
let countVerticalPhone = 1;
let countHorizontalPhone = 1;
//const clickLeftArrow;
//const clickRightArrow;
img.setAttribute("src", "./assets/img_singolo1/Slider.png");
img.className = "slide2";

//SLIDER.append(img);
//header navigation
MENU.addEventListener("click", event => {
  MENU.querySelectorAll("li>a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});
//slider

const containerSlide2 = document.getElementById("containerSlide2");
const containerSlide1 = document.getElementById("containerSlide1");
sliderLeft1.addEventListener("click", event => {
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "-1020px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow--;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});
sliderRight1.addEventListener("click", event => {
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "1020px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow++;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});
sliderLeft2.addEventListener("click", event => {
  containerSlide1.style.left = "1020px";

  countClickArrow = 1020;
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "0px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow--;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});
sliderLeft2.addEventListener("click", event => {
  containerSlide1.style.left = "1020px";

  countClickArrow = 1020;
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "0px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow--;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});
sliderLeft2.addEventListener("click", event => {
  containerSlide1.style.left = "1020px";

  countClickArrow = 1020;
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "0px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow--;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});
sliderRight2.addEventListener("click", event => {
  containerSlide1.style.left = "-1020px";

  countClickArrow = -1020;
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "0px") {
      clearInterval(interval);

      return;
    } else {
      countClickArrow++;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});

//black screen
imgVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
imgHorizontal.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none")
    : (blackHorisont.style.display = "inline-block");
});
blackVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
blackHorisont.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none")
    : (blackHorisont.style.display = "inline-block");
});
//portfolio img

function paintImg(index) {
  let imgPortfolio = document.createElement("img");
  imgPortfolio.className = "img_portfolio active";
  imgPortfolio.setAttribute("src", imgPortfolioBox[index].src);
  portfolioContainer.append(imgPortfolio);
}
function addOrderImg() {
  for (let i = 0; i < imgPortfolioBox.length; i++) {
    paintImg(i);
  }
}
addOrderImg();
function getRandom(max) {
  const data = [];
  return function randomNumber() {
    const number = Math.floor(Math.random() * Math.floor(max));

    if (data.length >= max) {
      return;
    }
    if (data.includes(number)) {
      return randomNumber();
    }
    data.push(number);

    return number;
  };
}
let boxRandom12 = [];

function buildCard(value) {
  let getRandomNumber = getRandom(12);

  for (let i = 0; i < value; i++) {
    let result = getRandomNumber();
    boxRandom12.push(result);
  }

  return boxRandom12;
}

function addImgRandom() {
  buildCard(12);

  for (let i = 0; i < boxRandom12.length; i++) {
    paintImg(boxRandom12[i]);
  }
}

//navigation portfolio

MENUportolio.addEventListener("click", event => {
  MENUportolio.querySelectorAll("li").forEach(el => {
    el.classList.remove("active");
  });
  event.target.classList.add("active");

  portfolioContainer.innerHTML = "";
  boxRandom12 = [];
  addImgRandom();
});

portfolioContainer.addEventListener("click", event => {
  portfolioContainer.querySelectorAll("img").forEach(el => {
    el.classList.remove("active_portfolio_img");
  });
  event.target.classList.add("active_portfolio_img");
});
// form
const btnSubmit = document.getElementById("btnSubmit");

const messageBlock = document.createElement("div");
messageBlock.className = "message_block hidden";
messageBlock.setAttribute("id", "messageBlock");
const registration = document.getElementById("registrationBlock");
registration.append(messageBlock);
const message = document.createElement("div");
message.setAttribute("id", "message");
message.className = "message";
messageBlock.append(message);
//header
const messageHeader = document.createElement("p");
messageHeader.innerText = "Письмо отправлено";
message.append(messageHeader);
//topic(subject)
const messageTopic = document.createElement("p");
messageTopic.innerText = "Без темы";
const resultSubject = document.createElement("span");
messageTopic.append(resultSubject);
message.append(messageTopic);

//textarea description
const messageDescription = document.createElement("p");
messageDescription.innerText = "Без описания";
const resultDescription = document.createElement("span");
messageDescription.append(resultDescription);
message.append(messageDescription);
//buttonOK
const closeBtn = document.createElement("button");
closeBtn.className = "closeBtn input_form";
closeBtn.innerText = "OK";
message.append(closeBtn);
const inputSubject = document.getElementById("inputSubject").value;
const inputTextarea = document.getElementById("inputTextarea").value;

btnSubmit.onclick = function checkForm() {
  const input = document.getElementById("inputUsername").value;
  const email = document.getElementById("inputEmail").value;
  const inputSubject = document.getElementById("inputSubject").value;
  const inputTextarea = document.getElementById("inputTextarea").value;

  if (input && email) {
    messageTopic.innerText = inputSubject
      ? `Тема: ${inputSubject}`
      : "Без темы";
    messageDescription.innerText = inputTextarea
      ? `Описание: ${inputTextarea}`
      : "Без описания";
  } else {
    return true;
  }
  document.getElementById("messageBlock").classList.remove("hidden");

  return false;
};

closeBtn.addEventListener("click", () => {
  messageTopic.innerText = "";
  messageDescription.innerText = "";
  document.getElementById("messageBlock").classList.add("hidden");
  document.getElementById("inputUsername").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputSubject").value = "";
  document.getElementById("inputTextarea").value = "";
});
