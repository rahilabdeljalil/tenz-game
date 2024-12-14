import { useState } from "react";
import Die from "./die";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [dice, setDice] = useState(() => getRandomDice());
  const gameWon = dice.every((die) => die.isHeld && die.value === dice[0].value);
  // here am creating an array of 10 empty slot like this [ , , , ]
  //then am feeling each of those slots with 0
  //and then map over the 0 andd replace them with an object
  //of value and isheld and id now each slots has an object on it own
  function getRandomDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function holdDice(id) {
    setDice((prevDice) => prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
  }

  function rollDice() {
   if(gameWon){
    setDice(getRandomDice())}else{
      setDice(prevDice => prevDice.map(die => die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}))
    };
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld}  holdDice={()=> holdDice(dieObj.id)} />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
