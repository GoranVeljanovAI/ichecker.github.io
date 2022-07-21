let images = []
box = document.getElementById("box")

document.getElementById('file').onchange = function () {
    let file = this.files[0]

    const reader = new FileReader()
    reader.onload = function (progressEvent) {
        // By lines
        const lines = this.result.split('\n')
        images = lines
        for (let line = 0; line < lines.length; line++) {
            console.log(lines[line])
        }
        console.log(images.length)
    }
    reader.readAsText(file)
}

function image_url_process() {
    let str = ""
    for(let i = 0;i < images.length; i++) {
        str = images[i].trim()
        str = str.slice(1)
        str = str.slice(0,str.length-1)
        if (str.charAt(str.length-2) === /[a-zA-Z]/){
            str = str.slice(0,str.length-2)
        }
        images[i] = str
    }
}
function loadProducts() {
    image_url_process()
    for (let i = 0; i < images.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("class", "col-md-2")
        box.appendChild(div)
        let img = document.createElement("img")
        img.setAttribute("class", "check-img")
        img.src = images[i]
        div.appendChild(img)
    }
}
//Get the button
let myButton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
function reset() {
    location.reload();
}
