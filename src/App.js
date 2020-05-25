import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherCard from './componenets/weatherCard/whetherCard';

function App() {
  const location = 'Sydney, au';

  const [query, setQuery ]= useState()
  
    const [weather, setWeather]= useState({
      condition:null,
      temp:null,
      country:null,
      city:null,

      


    })



  const data = async(q)=>{
    const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q},gb&units=metric&APPID=37869E478EFFBCDDE9A2E9ADC326D2BD`);
      const resJson = await apiRes.json();
   
     setWeather(
         {
           city:resJson.name,
           condition:resJson.weather[0].main,
           temp:resJson.main.temp,
           country:resJson.sys.country



         }
       )

  }
    
    const handleSearch = (e)=>{
      e.preventDefault()
      data(query);
    }
    useEffect(()=>{
      data(location);



    }, [location])

  return (
    <div className="App">
      <WeatherCard temp = {weather.temp} condition={weather.condition} country ={weather.country} city={weather.city}/>
        {/* <WeatherCard temp = {20} condition='Clear'  country ='Au' city='Sydney'/>
          <WeatherCard temp = {11}  condition='Clear'  country ='Au' city='Sydney'/> */}
    <form> <input value= {query} onChange={(e)=>setQuery(e.target.value)}/>
    <button  onClick={e=>handleSearch(e) }>Search</button>
    </form>
    
    </div>
  );
}

export default App;
