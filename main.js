const filler = () => {
    let string = "This is filler text. This is filler text. This is filler text. \n";
    for (let i = 0; i < 5; i++) {
        string += string;      
    }
    return string;
}

const fillText = function() {
    document.getElementById('filler').innerHTML = `<p>${filler()}</p>`
}
fillText();

function openModal(e) {
    console.log(e)
    //document.getElementById('modal').style.display = 'display';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function buildGallery() {
    const gallery = document.getElementById('gallery');
    const preview = '<div class="preview"></div>'
    let out = '';
    for (let i = 0; i < 10; i++) {
        out += preview;
    }

    //gallery.innerHTML = out;
    
}

buildGallery();