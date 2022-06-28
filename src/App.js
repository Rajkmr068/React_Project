import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  const apiKey ="c9cc699a265d2267c7b2004b4e0a2056"
  const [inputCity,setInputCity] =useState("")
  const [data, setData] = useState({})

  const getWeatherDetails = (cityName) =>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" +cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }
  const handleChangeInput= (e) => {
    setInputCity(e.target.value)

  }

  const handleSearch = () =>{
    getWeatherDetails(inputCity)
    
  }

  useEffect(()=>{
    getWeatherDetails("New Delhi")
  },[])

  

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">

        <input type="text" className="form-control" onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button"
         onClick={handleSearch}
        >Search</button>
       
        </div>
      </div>

      <div className="col -md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">

          <img className="weatherIcon" 
          src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Images.png"

          />
          <h5 className="weathercity">
          {data?.name }
          </h5>
          
          <h6 className="weatherTemp">{((data.main?.temp) -273.15).toFixed(2) }°c</h6>
        </div>
      </div>
    </div>
  
     
  );
}

export default App;
