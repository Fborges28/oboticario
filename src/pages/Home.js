import React from 'react';
import { Link } from 'react-router-dom';
import MainView from 'layout/MainView';
import LoginForm from 'components/LoginForm';
import CheckLogin from 'utils/CheckLogin';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let logged = false;
    let navContent;
    if (CheckLogin()) {
      logged = true;
      navContent = (
        <Link to="/cashback">
          <button className="btn btn-primary">
            <span>Acessar meu cashback</span>
          </button>
        </Link>
      );
    } else {
      navContent = (
        <Link to="/login">
          <button className="btn btn-primary">
            <span>Cashback</span>Vamos começar? Clique aqui para acessar sua
            conta.
          </button>
        </Link>
      );
    }

    return (
      <MainView pageName="home">
        <div className="block-margin text-center home__content">
          <h1>O Boticário</h1>
          {navContent}
        </div>
      </MainView>
    );
  }
}

export default Home;
