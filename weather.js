const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b25eb8dfd1mshc6ab5bf7e7d1765p1f9e56jsn9568b26a5312',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{
			console.log(response) 
			cloud_pct.innerHTML=response.cloud_pct
			
			feels_like.innerHTML=response.feels_like
			humidity.innerHTML=response.humidity
			humidity2.innerHTML=response.humidity
			temp.innerHTML=response.temp
			temp2.innerHTML=response.temp
			maxtemp.innerHTML=response.maxtemp
			mintemp.innerHTML=response.mintemp
			sunrise.innerHTML=response.sunrise
			sunset.innerHTML=response.sunset
			//wind_degree.innerHTML=response.wind_degree
			Wind_speed.innerHTML=response.Wind_speed
			Wind_speed2.innerHTML=response.Wind_speed
			
		})
	.catch(err => console.error(err));
}
SubmitEvent,addEventListener("click",(e)=>{
    e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")
//shanghai
const getWeather1=(city)=>{
	city1.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{
			
			
			cloud_pct3.innerHTML=response.cloud_pct
			feels_like3.innerHTML=response.feels_like
			humidity3.innerHTML=response.humidity
			temp3.innerHTML=response.temp
			maxtemp3.innerHTML=response.maxtemp
			mintemp3.innerHTML=response.mintemp
			sunrise3.innerHTML=response.sunrise
			sunset3.innerHTML=response.sunset
			wind_degree3.innerHTML=response.wind_degree
			Wind_speed3.innerHTML=response.Wind_speed	
		})
	.catch(err => console.error(err));
}
SubmitEvent,addEventListener("click",(e)=>{
    e.preventDefault()
	getWeather(city.value)
})
getWeather1("Shanghai")


//boston

const getWeather2=(city)=>{
	city2.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{
			
			
			cloud_pct4.innerHTML=response.cloud_pct
			feels_like4.innerHTML=response.feels_like
			humidity4.innerHTML=response.humidity
			
			
			temp4.innerHTML=response.temp
			maxtemp4.innerHTML=response.maxtemp
			mintemp4.innerHTML=response.mintemp
			sunrise4.innerHTML=response.sunrise
			sunset4.innerHTML=response.sunset
			wind_degree4.innerHTML=response.wind_degree
			
			Wind_speed4.innerHTML=response.Wind_speed
			
		})
	.catch(err => console.error(err));
}
SubmitEvent,addEventListener("click",(e)=>{
    e.preventDefault()
	getWeather(city.value)
})
getWeather2("Boston")
//kolkata
const getWeather3=(city)=>{
	city3.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{
			
			
			cloud_pct5.innerHTML=response.cloud_pct
			feels_like5.innerHTML=response.feels_like
			humidity5.innerHTML=response.humidity
			temp5.innerHTML=response.temp
			maxtemp5.innerHTML=response.maxtemp
			mintemp5.innerHTML=response.mintemp
			sunrise5.innerHTML=response.sunrise
			sunset5.innerHTML=response.sunset
			wind_degree5.innerHTML=response.wind_degree
			
			Wind_speed5.innerHTML=response.Wind_speed
			
		})
	.catch(err => console.error(err));
}
SubmitEvent,addEventListener("click",(e)=>{
    e.preventDefault()
	getWeather(city.value)
})
getWeather3("Kolkata")
//lucknow
const getWeather4=(city)=>{
	city4.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{
			
			
			cloud_pct6.innerHTML=response.cloud_pct
			feels_like6.innerHTML=response.feels_like
			humidity6.innerHTML=response.humidity
			temp6.innerHTML=response.temp
			maxtemp6.innerHTML=response.maxtemp
			mintemp6.innerHTML=response.mintemp
			sunrise6.innerHTML=response.sunrise
			sunset6.innerHTML=response.sunset
			wind_degree6.innerHTML=response.wind_degree
			Wind_speed6.innerHTML=response.Wind_speed
			
		})
	.catch(err => console.error(err));
}
SubmitEvent,addEventListener("click",(e)=>{
    e.preventDefault()
	getWeather(city.value)
})
getWeather4("Lucknow")
