var preeti = document.querySelector("#preeti")
var kabir = document.querySelector("#kabir")
var main = document.querySelector("#main")
var h1 = document.querySelector("h1")

preeti.addEventListener("mouseenter",function(){
    main.style.backgroundColor = "red"
    h1.innerHTML = "kisine haath lagaya moerboard"
    kabir.setAttribute("src","https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww")
})

preeti.addEventListener("mouseleave",function(){
    main.style.backgroundColor = "lightblue"
    h1.innerHTML = "ab door hi rahna"
})