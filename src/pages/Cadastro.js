import React from 'react';
import MainView from 'layout/MainView';
import RegisterForm from 'components/RegisterForm';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainView pageName="login">
        <div className="block-margin text-center login__content">
          <RegisterForm />
        </div>
      </MainView>
    );
  }
}

export default Cadastro;
