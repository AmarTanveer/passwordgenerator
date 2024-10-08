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
      <div className="w-screen h-screen bg-zinc-900 text-zinc-50 flex items-center justify-center">
        <div className="container bg-slate-500 rounded-lg p-6 w-[450px]">
          <h1 className="text-2xl mt-5 mb-5 text-center">Password Generator</h1>
          <div className="flex mb-5">
            <input
              type="text"
              contentEditable="false"
              placeholder="password"
              value={password}
              ref={myref}
              className="w-full p-2 rounded-l-md bg-zinc-200 text-zinc-900"
            />
            <button
              type="submit"
              onClick={() => copyPassword()}
              className="bg-blue-500 text-white p-2 rounded-r-md"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="length">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(event) => setLength(event.target.value)}
              className="mx-4"
            />
          </div>
          <div className="flex items-center gap-5 mt-3">
            <div className="flex items-center gap-2">
              <label htmlFor="character">Character</label>
              <input
                type="checkbox"
                defaultChecked={isCharacter}
                onChange={() => setIsCharacter((prev) => !prev)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                defaultChecked={isNumber}
                onChange={() => setIsNumber((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
