function Home({ books }) {
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book.id}>
          {book.title}
        </div>
      ))}
    </div>
  );
}

export default Home;
