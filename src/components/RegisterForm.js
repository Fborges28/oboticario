import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class RegisterForm extends React.Component {
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
        className="form register-form"
        onSubmit={event => this.onSubmit(event)}
      >
        <div className="form-group">
          <h3 className="text-center form__title">Bem-vindo(a)</h3>
          <p>Por favor, insira os seguintes dados:</p>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Nome completo"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="CPF"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Insira seu e-mail"
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
        <Link to="/login">Já tem um cadastro? Acesse aqui</Link>
      </form>
    );
  }
}

export default RegisterForm;
