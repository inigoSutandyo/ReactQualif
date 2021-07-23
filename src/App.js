import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import HomePage from './pages/HomePage/HomePage';
import { Link } from 'react-router-dom';
import FavoritesPage from './pages/FavoritePage/FavoritesPage';

function App() {
  return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">DeSong</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/favorites">Favorites</Link>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/artist/album/:id">
            <AlbumPage></AlbumPage>
          </Route>
          <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route>
          <Route path="/artist/:name">
            <ArtistPage></ArtistPage>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
