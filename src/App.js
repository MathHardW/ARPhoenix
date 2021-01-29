import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import UserList from './components/UserList';
import CadastrarUser from './components/CadastrarUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Listagem de Usuários</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar Novo Usuário</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/cadastrar">
              <CadastrarUser />
            </Route>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </Router >
    </Provider>

  );
}

export default App;
