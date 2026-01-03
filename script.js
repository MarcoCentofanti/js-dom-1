const buttonEl = document.getElementById("button-lamp")
const lampOnImg = document.getElementById("lamp-on")

buttonEl.addEventListener("click", function(){
lampOnImg.classList.toggle("invisible")
})