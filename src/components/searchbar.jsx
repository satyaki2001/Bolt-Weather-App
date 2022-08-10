import React, {useState, useEffect} from "react";

function SearchBar(){
 
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kolkata");

  useEffect( ()=>{
    const fetchApi = async ()=> {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search.trim()}&appid=a0edf4ed89ca21f579aeb0c8eebced78&units=metric`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);

    };
    
    fetchApi();

  },[search])

    return(
<div>
<form className="input-group mb-3 w-50 mx-auto"  role="search">
<input type="text" className="form-control " placeholder="Search your City" aria-label="Search your City" aria-describedby="button-addon2" onChange={(event) =>{setSearch(event.target.value)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} />

</form>
 {!city ? (
  <p>No Data Found</p>
 ) : (
  <div>
  <div className="city-name mx-auto row">
<div className="col">
<i className="fa-solid fa-location-dot">  
</i><p>{search.charAt(0).toUpperCase()+search.slice(1)}</p>
</div>
</div>
<div className="info">
<p className="temp">{city.temp}° C</p>
<h2>Feels Like {city.feels_like}° C</h2>
<h3>Max: {city.temp_max}° C | Min: {city.temp_min}° C</h3>
<h3>Humidity: {city.humidity} %  |  Pressure: {city.pressure} Pa</h3>
</div>
</div>

 ) 
 }
</div>
    )
}

export default SearchBar