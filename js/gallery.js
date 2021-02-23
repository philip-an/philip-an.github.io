var modal = document.querySelector("#myModal");
var modalImg = document.querySelector("#modal-img");

document.addEventListener("click", enlargeImage);

function enlargeImage(event) {
	if(event.target.matches(".gallery-image")) {
		modal.style.display = "block";

		var img = document.getElementById(event.target.id);
		style = img.currentStyle || window.getComputedStyle(img, false),
		bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

		modalImg.src = bi;
	}
}

var span = document.querySelector(".close");

span.addEventListener("click", function() {
	modal.style.display = "none";
})