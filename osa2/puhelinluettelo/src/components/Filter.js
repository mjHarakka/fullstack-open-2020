import React from 'react'

const Filter = (props) => {
    return (
        <input
            value={props.filterValue}
            onChange={props.handleFiltering}
        />
    )
}

export default Filter