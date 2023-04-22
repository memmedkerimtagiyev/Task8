// Tapsiriq_1
const box1=document.getElementById("box1")
const box2=document.querySelector(".box2")
const box3=document.querySelector(".box3")
box1.style.color="blue"
box2.style.color="red"
box3.style.color="green"

// Tapsiriq_2

const btnBlue=document.querySelector(".blue")
const btnRed=document.querySelector(".red")
const btnGreen=document.querySelector(".green")
const box=document.querySelector(".box")

btnBlue.addEventListener("click", function(){
    box.style.backgroundColor="blue"
})
btnRed.addEventListener("click",function(){
    box.style.backgroundColor="red"
})
btnGreen.addEventListener("click",function(){
    box.style.backgroundColor="green"
})

// Tapsiriq_3

let randomColor=document.querySelector("#randomColor")
let boxRandom=document.querySelector(".boxRandom")

randomColor.addEventListener("click",function(){
    let num1=Math.floor(Math.random()*256)
    let num2=Math.floor(Math.random()*256)
    let num3=Math.floor(Math.random()*256)
    boxRandom.style.backgroundColor=`rgb(${num1},${num2},${num3})`
})
