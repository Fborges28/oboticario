import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo-boticario-branco.png';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_links: [
        {
          path: '/',
          text: 'Home'
        },
        {
          path: '/cadastro-de-compras',
          text: 'Cadastro de compras'
        },
        {
          path: '/cashback',
          text: 'Cashback'
        },
        {
          path: '/logout',
          text: 'Sair'
        }
      ],
      unlogged_links: [
        {
          path: '/',
          text: 'Home'
        },
        {
          path: '/login',
          text: 'Login'
        },
        {
          path: '/cadastro',
          text: 'Cadastre-se'
        }
      ]
    };
  }

  render() {
    let links;

    if (this.props.logged) {
      links = this.state.logged_links;
    } else {
      links = this.state.unlogged_links;
    }

    let renderedLinks = links.map((link, index) => (
      <li key={link + index}>
        <NavLink exact to={link.path} activeClassName="active">
          {link.text}
        </NavLink>
      </li>
    ));

    return (
      <header className="main-header">
        <div className="container">
          <a className="main-header__logo" href="/">
            <img src={logo} alt="" />
          </a>
          <nav className="main-header__menu">
            <ul>{renderedLinks}</ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default MainHeader;
