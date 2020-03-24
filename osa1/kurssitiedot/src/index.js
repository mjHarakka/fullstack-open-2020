import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
    <div>
        <h2>{props.course}</h2>
    </div>
    )
}

const Content = (props) => {
    const parts = props.parts

    const total = parts.map(part => part.exercises).reduce((s, p) => s + p)

    console.log(total)

    return (
        <div>
          {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
          <b>

          Total of {total} exercises       

          </b>
        </div>
    )
}

const Part = (props) => {
  
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>    
  )

}

const Course = (props) => {
  const course = props.course
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))