import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <main>
          <Dictionary defaultKeyword="Brown" />
        </main>
      </div>
    </div>
  );
}
