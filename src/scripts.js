let nav_show = document.getElementById('nav_show')
let nav_close = document.getElementById('nav_close')
let navbar_sticky = document.getElementById('navbar-sticky')
let best_seller  = document.getElementById('Best_seller')
let new_arrival = document.getElementById('new_arrival')
let trending = document.getElementById('trending')
let click = 


nav_show.onclick = function(){
    navbar_sticky.classList.remove('hidden')
}
nav_close.onclick = function(){
    navbar_sticky.classList.add('hidden')
}

window.onscroll = function(){
    let navbar = document.getElementById('navScroll')
    scroll = 618;

    if(window.scrollY >= scroll){
        navbar.classList.add('bg-light')
    }else{
        navbar.classList.remove('bg-light')
    }
}

document.getElementById('button1').onclick = function(){
    best_seller.classList.remove('hidden')
    new_arrival.classList.add('hidden')
    trending.classList.add('hidden')
}
document.getElementById('button2').onclick = function(){
    new_arrival.classList.remove('hidden')
    trending.classList.add('hidden')
    best_seller.classList.add('hidden')

}
document.getElementById('button3').onclick = function(){
    new_arrival.classList.add('hidden')
    trending.classList.remove('hidden')
    best_seller.classList.add('hidden')
}


