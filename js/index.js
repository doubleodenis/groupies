function start() {

    //Removing arcade stuff
    const body = document.querySelector("body");
    
    const classList = body.classList;
    if(classList.contains("arcade")) {
        classList.remove("arcade");
    }

    const text = document.querySelector("div.arcade-text");
    text.remove();

    //Adding main block
    const main = document.querySelector("main");
    main.style.display = "block";
    
}