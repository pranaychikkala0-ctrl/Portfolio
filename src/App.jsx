import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      export default function App() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "20px" }}>
      <h1>Hi, I’m Pranay 👋</h1>
      <p>Welcome to my portfolio!</p>
      <p>This is just a starting version. I’ll add more sections soon!</p>
    </div>
  );
}
<p style={{ fontSize: "20px" }}>Count: {count}</p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

export default App;
