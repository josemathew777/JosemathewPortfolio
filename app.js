const video= document.getElementById('projectvideo');
const hoverSign = document.querySelector(".hover-sign");

//sidebar elements//
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videolist=[video];

videolist.forEach(function(video){
video.addEventListener('mouseover' , function(){
    video.play()
    hoverSign.classList.add("active")
})
video.addEventListener('mouseout', function(){
    video.pause()
    hoverSign.classList.remove("active")
})
})


menu.addEventListener("click", function(){
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
    sidebar.classList.remove("open-sidebar")
    sidebar.classList.add("close-sidebar")
})