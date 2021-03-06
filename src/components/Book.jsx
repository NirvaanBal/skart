function Book({ book, width, cart }) {
  const imageTitle = book.title.split(' ').join('-').toLowerCase();
  const bookImage = `/skart/${imageTitle}.jpg`;

  return (
    <>
      <img loading="lazy" src={bookImage} alt={book.title} width={width} />
      <figcaption>
        <h3>
          {book.title} {!cart && book.author && `(${book.author})`}
        </h3>
        <h4>
          {'\u20B9'}
          {!cart ? `${book.price}` : `${book.price * book.count}`}
        </h4>
      </figcaption>
    </>
  );
}

export default Book;
