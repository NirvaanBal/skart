import Book from '../components/Book';
import Button from '../components/Button';

function Home({ books, addToCart }) {
  const found = books.length > 0;

  return found ? (
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
  ) : (
    <div className="home">
      <h2 style={{ marginTop: '180px' }}>No book/author matches your search.</h2>
    </div>
  );
}

export default Home;
