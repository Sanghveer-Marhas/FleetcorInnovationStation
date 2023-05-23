import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import CreatePost from "./pages/Create/CreatePost";
import Login from "./pages/LoginPage/Login";
import Forum from "./pages/Forum/Forum";
import MyIdeas from "./pages/MyIdeas/MyIdeas";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/myideas" element={<MyIdeas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
