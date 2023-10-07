import { useState } from "react";
import "./styles.css";
import { questions } from "./data";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}



function FlashCards() {

    const [selectedId, setSelectedId] = useState(null);
    
    function handleClick(id) {
        if(selectedId === id)    // deselect
            setSelectedId(null);
        else
            setSelectedId(id);   // select
    }

    return (
        <div className = "flashcards">
            {questions.map((question) => (
                <div key = {question.id} className = {question.id === selectedId ? "selected" : ""} onClick = {() => handleClick(question.id)}>
                    <p>{question.id === selectedId ? question.answer : question.question}</p>
                </div>
            ))}
        </div>
    )
}
