import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.function}>{props.text}</button>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const all = good + neutral + bad
    const avg = good + neutral / all 

    return (
       
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={all} />
                    <StatisticLine text="average" value={avg} />
                </tbody>    
            </table>
            
            
       
    )
}

const StatisticLine = (props) => {

    return (
       <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //const values = {good,neutral,bad}

    return (
        <div>
            <h1>give feedback</h1>

            <Button function={() => setGood(good + 1)} text={"good"}></Button>
            <Button function={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
            <Button function={() => setBad(bad + 1)} text={"bad"}></Button>
            
            <h1>statistics</h1>

           <Statistics good={good} neutral={neutral} bad={bad}/>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))