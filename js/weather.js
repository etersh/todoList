const API_KEY = "6945d76b43493ccf9deed3fe4804360e";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoFail() {
	alert("Failed to find location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
