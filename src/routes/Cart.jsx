import Book from '../components/Book';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart, changeCount, placeOrder }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    if (cart.length > 0) {
      let price = 0;
      for (let item of cart) {
        price += +item.price * +item.count;
      }

      return price;
    }
  };

  const goHome = () => {
    placeOrder();
    navigate('/');
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        <section className="items">
          {cart.map((book) => (
            <figure key={book.id}>
              <Book book={book} width={100} cart={true} />
              <div>
                <Button id={book.id} handleClick={changeCount}>
                  -
                </Button>
                {book.count}
                <Button id={book.id} handleClick={changeCount}>
                  +
                </Button>
              </div>
              <Button id={book.id} handleClick={removeFromCart}>
                Remove from Cart
              </Button>
            </figure>
          ))}
        </section>
      ) : (
        <h3>Your cart is empty!</h3>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>
            Total: {'\u20B9'}
            {calculateTotal()}
          </h3>
          <Button handleClick={goHome}>Place Order</Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
