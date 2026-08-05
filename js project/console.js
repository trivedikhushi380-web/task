const weatherData = {

    ahmedabad: {
        city: "Ahmedabad",
        temp: "36°",
        weather: "Sunny",
        cloud: "10%",
        humidity: "45%",
        wind: "12 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"
    },

    surat: {
        city: "Surat",
        temp: "27°",
        weather: "Rainy",
        cloud: "95%",
        humidity: "88%",
        wind: "18 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
        bg: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1600"
    },

    gandhinagar: {
        city: "Gandhinagar",
        temp: "30°",
        weather: "Cloudy",
        cloud: "70%",
        humidity: "62%",
        wind: "14 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        bg: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1600"
    },

    vadodara: {
        city: "Vadodara",
        temp: "29°",
        weather: "Partly Cloudy",
        cloud: "55%",
        humidity: "60%",
        wind: "10 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600"
    },

    rajkot: {
        city: "Rajkot",
        temp: "34°",
        weather: "Sunny",
        cloud: "15%",
        humidity: "45%",
        wind: "14 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"
    },

    jaipur: {
        city: "Jaipur",
        temp: "37°",
        weather: "Sunny",
        cloud: "12%",
        humidity: "35%",
        wind: "18 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"
    },

    udaipur: {
        city: "Udaipur",
        temp: "31°",
        weather: "Cloudy",
        cloud: "65%",
        humidity: "60%",
        wind: "12 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
        bg: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1600"
    },

    jodhpur: {
        city: "Jodhpur",
        temp: "39°",
        weather: "Sunny",
        cloud: "10%",
        humidity: "28%",
        wind: "20 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"
    },

    kota: {
        city: "Kota",
        temp: "35°",
        weather: "Partly Cloudy",
        cloud: "40%",
        humidity: "55%",
        wind: "16 km/h",
        icon: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600"
    }

};

const temp = document.getElementById("temp");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const cloud = document.getElementById("cloud");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");
const bg = document.getElementById("bg");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

function updateWeather(data) {

    temp.innerHTML = data.temp;
    city.innerHTML = data.city;
    condition.innerHTML = data.weather;

    cloud.innerHTML = data.cloud;
    humidity.innerHTML = data.humidity;
    wind.innerHTML = data.wind;

    icon.src = data.icon;
    bg.style.backgroundImage = `url('${data.bg}')`;
}

function searchWeather() {

    let value = search.value.toLowerCase().trim();

    if (weatherData[value]) {
        updateWeather(weatherData[value]);
    } else {
        alert("City Not Found!");
    }
}

searchBtn.addEventListener("click", searchWeather);

search.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchWeather();
    }
});

document.querySelectorAll(".city-name").forEach(function(item) {

    item.addEventListener("click", function() {

        let value = this.innerHTML.toLowerCase();

        if (weatherData[value]) {
            updateWeather(weatherData[value]);
        }

    });

});

updateWeather(weatherData.ahmedabad);