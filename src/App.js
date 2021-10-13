import './App.css';
import Home from './pages/home';
import Nav from './components/nav'
import { Route } from 'react-router-dom'

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

    </div>
  );
}

export default App;
