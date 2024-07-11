import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl font-bold"> Yigit Bayrak </div>
        <div>
          <Link to="/" className="text-white mr-4"> Ana Sayfa </Link>
          <Link to="/about" className="text-white mr-4"> Hakkımızda </Link>
          <Link to="/contact" className="text-white"> İletişim </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
