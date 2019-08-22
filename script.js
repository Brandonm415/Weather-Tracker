var apiKey = "5fef18abf55764f86ff63721f89b9eb5";

//Get temperature by name of city
document.getElementById("citySubmit").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var city = document.getElementById("cityName").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey, true);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            document.getElementById("temperature").textContent = "Temperature of " + response.name + " is: " + response.main.temp + " degrees Fahrenheit";
        } else {
            document.getElementById("temperature").textContent = "Error, cannot read city.";
        }
    });
    req.send(null);
    event.preventDefault();
});

//Get temperature by zip code
document.getElementById("zipSubmit").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var zip = document.getElementById("zipCode").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial" + "&appid=" + apiKey, true);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            document.getElementById("temperature").textContent = "Temperature of " + response.name + " is: " + response.main.temp + " degrees Fahrenheit";
        } else {
            document.getElementById("temperature").textContent = "Error, cannot read zip.";
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);
    event.preventDefault();
});

