import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Albums';
import TodoFeature from './features/Todos';

function App() {
  return (
    <div className="App">
      <h2>Learn React JS basic</h2>

      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>

      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>

      <Switch>
        <Redirect from="/home" to="/" exact />
        {/* <Redirect form="/post-list/:postId" to="/posts/:postId" exact /> */}

        <Route path="/" component={TodoFeature} exact />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;