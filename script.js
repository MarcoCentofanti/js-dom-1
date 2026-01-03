


const buttonEl = document.getElementById("button-lamp")
const lampOnImg = document.getElementById("lamp-on")
const lampBroken = document.getElementById("lamp-broken")
const bodyEl = document.getElementById("body")
const buttonText = buttonEl.textContent
let lampLife = 10

buttonEl.addEventListener("click", function(){
  lampLife--
  // console.log(lampLife)
  lampOnImg.classList.toggle("invisible")
  
  // NOTA 1
  if (lampLife <= 0){
    // console.log("CRASH")
    lampBroken.classList.remove("invisible")
    bodyEl.classList.add("bg-dark")
    buttonEl.classList.add("btn-danger")
    buttonEl.textContent = "Rotta"
    
  } else if (buttonEl.classList.contains("off")) {
    buttonEl.textContent = "Spegni"
    buttonEl.classList.toggle("off")
    bodyEl.classList.toggle("bg-dark")
    buttonEl.classList.toggle("btn-warning")
    buttonEl.classList.toggle("btn-secondary")
  } else {
    buttonEl.textContent = "Accendi"
    buttonEl.classList.toggle("off")
    bodyEl.classList.toggle("bg-dark")
    buttonEl.classList.toggle("btn-warning")
    buttonEl.classList.toggle("btn-secondary")
}
})




// NOTA 1
// non sono riuscito ad implementare la modifica del testo del bottone usando includes sul textContent.
// ho dovuto agirare il problema usando delle classi.
// sembra che il dom continui a vedere il document originale