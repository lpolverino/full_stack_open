

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StadisticsLine = ({text, value}) =>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Stadistics = ({good, neutral,bad }) =>{
  let all = good+ bad + neutral
  let average = all === 0 ? 0 : (good - neutral) / all
  let positive = all === 0 ? 0 : (good / all) * 100 + " %"
  if (all === 0){
    return <p> No feedback given</p>
  }
  return (
    <>
    <table>
      <tbody>
          <StadisticsLine text="good" value={good}></StadisticsLine>
          <StadisticsLine text="neutral" value={neutral}></StadisticsLine>
          <StadisticsLine text="bad" value={bad}></StadisticsLine>
          <StadisticsLine text="all" value={all}></StadisticsLine>
          <StadisticsLine text="avarage" value={average}></StadisticsLine>
          <StadisticsLine text="Positive" value={positive}></StadisticsLine>
      </tbody>
    </table>
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(good + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }
  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <h1> statics </h1>
      <Stadistics good={good} bad={bad} neutral={neutral}></Stadistics>
    </div>
  )
}

export default App