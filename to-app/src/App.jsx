import "./App.css";
import Navbar from "./components/Navbar.jsx";
import "./components/Navbar.css";
import Home from "./components/Home";
import "./components/Home.css";

import "react-calendar/dist/Calendar.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
