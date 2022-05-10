import Book from '../components/Book';
import Button from '../components/Button';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        <section className="items">
          {cart.map((book) => (
            <figure key={book.id}>
              <Book book={book} width={100} cart={true} />
              <div>
                <Button>-</Button>
                {book.count}
                <Button>+</Button>
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
