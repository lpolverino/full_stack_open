import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote =({tittle, anecdote, votes}) =>{
  return (
    <>
      <h1>{tittle}</h1>
      <p>{anecdote} {votes}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () =>{
    return Math.floor(Math.random() * (anecdotes.length-1) )
  }
  const getNextAnecdote = () =>{
    setSelected(randomAnecdote())
  }
  const handleVote = () =>{
    const copyPoints = [...points]
    copyPoints[selected] +=1
    setPoints(copyPoints)
  }
  const mostVoted = points.reduce(
    (actualMax, current, index) => {
      return current > points[actualMax] ? index: actualMax;
    },0
  );

  return (
    <div>
      <Anecdote tittle="Anecdote of the day" anecdote={anecdotes[selected]} votes ={points[selected]}></Anecdote>
      <Button handleClick={getNextAnecdote} text="another anecdote" ></Button>
      <Button handleClick={handleVote} text="vote"></Button>
      <Anecdote tittle="Anecdote with most votes" anecdote={anecdotes[mostVoted]} votes={points[mostVoted]}></Anecdote>
    </div>
  )
}

export default App
