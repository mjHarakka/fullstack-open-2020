import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
const API_URL = "https://restcountries.eu/rest/v2/all"

const SearchForm = (props) => {
  return (
    <div>
      Find countries: <input value={props.searchValue} onChange={props.handleSearch} />
    </div>
  ) 
}

const CountryView = (props) => {
  const country = props.country 
  return (
    <div>
    <h1>{country.name}</h1>
    <p>{country.capital}</p>
    <p>{country.population}</p>

    <h2>{country.capital}</h2>

    <ul>
      {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
    </ul>

    <img src={country.flag} width="130x" />

    </div>
  )
}



const Countries = (props) => {

  if (props.results.length > 10) {
    return (
      <p>Too many search results</p>
    )
  } else {
    if (props.results.length !== 1) {
      return (
      
        <ul>
          {props.results.map(result => <li key={result.alpha3Code} >{result.name}</li>)}
        </ul>
      )
    } else {
      return (
      <CountryView country={props.results[0]} />
      )
    }
    
  }
  
}


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  const results = countries.filter(country => country.name.indexOf(searchValue) != -1)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'persons')

  return (
    <div>
    <SearchForm searchValue={searchValue} handleSearch={handleSearch} />
    <Countries results={results}/>
    

    </div>
  )
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)