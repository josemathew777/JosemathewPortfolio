// Select video elements and hover sign
const videolist = document.querySelectorAll("video");
const hoverSign = document.querySelector(".hover-sign");

// Sidebar elements
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

// Add hover events to each video
videolist.forEach(function(video) {
    if (video && hoverSign) {
        video.addEventListener('mouseover', function () {
            video.play();
            hoverSign.classList.add("active");
        });

        video.addEventListener('mouseout', function () {
            video.pause();
            hoverSign.classList.remove("active");
        });
    }
});

// Sidebar toggle logic
if (sidebar && menu && close) {
    menu.addEventListener("click", function () {
        sidebar.classList.remove("close-sidebar");
        sidebar.classList.add("open-sidebar");
    });

    close.addEventListener("click", function () {
        sidebar.classList.remove("open-sidebar");
        sidebar.classList.add("close-sidebar");
    });
}