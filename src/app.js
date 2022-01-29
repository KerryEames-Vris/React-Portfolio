import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Card from "./components/Card";
import "./styles/output.css";

function App() {
  return (
    <div className="bg-[url('./LavenderFlowers.jpg')] pt-28">
      <Navbar />
      <About />
      <Card />
    </div>
  );
}

export default App;
