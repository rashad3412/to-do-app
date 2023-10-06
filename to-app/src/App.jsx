import "./App.css";
import Navbar from "./components/Navbar.jsx";
import "./components/Navbar.css";
import Home from "./components/Home";
import "./components/Home.css";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
