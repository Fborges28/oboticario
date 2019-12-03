import React from 'react';
import MainView from 'layout/MainView';
import LoginForm from 'components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainView pageName="login">
        <div className="block-margin text-center login__content">
          <LoginForm />
        </div>
      </MainView>
    );
  }
}

export default Login;
