import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/main.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos.jsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
