document.getElementById("menu").onclick = function myfunc(){
    if (document.getElementById("menu").innerHTML == "menu"){
        document.getElementById("menu").innerHTML = "close"
        document.getElementById("menu").classList.add("active")
        document.getElementById("menu_o").style.display = "block";
    }
    else{
        document.getElementById("menu").innerHTML = "menu"
        document.getElementById("menu_o").style.display = "none";
        document.getElementById("menu").classList.remove("active")
    }
    
}
document.getElementById("home").onclick = function home(){
    location.replace("index.html")
}
document.getElementById("search").onclick = function search(){
    location.replace("search.html")
}
document.getElementById("settings").onclick = function settings(){
    location.replace("settings.html")
}
document.getElementById("home_android").onclick = function home_android(){
    location.replace("index.html")
}
document.getElementById("search_android").onclick = function search_anhome_android(){
    location.replace("search.html")
}
document.getElementById("settings_android").onclick = function settings_anhome_android(){
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
