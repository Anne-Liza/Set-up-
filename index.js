function displayTemperature(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=math.round(response.data.temperature.current);
    let cityElement=document.querySelector("#currentcity");
    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Temperature;                                                              
}

Function search(event){
    Event.preventDefault();
    let searchinputElement=document.querySelector("#searchinput");
    let city=searchinputElement.ariaValueMax;

    let api key="";
    let api url="";

    axios.get(apiUrl).ten(displayTemperature);
}

function formatDate(date){
    let minutes=date.getMinutes();
    let hours= date.getHours();
    let day=date.getDay();

    if(minutes<10) {
        minutes=`0${minutes}`;
    }

    if(hours <10){
        hours=`0${hours}`;
    }

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let formattedDay=days[day];
return`${formatedDay} ${hours}: ${minutes}`;
}

let searchForm=document.querySelector("#searchform");
searchForm.addEventListener("submit",search);
let currentDateElement=document.querySelector("#currentdate");
let currentDate=newDate();
currentDateElement.innerHTML=formatDate(currentDate);