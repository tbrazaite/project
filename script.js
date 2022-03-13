// alert("Veikia");

"use strict"

// headerio funkcionalumas
var links = document.getElementsByTagName("a");

// toggles links style
for (var x of links) {
    x.addEventListener("click", function () {

        for (var x of links) {
            x.classList.remove("selected");
        }

        this.classList.add("selected");
    })
}



// grazina i mainpage po refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}



// scrool up button funkcionalumas
var mybutton = document.getElementById("myBtn");

// scrool up button atsiranda kai pascrolina zemyn per 10px
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

// grazina i virsu kai paspaudzia ir nuima hederio active stiliu
function topFunction() {
    document.documentElement.scrollTop = 0;

    for (var x of links) {
        x.classList.remove("selected");
        x.classList.remove("block");
        burger.classList.remove("rotate");
    }
}



// mainpage inputs
var name1 = document.getElementById("name1");
var surname1 = document.getElementById("lname1");
var number1 = document.getElementById("number1");
var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var getStarted = document.getElementById("getstarted");

getStarted.addEventListener("click", function () {
    if (!name1.value || !surname1.value || number1.value <= 0) {
        alert("Please add information");
    } else {
        alert("Thank you. We will contact you!");
        name1.value = '';
        surname1.value = '';
        number1.value = '';
    }
});







// contacts inputs
var name2 = document.getElementById("name2");
var surname2 = document.getElementById("lname2");
var number2 = document.getElementById("number2");
var type3 = document.getElementById("type3");
var type4 = document.getElementById("type4");
var contButton = document.getElementById("cont-button");

contButton.addEventListener("click", function () {
    if (!name2.value || !surname2.value || number2.value <= 0) {
        alert("Please add information");
    } else {
        alert("Thank you. We will contact you!");
        name2.value = '';
        surname2.value = '';
        number2.value = '';
    }
});




// tabs funkcionalumas
var buttonsTab = document.getElementsByClassName("box");
var tablets = document.getElementsByClassName("tabcontent");
var tabs = document.querySelectorAll(".tabcontent");

function openText(event, name) {

    for (var i = 0; i < tablets.length; i++) {
        tablets[i].style.display = "none";
        buttonsTab[i].classList.remove("active2");
    }

    document.getElementById(name).style.display = "block";
    document.getElementById(name).style.opacity = "0";
    event.currentTarget.classList.add("active2");

    setTimeout(function () {
        var tabs = document.querySelectorAll(".tabcontent");
        for (var x of tabs) {
            x.classList.remove("tabAnimation");
        }
        document.getElementById(name).classList.add("tabAnimation");
        document.getElementById(name).style.opacity = "1";
    }, 200);
}




// download mygtukas
var download = document.getElementsByClassName("download");
function one() {
    alert("Thank you for using us!");
}




// burger funkcionalumas
var anchors = document.getElementsByClassName("link")
var burger = document.getElementById("burger");


// toggles links style
for (var x of anchors) {
    x.addEventListener("click", function () {
        for (var x of anchors) {
            x.classList.remove("selected");
            x.classList.remove("block");
        }
        this.classList.add("selected");
        burger.classList.remove("rotate");

        this.classList.add("block");

    })
}

// toggles links dispaly and burger style
burger.addEventListener("click", function () {
    for (var x of anchors) {
        x.classList.toggle("block");
        x.classList.remove("selected");

    }
    this.classList.toggle("rotate");

});

// change on resize
window.addEventListener("resize", function () {
    for (var x of anchors) {
        x.classList.remove("block");
        x.classList.remove("selected");
    }
    burger.classList.remove("rotate");
})











