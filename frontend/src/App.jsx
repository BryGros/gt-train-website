import { useState } from "react";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Gideon Taylor Training</h1>
        <p>Build. GROW. Serve.</p>
      </header>
      <main>
        <Main />
      </main>
      <footer className="app-footer">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
