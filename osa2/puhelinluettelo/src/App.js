import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Person from './Person'
import './index.css'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="success">
            {message}
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [results, setResults] = useState([])
    const [successMessage, setsuccessMessage] = useState(null)

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
            name: newName,
            number: newNumber
        }

        personService
                .create(personObject)
                .then(returnedPerson => {
                    setNewName('')
                    setNewNumber('')
                }).then(personService.getAll().then(initialPersons => {
                    setResults(initialPersons)
                }))
            setsuccessMessage(`Added ${newName} succesfully`)
            setTimeout(() => {
                setsuccessMessage(null)
            }, 5000)
    }

    useEffect(() => {
        personService 
          .getAll()
            .then(initialPersons => {
            setResults(initialPersons)
          })
    }, [])
    
    const handleNameChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
        console.log(event.target.value)
    }

    const handleNumberChange = (event) => {
        event.preventDefault()
        setNewNumber(event.target.value)
        console.log(event.target.value)
    }

    const handleFiltering = (event) => {
        event.preventDefault()
        setFilterValue(event.target.value)
    }

    const handleDelete = (id) => {
        console.log('works')

        if (window.confirm("Do you want to delete person?")) {
            console.log('deleted item')
            personService.remove(id)
        }

    }

    useEffect(() => {
        setResults(results.filter(person => person.name.toLowerCase() === filterValue.toLowerCase))
    }, [])

    const rows = () => {
        return (
            results.map(person =>

                <Person
                    key={person.id}
                    person={person}
                    handleDelete={handleDelete.bind(this, person.id)}
                />
            )
        )
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={successMessage} />
            filter shown with
            <Filter
                filterValue={filterValue}
                handleFiltering={handleFiltering}
            />

            <PersonForm
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
                addPerson={addPerson}
            />

            <h2>Numbers</h2>
            <ul>
                {rows()}
            </ul>

        </div>
    )

}

export default App