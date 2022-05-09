import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
