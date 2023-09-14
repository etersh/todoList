const images = [
	"darkocean.jpg",
	"deepspace.jpg",
	"piggypink.jpg",
	"roseanna.jpg",
	"siriustamed.jpg",
	"sweetmorning.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //because this is a background?
bgImage.src = `img/${chosenImage}`;
//<img src="img/0.jpg"/>
//src -> path (address)

//apply CSS styles to make the image smaller
bgImage.style.width = "200px";
bgImage.style.height = "200px";
bgImage.style.marginBottom="10px";
document.body.appendChild(bgImage);
