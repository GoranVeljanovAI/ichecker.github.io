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
let counter = 0

// remove the special characters from the image URL string
function image_url_process() {
    let str = ""
    let test = images[images.length]

    for (let i = 0; i < images.length; i++) {
        str = images[i].replace(/[",]/g, '')
        images[i] = str.trim()
    }
    counter = images.length
}

// Check if user file format is correct!
function getFileExtension() {
    let fileName = uploadedFile.value
    return fileName.split('.').pop()
}

// Get file name from the uploaded file and display in the HTML file.
function getFileName() {
    let filename;
    let fullPath = document.getElementById('file').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }
    return filename
}

// When the user upload file to load product images
let textInfo = document.getElementById('text-info')

function loadProducts() {

    image_url_process()
    if (uploadedFile.files.length === 0) {
        alert('Please select file')
        return;
    } else if (getFileExtension() !== 'txt') {
        alert('Your file must be .txt format!')
        uploadedFile.value = ''
        return;
    }
    // Text info about full screen images
    let modalInfoText = document.createElement('h3')
    modalInfoText.setAttribute('class', 'modal-text-info')
    modalInfoText.textContent = "Click on the image to open in full screen"
    textInfo.appendChild(modalInfoText)

    // On scroll loading products
    $(document).ready(function () {
        let win = $(window),
            sectionHeight = 100,
            currentSection = 0;

        $boxing = $('.boxing')

        function myFunction(n) {

            for (let i = (n - 1) * 100; i < n * 100; i++) {
                    if(i < images.length) {
                        let div = document.createElement("div")
                        div.setAttribute("class", "col-md-2")
                        $boxing.append(div)
                        let img = document.createElement("img")
                        img.setAttribute("class", "check-img")
                        img.setAttribute("loading", "lazy")
                        img.src = images[i]
                        div.appendChild(img)
                    }

            }

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
                // Get the (x) element that closes the modal;  When the user clicks on , close the modal
                let span = document.getElementsByClassName("close")[0];

                span.onclick = function () {
                    modal.style.display = "none";
                    button.setAttribute('class', 'btn btn-danger')
                    button.innerHTML = "Copy img URL"
                }
            }
        }

        win.scroll(function () {
            let calculateSection = parseInt(win.scrollTop() / sectionHeight, 10);
            if (currentSection !== calculateSection) {
                currentSection = calculateSection;
                myFunction(currentSection);
            }
        });
    })

    document.getElementById('total').innerText = "[" + images.length + "]";
    document.getElementById('uploadedFile').innerText = getFileName()
    document.getElementById('file').value = ''
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
