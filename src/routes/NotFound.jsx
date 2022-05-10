import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2 style={{ marginTop: '100px' }}>404</h2>
      <p>
        The page you are looking for does not exist.{' '}
        <Link to="/">Visit Home </Link>page.
      </p>
    </>
  );
}

export default NotFound;
