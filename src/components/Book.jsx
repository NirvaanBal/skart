function Book({ book }) {
  const bookImage = `../src/assets/${book.title
    .split(' ')
    .join('-')
    .toLowerCase()}.jpg`;

  return (
    <figure>
      <img src={bookImage} width="300" />
      <figcaption>
        <h3>
          {book.title} ({book.author})
        </h3>
        <h4>
          {'\u20B9'} {book.price}
        </h4>
        <p>{`${book.description.substring(0, 50)}...`}</p>
      </figcaption>
    </figure>
  );
}

export default Book;
