function displayWeather(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var latvar = position.coords.latitude;
                var longvar = position.coords.longitude;
                latvar = latvar.toFixed(4);
                longvar = longvar.toFixed(4);
                var searchURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latvar + "&lon=" + longvar + "&units=imperial&APPID=676d047b094632384a9512e39d15cf75";
                $.getJSON(searchURL,function(json){
                    var iconURL = "https://openweathermap.org/img/wn/" + json.weather[0]["icon"] + "@2x.png";
                    document.getElementById("weathericon").innerHTML = "<img src='" + iconURL + "'>";
                    document.getElementById("weather").innerHTML = json.main["temp"] + "&deg;";
                    document.getElementById("humidity").innerHTML = json.main["humidity"] + "% Humidity";
                    document.getElementById("conditions").innerHTML = json.weather[0]["main"];
                    document.getElementById("city").innerHTML = json.name;
                    document.getElementById("wind").innerHTML = "Wind: " + json.wind["speed"].toFixed(0) + " mph"
                });
            });
        } else{
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }

displayWeather();
