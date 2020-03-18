import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
    <div
        ><h2>{props.course}</h2>
    </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>{props.part}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>{props.numExercises}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <Content part={props.part}/>
            <Total numExercises={props.numExercises} />
        </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part part={part1} numExercises={exercises1}/>
      <Part part={part2} numExercises={exercises2}/>
      <Part part={part3} numExercises={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))