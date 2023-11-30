var arr = ["circle", "penta", "tri", "hex"]
var btn = document.querySelector("button")
var box = document.querySelector("#box")

btn.addEventListener("click", function () {
    var a = Math.floor(Math.random() *4)
    box.classList.add(arr[a])
})