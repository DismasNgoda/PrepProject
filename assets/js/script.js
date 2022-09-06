
//selector variables
var inputval = document.getElementById('cityinput')
var btn = document.getElementById('add');
var city = document.getElementById('cityoutput')
var description = document.getElementById('description')
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')



apik = "3045dd712ffe6e702e3245525ac7fa38"
//Converting Faenheight to degrees Celcius
function convertion(val){
    return (val - 273).toFixed(2)
}



//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
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
        .catch(err => alert('There are no data for your given Country/City. Please try with a different search'))
    })

