let images = []
let box = document.getElementById("box")
let uploadedFile = document.getElementById('file')

// Read the file from input
uploadedFile.onchange = function () {
    let file = this.files[0]

    const reader = new FileReader()
    reader.onload = function (progressEvent) {
        // By lines
        const lines = this.result.split('\n')

        for (let line = 0; line < lines.length; line++) {
            images = lines
        }
    }
    reader.readAsText(file)
}

// remove the special characters from the image URL string
function image_url_process() {
    let str = ""
    for (let i = 0; i < images.length; i++) {
        str = images[i].replace(/[?" ?,]/g,'')
        images[i] = str
    }
}

// Check if user file format is correct!
function getFileExtension() {
    let fileName = uploadedFile.value
    return fileName.split('.').pop()
}

// When the user upload file to load product images
let textInfo = document.getElementById('text-info')
function loadProducts() {
    let modalInfoText = document.createElement('h3')
    modalInfoText.setAttribute('class', 'modal-text-info')
    modalInfoText.textContent = "Click on the image to open in full screen"

    textInfo.appendChild(modalInfoText)

    image_url_process()
    if (uploadedFile.files.length === 0) {
        alert('Please select file')
        return
    } else if (getFileExtension() !== 'txt') {
        alert('Your file must be .txt format!')
        uploadedFile.value = ''
        return;
    }

    for (let i = 0; i < images.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("class", "col-md-2")
        box.appendChild(div)
        let img = document.createElement("img")
        img.setAttribute("class", "check-img")
        img.src = images[i]
        div.appendChild(img)
    }

    document.getElementById('total').innerText = "[" + images.length + "]";

    // Get the modal; Get the image and insert it inside the modal
    let modal = document.getElementById("myModal");
    let img = document.getElementsByClassName("check-img");
    let modalImg = document.getElementById("img01");
    let button = document.querySelector(".button")
    let imgURL = null

    for (let i = 0; i < images.length; i++) {
        img[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            imgURL = this.src
        }
        // Get the image url from the modal
        button.onclick = function () {
            navigator.clipboard.writeText(imgURL).then(() => {
                button.setAttribute('class', 'btn btn-success')
                button.innerHTML = "Copied"
            })
        }
    }

// Get the (x) element that closes the modal;  When the user clicks on , close the modal
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
        button.setAttribute('class', 'btn btn-danger')
        button.innerHTML = "Copy img URL"
    }
}

//Get the button
let myButton = document.getElementById("myBtn")

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
}

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

// reset button
function reset() {
    location.reload();
}

// User's guide panel
let coll = document.getElementsByClassName("collapsible");
let coll2 = document.getElementsByClassName("collapsible-2");
let coll3 = document.getElementsByClassName("collapsible-3");
let coll4 = document.getElementsByClassName("collapsible-4");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 1000 + content.scrollHeight + "px";
        }
    });
    coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content2 = this.nextElementSibling;
        if (content2.style.maxHeight) {
            content2.style.maxHeight = null;
        } else {
            content2.style.maxHeight = content2.scrollHeight + "px";
        }
    });
    coll3[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content2 = this.nextElementSibling;
        if (content2.style.maxHeight) {
            content2.style.maxHeight = null;
        } else {
            content2.style.maxHeight = content2.scrollHeight + "px";
        }
    })
    coll4[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content2 = this.nextElementSibling;
        if (content2.style.maxHeight) {
            content2.style.maxHeight = null;
        } else {
            content2.style.maxHeight = content2.scrollHeight + "px";
        }
    });
}
