import InputBar from "./components/InputBar/InputBar";
import CardBox from "./components/CardBox/CardBox";
import Card from "./components/Card/Card";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  // start event handlers
  const handleInput = (userInput) => {
    const newCard = {text: userInput}
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDeleteCard = (index) => {
    setCards(prevCards => prevCards.filter((item, currIndex) => currIndex !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Card Shuffle</p>
        <div className="App-card-container">
          <InputBar onEnter={handleInput} />
          <CardBox>
            {cards.map((card, i) => (
              <Card index={i} onDelete={handleDeleteCard} {...card} />
            ))}
          </CardBox>
        </div>
      </header>
    </div>
  );
}

export default App;
