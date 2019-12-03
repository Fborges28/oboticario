import React from 'react';
import MainView from 'layout/MainView';
import RegisterForm from 'components/RegisterForm';

class Sistema extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainView pageName="login">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Informações do sistema</h1>
            <p class="lead">Nome: Felipe Borges</p>
            <p class="lead">E-mail: fborges28@outlook.com</p>
            <a
              class="btn btn-primary btn-lg"
              target="_blank"
              href="https://github.com/fborges28"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
      </MainView>
    );
  }
}

export default Sistema;
