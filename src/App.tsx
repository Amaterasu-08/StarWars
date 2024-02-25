import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./sections/Hero";
import Planet from "./sections/Planet";
import { Route, Routes } from "react-router-dom";
import bgimg from "./assets/images/bg.png"


function App() {
  const mystyle = { backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  minHeight: '100vh', // Set a minimum height to cover the entire viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'} 
  return (
    <main className="relative " style={mystyle}>
      

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
