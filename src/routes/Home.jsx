import Book from '../components/Book';

function Home({ books }) {
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
}

export default Home;
