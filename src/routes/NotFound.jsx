import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>
        The page you are looking for does not exist.{' '}
        <Link to="/">Visit Home page.</Link>
      </p>
    </>
  );
}

export default NotFound;
