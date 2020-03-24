import React, { useState } from 'react'



const App = () => {
    const [ persons, setPersons] = useState([
        { id: 1, name: 'Arto Hellas' }
    ])

    const [ newName, setNewName ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        
        const personObject = {
            id: persons.length + 1,
            name: newName 
        }
        
        console.log('button clicked', event.target)
        setPersons(persons.concat(personObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
            <h2>Numbers</h2>
            <ul>
            {persons.map((person) => <li key={person.id}> {person.name}</li>)}
            </ul>
        </div>
    )

}

export default App