import React,{useState} from 'react'
import axios from 'axios';


const App = () => {
  const [Location, setLocation] = useState('');
  const [Data, setData] = useState({});
  const [first, setfirst] = useState({});

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=895284fb2d2c50a520ea537456963d9c`;
  const SearchLocation=async(event)=>{
    if(event.key==='Enter'){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4348b0769amsh4c2bedcc282e801p18e2fbjsnc09c6fe76cf4',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      axios.get(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${Location}`, options).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      axios.get(url).then((response)=>{
        setfirst(response.data)
        console.log(response.data)
      })
    }
  }
  return (
    <div className="app">
      <div className='search'>
        <input value={Location}  placeholder="Enter the location" onChange={event => setLocation(event.target.value)} onKeyPress={SearchLocation}/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <text style={{fontSize: '45px'}}>{Location}</text>
          </div>
          <div className="temp">
            {first.main?<h1>{Data.temp}°C</h1>:''}
          </div>
          <div className="description">
            {first.weather ? <text style={{fontSize: '60px'}}>{first.weather[0].main}</text> : null}
          </div>
        </div>
          <div className="bottom">
            <div className="feels">
              {first.main?<p className='bold'>{Data.feels_like}°C</p>:''} 
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {first.main ?<p className='bold'>{Data.max_temp}°C</p>:''} 
              <p>Max</p>
            </div>
            <div className="humidity">
              {first.main ?<p className='bold'>{Data.min_temp}°C</p>:''} 
              <p>Min</p>
            </div>
            <div className="humidity">
              {first.main ?<p className='bold'>{Data.humidity}%</p>:''} 
              <p>Humidity</p>
            </div>
            <div className="wind">
              {first.wind?<p className='bold'>{first.wind.speed.toFixed()} MPH</p>:''}
              <p>Wind Speed</p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default App