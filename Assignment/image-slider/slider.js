let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;
function showImage() {
    document.getElementById("slider").src = images[index];
}
function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}