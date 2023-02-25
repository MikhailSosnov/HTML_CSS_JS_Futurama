let futuramaV = document.getElementById("futurama1");
// let futuramaV = document.querySelector("#futurama1");
// let futuramaV = document.querySelectorAll(".futurama1")[0];

futuramaV.addEventListener("mouseenter", function () {
  futuramaV.textContent = "Do you want fly? Press this!";
});

futuramaV.addEventListener("mouseleave", function () {
  futuramaV.textContent = "Oh, you are still here?";
});

document.querySelectorAll(".demo")[0].style.display = "none";

function show() {
  document.querySelectorAll(".demo")[0].style.display = "block";
}

function hide() {
  document.querySelectorAll(".demo")[0].style.display = "none";
}

// function heightScreen() {
//   let height = String(window.innerHeight) + "px";
//   return height;
// }

function widthScreen() {
  let width = String(window.innerWidth) + "px";
  return width;
}

// document.querySelectorAll(".demo")[0].img.style.width = widthScreen();

document.querySelector("#button_form").onclick = function () {
  var name = document.querySelector("#name").value;
  let outputName = document.querySelector("#outputName");
  outputName.innerHTML = name;

  var email = document.querySelector("#email").value;
  let outputEmail = document.querySelector("#outputEmail");
  outputEmail.innerHTML = email;

  var age = document.querySelector("#age").value;
  let outputAge = document.querySelector("#outputAge");
  outputAge.innerHTML = String(age);

  var spezialization = document.querySelector("#spezialization").value;
  let outputSpezialization = document.querySelector("#outputSpezialization");
  outputSpezialization.innerHTML = spezialization;

  var nasa = document.querySelector("#nasa");
  if (nasa.checked) {
    outputNasa.innerHTML = "1";
  } else {
    outputNasa.innerHTML = "0";
  }

  var image = document.querySelector("#image").value;
  let outputImage = document.querySelector("#outputImage");
  outputImage.innerHTML = String(image);
};

let myfullName = document.querySelector("#myName"),
  btnText0 = document.querySelector("#telephon"),
  btnText1 = document.querySelector("#myEmail");

function changeMyname() {
  myfullName.textContent = "Меня зовут: Михаил Маркович Соснов";
}

myfullName.onmouseenter = changeMyname;

function changeMynameBack() {
  myfullName.textContent = "Меня зовут: Михаил Соснов";
}

myfullName.onmouseleave = changeMynameBack;

function changePhone() {
  btnText0.textContent = "Call my:+79289069060";
}

btnText0.onmouseenter = changePhone;

function changePhoneBack() {
  btnText0.textContent = "Мой телефон: +79289069060";
}

btnText0.onmouseleave = changePhoneBack;

btnText1.addEventListener("mouseenter", function () {
  btnText1.textContent = "Write my on email: MycleSosn@yandex.ru, please";
});

btnText1.addEventListener("mouseleave", function () {
  btnText1.textContent = "I'm sure, you remember my email: MycleSosn@yandex.ru";
});
