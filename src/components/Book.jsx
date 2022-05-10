function Book({ book, width, cart }) {
  const bookImage = `images/${book.title
    .split(' ')
    .join('-')
    .toLowerCase()}.jpg`;

  return (
    <>
      <img loading="lazy" src={bookImage} width={width} />
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
