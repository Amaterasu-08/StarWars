import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./sections/Hero";
import Planet from "./sections/Planet";
import { Route, Routes } from "react-router-dom";
import background from "./assets/images/bc.png";

function App() {
  const mystyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh", // Set a minimum height to cover the entire viewport
  };
  return (
    <main style={mystyle}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/planet" element={<Hero />} />
        <Route path="/planet/:planetId" element={<Planet />} />
      </Routes>
    </main>
  );
}

export default App;
