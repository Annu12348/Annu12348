var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var h1 = document.querySelector("h1")

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
 })

 main.addEventListener("mouseenter",function(){
    cursor.style.left = "scale(2)"
 })

 main.addEventListener("mouseleave",function(){
    cursor.addEventListener = "scale(1)"
 })