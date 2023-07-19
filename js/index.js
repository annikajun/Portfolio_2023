function showNav(){
    let navList = document.querySelector(".navlist");
    let menuIcon = document.querySelector("#menu-icon");
    navList.style.display = navList.style.display === "block" ? "none" : "block";
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
}

document.addEventListener('click', (event) => {
    let menuIcon = document.querySelector("#menu-icon");
    let navList = document.querySelector(".navlist");
    if (!navList.contains(event.target) && !menuIcon.contains(event.target) && navList.style.display === "block"){
        showNav();
    }
});

function displayInfo(name){
    let whiteIcon = "white" + name
    let blackIcon = "black" + name

    if (document.getElementById(name).style.display === "block"){
        document.getElementById(name).style.display = "none";
        document.getElementById(blackIcon).style.display = "block";
        document.getElementById(whiteIcon).style.display = "none";
    } else {
        document.getElementById(name).style.display = "block";
        document.getElementById(whiteIcon).style.display = "block";
        document.getElementById(blackIcon).style.display = "none";
    }

    if (name === "Phone"){
        document.getElementById("blackEmail").style.display = "block";
        document.getElementById("whiteEmail").style.display = "none";
        document.getElementById("Email").style.display = "none";
        document.getElementById("blackLinkedin").style.display = "block";
        document.getElementById("whiteLinkedin").style.display = "none";
        document.getElementById("Linkedin").style.display = "none";
    } else if (name === "Email"){
        document.getElementById("blackPhone").style.display = "block";
        document.getElementById("whitePhone").style.display = "none";
        document.getElementById("Phone").style.display = "none";
        document.getElementById("blackLinkedin").style.display = "block";
        document.getElementById("whiteLinkedin").style.display = "none";
        document.getElementById("Linkedin").style.display = "none";
    } else if (name === "Linkedin"){
        document.getElementById("blackPhone").style.display = "block";
        document.getElementById("whitePhone").style.display = "none";
        document.getElementById("Phone").style.display = "none";
        document.getElementById("blackEmail").style.display = "block";
        document.getElementById("whiteEmail").style.display = "none";
        document.getElementById("Email").style.display = "none";
    }

}