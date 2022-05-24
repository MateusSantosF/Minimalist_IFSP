var timer
var loadScreenDiv
var loadScreen
document.addEventListener("DOMContentLoaded", function(e) {

    timer = setTimeout('closeLoadScreen()', 000)
    loadScreenDiv = document.getElementById('loader-container')
    loadScreen = document.getElementById('loader')
});

function closeLoadScreen(){
    loadScreen.classList.toggle('sr-only')
    loadScreenDiv.classList.toggle('loader-container')
    loadScreenDiv.classList.toggle('sr-only')
}
