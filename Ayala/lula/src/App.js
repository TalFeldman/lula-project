import logo from './logo.svg';
import './App.css';
import rachel1 from './img/Rachel1.jpeg';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const EngToHeb = () => {
    const results = [];

    for (let i = 0; i < input.length; i++) {
      const c = input[i];

      switch(c){
        case 'p':
        case 'P':
          results.push("פ");
          break;
        case 'o':
        case 'O':
          results.push("ם");
          break;
        case "i":
        case "I":
          results.push("ן");
          break;
        case "u":
        case 'U':
          results.push("ו");
          break;
        case 'y':
        case 'Y':
          results.push("ט");
          break;
        case 't':
        case 'T':
          results.push("א");
          break;
        case 'r':
        case 'R':
          results.push("ר");
          break;
        case 'e':
        case 'E':
          results.push("ק");
          break;
        case ';':
          results.push("ף");
          break;
        case 'l':
        case 'L':
          results.push("ך");
          break;
        case 'k':
        case 'K':
          results.push("ל");
          break;
        case 'j':
        case 'J':
          results.push("ח");
          break;
        case 'h':
        case 'H':
          results.push("י");
          break;
        case 'g':
        case 'G':
          results.push("ע");
          break;
        case 'f':
        case 'F':
          results.push("כ");
          break;
        case 'd':
        case 'D':
          results.push("ג");
          break;
        case 's':
        case 'S':
          results.push("ד");
          break;
        case 'a':
        case 'A':
          results.push("ש");
          break;
        case '.':
          results.push('ץ');
          break;
        case ',':
          results.push('ת');
          break;
        case 'm':
        case 'M':
          results.push('צ');
          break;
        case 'n':
        case 'N':
          results.push('מ');
          break;
        case 'b':
        case 'B':
          results.push('נ');
          break;
        case 'v':
        case 'V':
          results.push('ה');
          break;
        case 'c':
        case 'C':
          results.push('ב');
          break;
        case 'x':
        case 'X':
          results.push('ס');
          break;
        case 'z':
        case 'Z':
          results.push('ז');
          break;        
        default:
          results.push(c);
      }

      setOutput(results);
      setInput('');
    }
  }

  const hebToEng = () => {
    const results = [];

    for (let i = 0; i< input.length; i++) {
      const c = input[i];

      switch (c) {
        case "פ":
          results.push('p');
          break;
        case "ם":
          results.push('o');
          break;
        case "ן":
          results.push('i');
          break;       
        case "ו":
          results.push('u');
          break;
        case "ט":
          results.push('y');
          break;
        case "א":
          results.push('t');
          break;
        case "ר":
          results.push('r');
          break;
        case "ק":
          results.push('e');
          break;
        case "'":
          results.push("w");
          break;
        case "/":
          results.push('q');
          break;
        case "ך":
          results.push('l');
          break;
        case "ל":
          results.push("k");
          break;
        case "ח":
          results.push('j');
          break;
        case "י":
          results.push('h');
          break;
        case "ע":
          results.push("g");
          break;
        case "כ":
          results.push('f');
          break;
        case "ג":
          results.push('d');
          break;
        case "ד":
          results.push("s");
          break;
        case "ש":
          results.push('a');
          break;
        case "צ":
          results.push('m');
          break;
        case "מ":
          results.push('n');
          break;
        case "נ":
          results.push('b');
          break;
        case "ה":
          results.push("v");
          break;
        case "ב":
          results.push('c');
          break;
        case "ס":
          results.push('x');
          break;
        case "ז":
          results.push('z');
          break;
        default:
          results.push(c);
          

      }
    }

    setOutput(results);
    setInput('');
  }


  return (
    <div className="App">
      <input
        type="text"
        id="exampleInput"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={hebToEng}>מעברית לאנגלית</button>
      <button onClick={EngToHeb}>מאנגלית לעברית</button>
      <p>You entered: {output}</p>
    </div>
  );
}

export default App;
