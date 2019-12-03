import React from 'react';
import MainHeader from 'layout/Header';
import MainFooter from 'layout/Footer';
import CheckLogin from 'utils/CheckLogin';

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let logged = false;
    if (CheckLogin()) {
      logged = true;
    }

    return (
      <div className={this.props.pageName + ` oboticario__main`}>
        <MainHeader logged={logged} />
        <div className="container">{this.props.children}</div>
        <MainFooter />
      </div>
    );
  }
}

export default MainView;
