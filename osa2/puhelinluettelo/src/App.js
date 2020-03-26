import React, { useState } from 'react'

const Filter = (props) => {
    return (
        <div>
            filter shown with 
            <input value={props.filterValue} onChange={props.handleFiltering}/>
        </div>
    )
}

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterValue, setNewFilterValue] = useState('')
    const [ filteredPersons, setFilteredPersons] = useState([])

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
            id: persons.length + 1,
            name: newName,
            number: newNumber
        }
        
        if (persons.filter(e => e.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
        } else {
            console.log('button clicked', event.target)
            setPersons(persons.concat(personObject))
            setNewName('')
        }
        
    }

    const handleFiltering = (event) => {
        setNewFilterValue(event.target.value)
        setFilteredPersons(persons.filter(person => person.name.indexOf(filterValue)))
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    console.log(filterValue)

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter filterValue={filterValue} handleFiltering={handleFiltering}/>

            <h2>Add a new</h2>

            <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((person) => <li key={person.name}> {person.name} {person.number}</li>)}
            </ul>
            
           
        </div>
    )

}

export default App