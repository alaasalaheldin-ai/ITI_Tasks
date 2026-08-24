var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
];

var currentIndex = 0; 
var slideInterval = null; 
var imgElement = document.getElementById("myimg");


function updateImage() {
    imgElement.src = images[currentIndex];
}


function nextImg() {
    currentIndex++;
        if (currentIndex >= images.length) {
    currentIndex = 0; 
}
    updateImage();
}


function prevImg() {
    currentIndex--;
        if (currentIndex < 0) {
    currentIndex = images.length - 1; 
}
    updateImage();
}


function startSlideShow() {
    if (slideInterval !== null) {
    return; 
}
    slideInterval = setInterval(nextImg, 1500); 
}


function stopSlideShow() {
    clearInterval(slideInterval);
        slideInterval = null; 
}