import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('passou aqui');
    localStorage.removeItem('oboticario_user');
  }

  render() {
    return <Redirect to="/" push={true} />;
  }
}

export default Logout;
