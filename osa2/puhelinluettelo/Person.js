import React, { useEffect } from 'react'
import personService from './services/persons'
import axios from 'axios'

const Person = props => {

    return (
        <li>{props.person.name} {props.person.number}
            <form onSubmit={props.handleDelete}>

                <button type="submit">delete</button>

            </form>
        </li >
    )
}

export default Person