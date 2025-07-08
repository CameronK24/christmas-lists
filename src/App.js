import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;