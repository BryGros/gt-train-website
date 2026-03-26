import Header from "./components/Header";
import EformsCourses from "./components/EformsCourses";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <EformsCourses />
      </main>
      <footer className="app-footer">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
