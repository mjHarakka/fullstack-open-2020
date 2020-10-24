import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = props => {
    return (
        <div>
            <button onClick={props.handleClick} style={{ float: 'left' }}>{props.text}</button>
        </div>
    )
}

const Statistics = props => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    const all = good + neutral + bad
    const pos = good / all + " %"
    const avg = ((1 * good) + (-1 * bad)) / all + " %"

    if (!all) {
        return (
            <div>no feedback given</div>
        )
    } else {

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

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" handleClick={() => setGood(good + 1)} />
            <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" handleClick={() => setBad(bad + 1)} />
            <br />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
