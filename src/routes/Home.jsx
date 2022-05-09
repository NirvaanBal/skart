import Book from '../components/Book';
import Button from '../components/Button';

function Home({ books }) {
  return (
    <>
      <h1>Skart</h1>
      <div className="books">
        {books.map((book, index) => (
          <figure key={book.id}>
            <Book book={book} />
            <Button id={book.id}>Add to Cart</Button>
          </figure>
        ))}
      </div>
    </>
  );
}

export default Home;
