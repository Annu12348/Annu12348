var btn = document.querySelector("button")
var a = document.querySelector("h1")
var d = document.querySelector("#card")
var h = document.querySelector("h6")

btn.addEventListener("click",function(){
    a.innerHTML = "Requesting..."
    a.style.color = "red"
    btn.innerHTML = "remove"
    a.style.fontFamily = "gilroy"
    a.style.marginLeft = "70px"
})




h.addEventListener("click",function(){
    d.innerHTML = "Remove"
    d.style.fontSize = "100px"
})