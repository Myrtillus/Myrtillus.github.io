function setResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " small";
    } else {
        x.className = "topnav";
    }
}