import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {

  return (
    <header className="bg-gray-900 text-white shadow-md h-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип слева */}
        <div className="text-xl font-bold pt-29">
          <Link to="/"><span className="Logo">SaleCARS.kz</span></Link>
        </div>

        {/* Навигация справа */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/abote" className="hover:text-yellow-400 transition">
                Abote
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-yellow-400 transition">
                ContactUS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
