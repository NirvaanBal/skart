import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Cart from './routes/Cart';
import NotFound from './routes/NotFound';
import data from './data.json';

function App() {
  const [books, setBooks] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    const bookId = +e.target.dataset.id;
    const book = books.find((book) => book.id === bookId);
    const bookInCart = cart.find((book) => book.id === bookId);

    if (bookInCart) {
      bookInCart.count += 1;
      setCart(
        cart.filter((item) => item.id !== bookInCart.id).concat(bookInCart)
      );
    } else {
      const bookObj = { ...book, count: 1 };
      setCart(cart.concat(bookObj));
    }
  };

  const removeFromCart = (e) => {
    const bookId = +e.target.dataset.id;
    setCart([...cart].filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <header>
        <h1>Skart</h1>
        <Navbar items={cart.length > 0 ? cart.length : 0} />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home books={books} addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
