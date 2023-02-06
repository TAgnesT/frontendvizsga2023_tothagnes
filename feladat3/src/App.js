import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Scifi from './Scifi';
import Humor from './Humor';

function App() {
  return (
    <div>
      <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to="/">Fooldal</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/scifi">Sci-Fi</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/humor">Humor</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

        <Routes>
          <Route path='/' element={<Home />}>Fooldal</Route>
          <Route path='/scifi' element={<Scifi />}>Sci-Fi</Route>
          <Route path='/humor' element={<Humor />}>Humor</Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
