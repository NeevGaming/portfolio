document.getElementById("menu").onclick = function myfunc(){
    if (document.getElementById("menu").innerHTML == "menu"){
        document.getElementById("menu").innerHTML = "close"
        document.getElementById("menu").classList.add("active")
    }
    else{
        document.getElementById("menu").innerHTML = "menu"
        document.getElementById("menu").classList.remove("active")
    }
}
document.getElementById("home").onclick = function home(){
    location.replace("index.html")
}
document.getElementById("search").onclick = function search(){
    location.replace("search.html")
}
document.getElementById("settings").onclick = function search(){
    location.replace("settings.html")
}
document.getElementById('fscreen').onclick = function fscreen(){
    if (document.fullscreenEnabled){
        document.getElementById('body').requestFullscreen();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
      }
}