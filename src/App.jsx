import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isCharacter, setIsCharacter] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [password, setPassword] = useState("");

  const myref = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [length, isCharacter, isNumber]);

  function generatePassword() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isCharacter) {
      str += "!@#$%^&*()";
    }
    if (isNumber) {
      str += "1234567890";
    }
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * 75);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }

  function copyPassword() {
    window.navigator.clipboard.writeText(password);
    myref.current.select();
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-900">
        <h1>Password Generator</h1>
        <div className="flex">
          <input
            type="text"
            contentEditable="false"
            placeholder="password"
            value={password}
            ref={myref}
          />
          <button type="submit" onClick={() => copyPassword()}>
            Copy
          </button>
        </div>
        <div className="flex">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={isCharacter}
            onChange={() => setIsCharacter((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
          <input
            type="checkbox"
            defaultChecked={isNumber}
            onChange={() => setIsNumber((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
      </div>
    </>
  );
}

export default App;
