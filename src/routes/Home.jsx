import Book from '../components/Book';
import Button from '../components/Button';

function Home({ books, addToCart }) {
  return (
    <div className="home">
      <h2>All Books</h2>
      <section className="books">
        {books.map((book) => (
          <figure key={book.id}>
            <Book book={book} width={400} />
            <Button id={book.id} handleClick={addToCart}>
              Add to Cart
            </Button>
          </figure>
        ))}
      </section>
    </div>
  );
}

export default Home;
