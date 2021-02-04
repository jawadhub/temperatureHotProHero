var searchBtn = document.getElementById('search-button');
var inputValue = document.getElementById('inputValue');
var cityName = document.getElementById('city-name');
var cityTemp = document.getElementById('temp');
var cityDesc = document.getElementById('desc');
var cityHumidity = document.getElementById('humidity');

searchBtn.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+'&appid=ba7234265065d9fc877341d86168fb48')
  .then(res => res.json())
  .then(data => {
    var CityName = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var humidityValue = data['main']['humidity'];
    
    cityName.innerText = CityName;
    cityTemp.innerText = 'Temperature : '+ tempValue;
    cityDesc.innerText = 'Sky : ' + descValue;
    cityHumidity.innerText = 'Humidity : ' + humidityValue;
    
    
  })
  .catch(err => alert("Wrong city name!"))
})

