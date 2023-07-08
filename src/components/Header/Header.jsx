// import * as S from './Searchbar.styled';
import { NavLink } from 'react-router-dom';

export const Header = ({ showModal }) => {
  return (
    <nav>
      <ul>
        <NavLink aria-current="page" to="/">
          Home
        </NavLink>

        <NavLink aria-current="page" to="/movies">
          Movies
        </NavLink>

        {/* <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link text-white "
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/news">
              News
            </NavLink>
            <NavLink className="nav-link text-white" to="/todo">
              Todo
            </NavLink>
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button> */}
      </ul>
    </nav>
  );
};
