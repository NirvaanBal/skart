import Book from '../components/Book';
import Button from '../components/Button';

function Cart({ cart }) {
  return (
    <>
      <h2>Cart</h2>
      <div className="items">
        {cart.map((book) => (
          <figure key={book.id}>
            <Book book={book} />
            <Button id={book.id} handleClick={() => ``}>
              Remove from Cart
            </Button>
          </figure>
        ))}
      </div>
    </>
  );
}

export default Cart;
