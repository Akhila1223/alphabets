import { useState, useEffect } from "react";
import "./App.css";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function App() {
  const [output, setOutput] = useState("");

  const addLetter = (letter) => {
    setOutput((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setOutput((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^[a-zA-Z]$/.test(event.key)) {
        addLetter(event.key.toUpperCase());
      } else if (event.key === "Backspace") {
        handleBackspace();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Alphabet Buttons</h1>

        <p className="subtitle">
          Click letters (or use your keyboard) to build text.
        </p>

        <div className="output">
          {output || "Your text will appear here..."}
        </div>

        <div className="actions">
          <button onClick={handleBackspace}>Backspace</button>
        </div>

        <div className="keyboard">
          {alphabets.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => addLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;