const MENU = document.getElementById("menu");
const WRAP = document.getElementById("wrap");
const sliderLeft1 = document.getElementById("sliderLeft1");
const sliderRight1 = document.getElementById("sliderRight1");
const sliderLeft2 = document.getElementById("sliderLeft2");
const sliderRight2 = document.getElementById("sliderRight2");
const SLIDER = document.getElementById("slider");
const slide1 = document.getElementById("slide1");
const img = document.createElement("img");
const blackVertical = document.getElementById("blackVertical");
const blackHorisont = document.getElementById("blackHorisont");
const imgVerticalSquare = document.getElementById("imgVerticalSquare");
const imgHorizontalSquare = document.getElementById("imgHorisontalSquare");
const portfolioContainer = document.getElementById("portfolioContainer");
const MENUportolio = document.getElementById("menuPortfolio");
const allPortfolio = document.getElementById("allPortfolio");
const btnSubmit = document.getElementById("btnSubmit");
const registration = document.getElementById("registrationBlock");
const messageBlock = document.createElement("div");
const message = document.createElement("div");
const messageHeader = document.createElement("p");
const messageTopic = document.createElement("p");
const inputSubject = document.getElementById("inputSubject").value;
const inputTextarea = document.getElementById("inputTextarea").value;
const closeBtn = document.createElement("button");
const messageDescription = document.createElement("p");
const resultDescription = document.createElement("span");
const resultSubject = document.createElement("span");
const containerSlide1 = document.getElementById("containerSlide1");
const header = document.getElementById("header");
const headerWrap = document.getElementById("headerWrap");
const headerContent = document.getElementById("headerContent");
const headerNavigation = document.getElementById("headerNavigation");
const imgburger = document.getElementById("imgBurger");
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
let boxRandom12 = [];
let countClickArrow = 0;
let countVerticalPhone = 1;
let countHorizontalPhone = 1;
let countBurger = 90;
//header navigation

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("li>a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
  let currentWidth = document.documentElement.clientWidth;
  if (currentWidth < 768) imgBurger.click();
});

document.addEventListener("scroll", onScroll);
function onScroll(event) {
  currentPosition = window.scrollY;
  const links = document.querySelectorAll(".item_menu a");
  document.querySelectorAll("#wrap>section").forEach(el => {
    if (
      el.offsetTop <= currentPosition &&
      el.offsetTop + el.offsetTop > currentPosition
    ) {
      links.forEach(a => {
        a.classList.remove("active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}
//burger navigation
imgBurger.addEventListener("click", event => {
  event.target.style.transform = `rotate(${countBurger}deg)`;
  countBurger > 180 ? (countBurger = 0) : (countBurger += 90);
  if (countBurger === 0 || countBurger === 180) {
    header.style.height = "100%";
    header.style.width = "80%";
    headerContent.style.background = "#0008";
    headerContent.style.width = "100vw";
    headerContent.style.height = "100vh";
    headerWrap.style.display = "none";
    headerNavigation.style.display = "block";
  } else {
    header.style.height = " 66px";
    header.style.width = "100%";
    headerWrap.style.display = "block";
    headerContent.style.background = "";
    headerContent.style.width = "100%";
    headerContent.style.height = "66px";
    headerNavigation.style.display = "none";
  }
});

//slider
img.setAttribute("src", "./assets/img_singolo1/Slider.png");
img.className = "slide2";
sliderLeft1.addEventListener("click", event => {
  let interval = setInterval(function() {
    if (containerSlide1.style.left === "-1020px") {
      clearInterval(interval);
      return;
    } else {
      countClickArrow -= 20;
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
      countClickArrow += 20;
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
      countClickArrow -= 20;
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
      countClickArrow += 20;
      containerSlide1.style.left = `${countClickArrow}px`;
    }
  }, 1);
});

//black screen
imgVerticalSquare.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
imgHorisontalSquare.addEventListener("click", count => {
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

function buildImg(value) {
  let getRandomNumber = getRandom(12);

  for (let i = 0; i < value; i++) {
    let result = getRandomNumber();
    boxRandom12.push(result);
  }

  return boxRandom12;
}

function addImgRandom() {
  buildImg(12);
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

messageBlock.className = "message_block hidden";
messageBlock.setAttribute("id", "messageBlock");
registration.append(messageBlock);
message.setAttribute("id", "message");
message.className = "message";
messageBlock.append(message);
//header

messageHeader.innerText = "Письмо отправлено";
message.append(messageHeader);
//topic(subject)

messageTopic.innerText = "Без темы";
messageTopic.append(resultSubject);
message.append(messageTopic);

//textarea description

messageDescription.innerText = "Без описания";
messageDescription.append(resultDescription);
message.append(messageDescription);
//buttonOK

closeBtn.className = "closeBtn input_form";
closeBtn.innerText = "OK";
message.append(closeBtn);
btnSubmit.onclick = function checkForm() {
  const input = document.getElementById("inputUsername").value;
  const email = document.getElementById("inputEmail").value;
  const inputSubject = document.getElementById("inputSubject").value;
  const inputTextarea = document.getElementById("inputTextarea").value;
  if (input && email) {
    messageTopic.innerText = inputSubject
      ? `Тема:  ${inputSubject}`
      : "Без темы";
    messageDescription.innerText = inputTextarea
      ? `Описание:  ${inputTextarea}`
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
