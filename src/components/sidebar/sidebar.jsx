import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Aside = () => (
  <aside className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
    <a href="https://www.google.com/">
      <img src={logo} alt="logo" width="100" height="140" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/addRoom">Add Room</Link>
        </li>
        <li>
          <Link to="/reservations">My Reservations</Link>
        </li>
        <li>
          <Link to="/addreservation">Add Reservation</Link>
        </li>
        <li>
          <Link to="/logout">LogOut</Link>
        </li>
      </ul>
    </div>
  </aside>
);

export default Aside;
