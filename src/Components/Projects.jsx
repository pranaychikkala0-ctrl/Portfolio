function Projects() {
  return (
    <section style={{ padding: "2rem", background: "#f5f5f5" }}>
      <h2>My Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>Todo App</li>
        <li>Weather App</li>
      </ul>
    </section>
  );
}

export default Projects;
import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "none",
        background: "#4caf50",
        color: "white",
        cursor: "pointer",
        transition: "transform 0.1s",
      }}
      onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
    >
      Clicked {count} times
    </button>
  );
}

export default CounterButton;
