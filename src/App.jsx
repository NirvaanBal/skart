import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
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

  const updateCount = (e) => {
    const action = e.target.innerText === '-' ? 'dec' : 'inc';
    const bookId = +e.target.dataset.id;
    const book = cart.find((book) => book.id === bookId);
    if (action === 'dec') book.count -= 1;
    else book.count += 1;

    if (book.count < 1) removeFromCart(e);
    else setCart([...cart]);
  };

  const placeOrder = () => setCart([]);

  const searchBook = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchedBooks = data.filter((book) => {
      if (
        book.title.toLowerCase().includes(searchValue) ||
        (book.author && book.author.toLowerCase().includes(searchValue))
      ) {
        return book;
      }
    });

    setBooks(searchedBooks);
  };

  return (
    <Router>
      <header>
        <h1>Skart</h1>
        <input
          type="search"
          id="search"
          autoFocus
          onInput={searchBook}
          placeholder="Search books/authors..."
        />
        <Navbar items={cart.length > 0 ? cart.length : 0} />
      </header>
      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home books={books} addToCart={addToCart} />}
          />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/skart" element={<Navigate to="/home" />} />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                changeCount={updateCount}
                placeOrder={placeOrder}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
