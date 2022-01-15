//Get the button:
mybutton = document.getElementById("myBtn");

let i = 0;

function replace_underscore() {
    let underscore = document.querySelector("#underscore");
    text = ["rgba(34, 126, 212)", "white"];
    shadow = ["none", "2px 2px #0a0a0a"];
    underscore.style.color = text[i];
    underscore.style.textShadow = shadow[i];
    i = (i+1) % text.length;
}
setInterval(replace_underscore, 700);


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "6vh";
    } else {
      document.getElementById("header").style.height = "10vh";
    }
  }