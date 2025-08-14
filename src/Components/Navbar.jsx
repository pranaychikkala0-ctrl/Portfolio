function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <h1>My Portfolio</h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
