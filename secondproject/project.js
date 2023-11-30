var btn = document.querySelector("button")
var p = document.querySelector("p")
var card = document.querySelector("#card")

btn.addEventListener("click",function(){
    p.innerHTML = "1234"
    card.style.backgroundColor = "red"
})