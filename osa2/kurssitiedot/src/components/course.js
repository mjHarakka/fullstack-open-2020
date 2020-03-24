import React from 'react'

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

export default Course