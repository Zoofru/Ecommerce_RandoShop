import './App.css';
import Home from './pages/home';
import Nav from './components/nav'
import { Route } from 'react-router-dom'
import ItemPage from './pages/itempage';

function App() {
  return (
    <div className="App">
      <Nav />

      <Route
        exact
        path='/'
        render={() => (
          <Home />
        )}
      />

      <Route
        exact
        path='/:itemId'
        render={rProps => (
          <ItemPage itemId={rProps.match.params.itemId} />
        )}
      />

    </div>
  );
}

export default App;
