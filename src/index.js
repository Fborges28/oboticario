import React from 'react';
import ReactDOM from 'react-dom';
// Import Bootstrap and its default variables
import 'bootstrap/scss/bootstrap.scss';
import './styles/css/main.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Cadastro from './pages/Cadastro';
import Sistema from './pages/Sistema';
import CadastroDeCompras from './pages/CadastroDeCompras';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CashbackAcumulado from 'pages/CashbackAcumulado';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/sistema" exact={true} component={Sistema} />
      <Route path="/logout" exact={true} component={Logout} />
      <Route path="/cadastro" exact={true} component={Cadastro} />
      <Route
        path="/cadastro-de-compras"
        exact={true}
        component={CadastroDeCompras}
      />
      <Route path="/cashback" exact={true} component={CashbackAcumulado} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
