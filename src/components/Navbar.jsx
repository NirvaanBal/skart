import { Link } from 'react-router-dom';

function Navbar({ items }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart {items === 0 ? `` : `(${items})`}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
