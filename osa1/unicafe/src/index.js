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
    let avg = good + neutral * 0 + bad *-1 / all
    const pos = (good / all * 100) + " % "

    if (isNaN(avg)) {
        avg = 0
    }

    return (
       
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={all} />
                    <StatisticLine text="average" value={avg} />
                    <StatisticLine text="positive" value={pos} />
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

    let stat = "No stats"

    if (good !== 0 || neutral !== 0 || bad !== 0) {
        stat = <Statistics good={good} neutral={neutral} bad={bad}/>
    } 

    return (
        <div>
            <h1>give feedback</h1>

            <Button function={() => setGood(good + 1)} text={"good"}></Button>
            <Button function={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
            <Button function={() => setBad(bad + 1)} text={"bad"}></Button>
            
            <h1>statistics</h1>
            {
                
            stat


            }

           
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))