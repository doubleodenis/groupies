let nightMode = false;
const nightModeOnIcon = document.getElementById("nightModeOn");
const nightModeOffIcon = document.getElementById("nightModeOff");


function start() {

    //Removing arcade stuff
    const body = document.querySelector("body");
    
    const classList = body.classList;
    if(classList.contains("arcade")) {
        classList.remove("arcade");
    }

    const text = document.querySelector("div.arcade-text");
    text.remove();

    const main = document.querySelector("main");
    main.style.display = "block";
    
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