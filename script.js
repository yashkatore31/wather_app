const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47c9c4084dmsh15e63afcbb1dc21p17268cjsn05b96fbda9f1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
