import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content  = (props) => {
  return  <p>{props.parte}</p>
}



const Total = (props) => {
  return <p>Number of exercises {props.exercise}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parte1 = (part1, exercises1);
  const parte2 = (part2, exercises2);
  const parte3 = (part3, exercises3);

  return (
    <div>
      <Header course = {course}/>
      <Content parte={part1}/>
      <Content parte={part2}/>
      <Content parte={part3}/>
      <Total exercise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))