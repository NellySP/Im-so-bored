import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Button buttonText={"Header!"}></Button>
      </header>
      <body className="app-body">
        <Button buttonText={"Body!"}></Button>
      </body>
      <footer className="app-footer">
        <Button buttonText={"Footer!"}></Button>
      </footer>
      <p>test</p>
    </div>
  );
}

export default App;
