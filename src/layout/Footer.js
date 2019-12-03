import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class MainFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="main-footer">
        <Link to="/sistema">Informações do sistema</Link>
      </footer>
    );
  }
}

export default MainFooter;
