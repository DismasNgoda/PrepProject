
//selector variables
const inputval = document.getElementById('cityinput')
const btn = document.getElementById('add');
const city = document.getElementById('cityoutput')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')

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
            let nameval = data['name']
            let tempature = data['main']['temp']
            let wndspd = data['wind']['speed']

            // description.innerHTML = `Your Search Results: ${description}`
            city.innerHTML=`City/Country: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('There are no data for your given Country/City. Please try with a different search'))
    })

btn.addEventListener('mouseover', (event) => {
        // highlight the mouseover target and sets color to Blue Grotto on when a mouse is moved over it.
        event.target.style.color = "#296090";
      
        // reset the color after a short delay
        setTimeout(() => {
          event.target.style.color = "";
        }, 1500);
      }, false);

      
      inputval.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("btn-add").click();
        }
      });