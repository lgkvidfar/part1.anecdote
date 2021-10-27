import React, { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

const Buttons = (props) => {
   return (
     <div>
       <button onClick={props.handleVote}>vote</button>
       <button onClick={props.handleClick}>randomize</button>
     </div>
   )
}

const Anecdote = ({number}) => {
  return (
    <div>
      <p>
        {anecdotes[number]}
      </p>
    </div>
  )
}

const Votes = ({votes}) => <p>has {votes} votes</p>

const anecdotes = [ 
  'If it hurts, do it more often', 
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
]

const App = () => {
  const [random, setRandom] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const highestVotes = Math.max(...votes)
  const highestAnecdotes = anecdotes[votes.indexOf(highestVotes)]
  const highestIndex = votes.indexOf(highestVotes)

  const handleClick = () => {
    setRandom(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[random] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text="daily random anecdote"/>
      <Anecdote number={random} anecdotes={anecdotes}/>
      <Votes votes={votes[random]}/>
      <Buttons handleVote={handleVote} handleClick={handleClick}  anecdotes={anecdotes} />
      <Header text="most-voted:"/>
      <Anecdote number={highestIndex} anecdotes={highestAnecdotes}/>
      <Votes votes={highestVotes}/>
    </div>
  )
}

export default App