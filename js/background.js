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

document.body.appendChild(bgImage);
