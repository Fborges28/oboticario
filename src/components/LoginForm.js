import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('oboticario_user', 'true');
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" push={true} />;
    }

    return (
      <form
        className="form login-form"
        onSubmit={event => this.onSubmit(event)}
      >
        <div className="form-group">
          <h3 className="text-center form__title">Bem-vindo(a)</h3>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Digite sua senha"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block form__submit"
        >
          Entrar
        </button>
        <Link to="/cadastro">Ainda não tem uma conta? Crie aqui</Link>
      </form>
    );
  }
}

export default LoginForm;
