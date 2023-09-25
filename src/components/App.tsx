import { Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
function App() {
  return (
    <div className="App bg-[rgb(15,24,36)] min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
