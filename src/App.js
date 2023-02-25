import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import Home from "./pages/Login";
import AddUser from "./users/AddUser";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/todo" element={<Item/>}/>
      </Routes>
    </Router>
      
      {/*<Item />*/}
    </div>
  );
}

export default App;
