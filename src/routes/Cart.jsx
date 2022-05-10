import Book from '../components/Book';
import Button from '../components/Button';

function Cart({ cart, removeFromCart, changeCount }) {
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
    </div>
  );
}

export default Cart;
