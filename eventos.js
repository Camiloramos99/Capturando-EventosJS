var img = document.querySelector(".imagen");

   
function overImg() {
   img.src="https://www.emiweb.es/medias/images/imagen2.png";
   console.log("");
};
   
function outOfImg() {
   img.src="https://www.emiweb.es/medias/images/imagen1.png";
   console.log("");
};

img.addEventListener("mouseover", overImg);   
img.addEventListener("mouseout", outOfImg);   


    