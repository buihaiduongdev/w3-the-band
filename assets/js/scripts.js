var autoIndex = 0;
  carousel();
  
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > x.length) {autoIndex = 1}
    x[autoIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Thay đổi slide sau 3 giây
}

function onBuy() {
    var fillter = document.getElementById("fillter");
    var form = document.getElementById("buy-form");
    fillter.style.display = "block";
    form.style.display = "block";
}

function onCancel() {
    var fillter = document.getElementById("fillter");
    var form = document.getElementById("buy-form");
    fillter.style.display = "none";
    form.style.display = "none";
}

const fillter = document.querySelector(".js-fillter");
fillter.addEventListener('click', function(e){
        fillter.style.display = "none";
        document.getElementById("buy-form").style.display = "none";
});

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".js-nav");
menuBtn.addEventListener('click', function(e){
    navbar.classList.toggle("active");
});


const menuLinks = document.querySelectorAll(".js-nav a");
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove("active");
    });
});
