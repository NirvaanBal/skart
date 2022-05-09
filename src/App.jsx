import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {
  return (
    <>
      <header>Navbar</header>
      <main>
        <Router>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
