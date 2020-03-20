import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
          {props.text}
    </button>
  )
  
  const Anecdote = (props) => {
    const anecdote = props.anecdote
    return (
      <p>{anecdote}</p>
    )
  }
  
  const App = (props) => {
    
    const anecdotes = props.anecdotes
    const [points, setPoints] = useState(new Uint8Array(6))
    const [randVal, setRandVal] = useState(Math.floor(Math.random()*(5-0+1)+0))
  
    const [selected, setSelected] = useState(randVal)
  
    const incrementPoints = () => {
      const copy = [...points]
      copy[selected] += 1
  
      setPoints(copy)
    }
  
    return (
      
      <div>
  
        <Anecdote anecdote={anecdotes[selected]} />
        <p>Has {points[selected]} votes</p>
        <Button text="Vote" handleClick={
        () => incrementPoints()}/>
        
        <Button text="Next Anecdote" handleClick={() => setSelected(randVal) + setRandVal(Math.floor(Math.random()*(5-0+1)+0))}/>
        
        {console.log(randVal)}
        {console.log(points)}
        
      </div>
      
    )
    
    
  }
  

    const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)