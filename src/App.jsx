import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './App.css';
import Home from './pages/home/home'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />

      </Router>
  );
}

export default App;
