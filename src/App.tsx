import React, { useState } from "react";
import "./sass/main.scss";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Destination from "./Components/Pages/Destination";
import Crew from "./Components/Pages/Crew";
import Technology from "./Components/Pages/Technology";

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Router>
      <NavBar props={{ isOpen, setOpen }} />
      <Routes>
        <Route path="/" element={<Home props={{ isOpen, setOpen }} />}></Route>
        <Route
          path="/destination"
          element={<Destination props={{ isOpen, setOpen }} />}
        ></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </Router>
  );
}

export default App;