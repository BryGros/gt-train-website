import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
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
