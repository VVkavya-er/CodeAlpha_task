let images = document.querySelectorAll(".gallery img");
let previewBox = document.getElementById("previewBox");
let previewImage = document.getElementById("previewImage");

let currentIndex = 0;

function openImage(src){

previewBox.style.display = "flex";
previewImage.src = src;

images.forEach((img,index)=>{
if(img.src === src){
currentIndex = index;
}
});

}

function closeImage(){
previewBox.style.display = "none";
}

function changeImage(step){

currentIndex += step;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

if(currentIndex >= images.length){
currentIndex = 0;
}

previewImage.src = images[currentIndex].src;

}