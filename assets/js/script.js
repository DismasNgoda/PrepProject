
//selector variables
const inputval = document.getElementById('cityinput')
const btn = document.getElementById('add');
const city = document.getElementById('cityoutput')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const add = document.getElementById('add')

apik = "3045dd712ffe6e702e3245525ac7fa38"
//Converting Farenheight to degrees Celcius
function convertion(val){
    return (val - 273).toFixed(2)
}

//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('There are no data for your given Country/City. Please try with a different search'))
    })

add.addEventListener('mouseover', (event) => {
        // highlight the mouseover target and sets color to Blue Grotto on when a mouse is moved over it.
        event.target.style.color = "#296090";
      
        // reset the color after a short delay
        setTimeout(() => {
          event.target.style.color = "";
        }, 1500);
      }, false);