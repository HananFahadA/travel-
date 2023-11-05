let menu = document.getElementById("menu-btn")
let nav = document.querySelector(".header .navbar")

menu.onclick = ()=>{
    console.log(nav.classList.toggle("active"))
}

let curent =3
let more =document.querySelector(".load-more .btn")
more.onclick = ()=>{
    let data = [...document.querySelectorAll(".home-pakages .box")]

    for (var i=curent ;i<curent+3;i++){
        console.log(i)
        data[i].style.display= "inline-block"
    }
  
curent+=3
if (curent  >=data.length)
more.style.display ='none';
}