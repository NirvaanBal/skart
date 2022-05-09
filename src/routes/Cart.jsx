import Book from '../components/Book';
import Button from '../components/Button';

function Cart({ cart }) {
  return (
    <>
      <h2>Cart</h2>
      {cart && cart.length > 0 ? (
        <div className="items">
          <p>You have {cart.length} item(s) in your cart</p>
          {cart.map((book) => (
            <figure key={book.id}>
              <Book book={book} />
              <Button id={book.id} handleClick={() => ``}>
                Remove from Cart
              </Button>
            </figure>
          ))}
        </div>
      ) : (
        <h3>Your cart is empty!</h3>
      )}
    </>
  );
}

export default Cart;
