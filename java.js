$(document).ready(function (){
        const icon= document.querySelector(".weather img")
        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const apikey = "7107052d6c4842473f03bb48b007872d"
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        async function checkweather(city){
        const response = await fetch(apiurl +city+`&appid=${apikey}`);
        var data= await response.json();
        console.log(data);
        if(response.status==404){
            // document.querySelector(".eror").style.display="block"
            // document.querySelector(".weather").style.display="none"
            $(".weather").slideUp(500)
            $(".eror").slideDown(700)
        }else{
            $(".eror").slideUp(700)
            $(".weather").slideDown(700)
        if(data.sys.country=="IR"){
            document.querySelector(".country").innerHTML = "IRAN"
        }else if(data.sys.country=="MX"){
            document.querySelector(".country").innerHTML = "MEXICO"
        }else if(data.sys.country=="US"){
            document.querySelector(".country").innerHTML = "UNITED STATES OF AMERICA"
        }else if(data.sys.country=="FR"){
            document.querySelector(".country").innerHTML = "FRANCE"
        }else if(data.sys.country=="IT"){
            document.querySelector(".country").innerHTML = "ITALY"
        }
        else{
            document.querySelector(".country").innerHTML = " "
        }
        document.querySelector(".eror").style.display="none"
        document.querySelector(".city").innerHTML = data.name.toUpperCase()
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h"
        if(data.weather[0].main=='Clouds'){
        icon.src= "images/clouds.png"
        }else if(data.weather[0].main=='Clear'){
            icon.src= "images/clear.png"
        }else if(data.weather[0].main=='Mist'){
            icon.src= "images/mist.png"
        }else if(data.weather[0].main=='Rain'){
            icon.src= "images/rain.png"
        }else if(data.weather[0].main=='Snow'){
            icon.src= "images/snow.png"
        }else if(data.weather[0].main=='Drizzle'){
            icon.src= "images/drizzle.png"
        }else if(data.weather[0].main=='Wind'){
            icon.src= "images/wind.png"
        }
        document.querySelector(".weather").style.display="block"
        }
        }
        $(".searchBtn").click(function(){
            checkweather(searchBox.value)
        })

})