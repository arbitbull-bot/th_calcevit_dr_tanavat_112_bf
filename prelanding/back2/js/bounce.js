let opSystem = navigator.userAgent;
if (opSystem.match("iPhone")) {
    document.querySelector(".chest").style.marginBottom = "110px";
    console.log(opSystem);
}

var chestGif = document.querySelector(".chest__img--dinamic");
var chestClosed = document.querySelector(".chest__button");
var chestOpened = document.querySelector(".chest__coins");
var titleBlock = document.querySelector(".chest__title_wrap");
var orderBlock = document.querySelector(".chest__order");
document.querySelector(".chest__button").onclick = () => {
    setTimeout(function () {
        chestGif.style.display = "block";
        chestClosed.style.display = "none";
    }, 500);
    setTimeout(function () {
        chestGif.style.display = "none";
        chestOpened.style.display = "flex";
        titleBlock.style.display = "none";
    }, 1800);
    setTimeout(function () {
        chestOpened.style.display = "none";
        orderBlock.style.display = "flex";
    }, 3600);
};