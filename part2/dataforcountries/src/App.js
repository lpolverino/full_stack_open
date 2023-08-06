import Filter from "./components/Filter";
import Countries from "./components/Countries"
import axios from 'axios'
import { useState, useEffect } from "react";


function App() {
  const [countriesFilter, setCountriesFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(()=>{
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response =>{
        setCountries(response.data)
      })
      .catch(error =>
        console.log(`${error} has occured`))
  },[])

  useEffect(() =>{
    console.log('filtering');
    const filteredCoutries = countries.filter(country => country.startWith(countriesFilter))
    console.log(filteredCoutries);
    if(filteredCoutries.length === 1){
     // axios
      // .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filterCountries}`)
     //   setCountryInfo()
    }else{
      if(filteredCoutries.length <= 10){

      }
      else{

      }
    }
  },[countriesFilter])

  const filterCountries = (event) =>{
    setCountriesFilter(event.target.value)
  }
  return (
    <div>
      <Filter countryFilter={countriesFilter} onChangeHandler={filterCountries}></Filter>
      <Countries></Countries>
    </div>
  )
}

export default App;
