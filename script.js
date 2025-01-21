window.onclick = function(event) {
    if (event.target.matches('.dropdown-button') && document.querySelector('.dropdown-menu').style.cssText == "display: none;") {
        document.querySelector('.dropdown-menu').style.cssText = "display: flex;"
    } else {
        document.querySelector('.dropdown-menu').style.cssText = "display: none;"
    }
}
let slideIndex = 0
function showSlides(){
    document.querySelectorAll('.portfolio-side>div>button').forEach(item => {
        item.style.cssText = ""
    })
    document.querySelectorAll('.portfolio-side>div>button')[slideIndex].style.cssText = "padding: 5px 20px; color: #ffffff; background: #7ceec7;"
}
showSlides()
function plusSlide(n){
    slideIndex = n
    showSlides()
}