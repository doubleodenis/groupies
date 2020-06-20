
let nightMode = false;
const nightModeOnIcon = document.getElementById("nightModeOn");
const nightModeOffIcon = document.getElementById("nightModeOff");
start();

function start() {


    hideElement(nightModeOnIcon);
    hideElement(nightModeOffIcon);

    toggleNightMode();

}

function hideElement(elem) {
    elem.style.display = "none";
}

function unhideElement(elem) {
    elem.style.display = "block";
}

function toggleNightMode() {
    nightMode = !nightMode;

    if(nightMode == true) {
        unhideElement(nightModeOnIcon);
        hideElement(nightModeOffIcon);
    }
        
    else {
        unhideElement(nightModeOffIcon);
        hideElement(nightModeOnIcon);
    }   
        
}
window.onload = function () {
    window.onscroll = function() {
        const header = document.querySelector("header");
        header.style.opacity = 1 - 1.5 * this.document.documentElement.scrollTop / header.clientHeight; 
        // console.log(header.style.opacity, (this.document.documentElement.scrollTop / header.clientHeight));
    };
}
