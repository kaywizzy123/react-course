import { useState, useCallback, useEffect, useRef } from "react";
import { Copy } from "lucide-react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  const passwordRef = useRef(null);

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 bg-neutral-800 my-8 text-orange-500">
      <h1 className="text-white text-center text-3xl my-3 font-bold">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none bg-white w-full py-1 px-3 placeholder:text-neutral-400"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          <Copy size={20} strokeWidth={2} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id="number"
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id="char"
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
