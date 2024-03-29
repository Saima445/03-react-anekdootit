import { useState } from "react";
import "./Reset.css";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  //arvotaan random anekdootti taulukosta
  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };
  //funktio äänen antamiselle
  const voteThisAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    console.log(newVotes);
  };
  //käydään läpi kaikki äänet ja näytetään se anekdootti, jolla on tällä hetkellä eniten ääniä äänimäärän kera
  const mostVotes = () => {
    let mostVoted = 0;
    let maxVotes = votes[0];

    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        mostVoted = i;
      }
    }
    if (maxVotes === 0) {
      return <p>No votes have been given yet</p>;
    } else {
      return (
        <section>
          <p>{anecdotes[mostVoted]}</p>
          <p>Has {maxVotes} votes</p>
        </section>
      );
    }
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <section className="buttonSection">
        <Button handleClick={voteThisAnecdote} text="vote" />
        <Button handleClick={handleNextAnecdote} text="next anecdote" />
      </section>
      <h1>Anecdote with most votes</h1>
      {mostVotes()}
    </>
  );
};

export default App;
