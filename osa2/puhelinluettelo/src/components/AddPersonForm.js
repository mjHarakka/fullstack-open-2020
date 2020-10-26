import React from 'react'

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <div>
                <h2>Add a new</h2>
                <div>
                    name:
                        <input
                        value={props.newName}
                        onChange={props.handleNameChange}
                    />
                </div>
                <div>
                    number:
                        <input
                        value={props.newNumber}
                        onChange={props.handleNumberChange}
                    />
                </div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm