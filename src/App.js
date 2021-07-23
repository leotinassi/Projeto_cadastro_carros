
//import Switch from 'react-bootstrap/esm/Switch';
import './App.css';
import BarraNavegacao from './Comp/BarraNavegacao';
import Footer from './Comp/Footer';
import Home from './Comp/Home';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import ListaUsuarios from './Comp/ListaUsuarios';
import CreateUpdateUsuario from './Comp/Servicos/CreateUpdateUsuario';

function App() {
  return (
    <div className="App">
      <Router>
      <BarraNavegacao/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/usuarios" component={ListaUsuarios}></Route>
        <Route path= "/usuario/:id" component={CreateUpdateUsuario}></Route>

      </Switch>
      <Footer/>
      </Router>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
