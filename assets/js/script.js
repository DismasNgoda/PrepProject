
//selector variables
var inputval = document.getElementById('cityinput')
var btn = document.getElementById('add');
var city = document.getElementById('cityoutput')
var description = document.getElementById('description')
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')



apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2494d3735bmsh46eb9c91e8d6e69p154e13jsn76a7cc498b0d',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

//fetch
    btn.addEventListener('click', function(){
        fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f', options)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var description = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${description}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city/Country name'))
    })

