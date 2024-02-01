var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 16000);

function proximaImg() {
  cont++;
  if (cont > 2) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
  console.log(radio1.checked);
}

const play1 = document.getElementById("btn-1");
const play2 = document.getElementById("btn-2");

play1.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=iKBCVZqqooY", "_blank");
});

play2.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=7NK_JOkuSVY", "_blank");
});
