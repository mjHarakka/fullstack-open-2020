import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Number = (props) => {
  const name = props.person.name
  const number = props.person.number
  return (
    <li>{name} {number}</li>
  )
}

const Persons = (props) => {
  const filterValue = props.filterValue
  const persons = props.persons

  if (filterValue.length > 0) {
    const copy = []

    for (let i = 0; i < persons.length; i++) {

      if (persons[i].name.toLowerCase().includes(filterValue.toLowerCase())) {
        copy.push(persons[i])
      }
    }
    return (copy.map(copy =>
      <Number
        key={copy.name}
        person={copy}
      />))

  } else {
    return (persons.map(person =>
      <Number
        key={person.name}
        person={person}
      />))
  }
}

const PersonForm = (props) => {
  const addNumber = props.addNumber
  const newName = props.newName
  const handleNameChange = props.handleNameChange
  const newNumber = props.newNumber
  const handleNumberChange = props.handleNumberChange

  return (
    <form onSubmit={addNumber}>
      nimi:
        <input
        value={newName}
        onChange={handleNameChange}
      />
      <br />
      numero:<input
        value={newNumber}
        onChange={handleNumberChange}
      />
      <br />
      <button type="submit">lisää</button>
    </form>
  )
}

const Filter = (props) => {
  return (
    <input
      value={props.filterValue}
      onChange={props.handleFiltering}
    />
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setNewFilterValue] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

    let i = 0

    while (i < persons.length) {
      if (persons[i].name === newName) {
        break
      }
      i++
    }

    if (newName.length === 0) {
      alert("Et voi syöttää tyhjää kenttää")
    } else if (i < persons.length) {
      alert(newName + " on jo luettelossa")
    }

    if (i === persons.length && newName.length !== 0) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    console.log(event.target.value)
    setNewFilterValue(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      rajaa näytettäviä:
      <Filter
        filterValue={filterValue}
        handleFiltering={handleFiltering}
      />

      <h2>Lisää uusi</h2>
      <PersonForm
        addNumber={addNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numerot</h2>
      <Persons filterValue={filterValue} persons={persons} />

    </div>
  )

}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)