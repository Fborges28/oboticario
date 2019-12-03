import React from 'react';
import MainView from 'layout/MainView';
import PurchaseList from 'components/PurchaseList';
import PurchaseRegisterForm from 'components/PurchaseRegisterForm';

class CashbackAcumulado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cashback_list: [
        {
          id: 0,
          product_code: 55,
          value: 10
        },
        {
          id: 1,
          product_code: 20,
          value: 14
        },
        {
          id: 2,
          product_code: 16555,
          value: 82
        }
      ]
    };
  }

  render() {
    return (
      <MainView pageName="cadastro-de-compras">
        <h1>Cashback acumulado</h1>
        <ul className="list-group mt-5">
          {this.state.cashback_list.map(cashback => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={cashback.product_code}
              >
                <span>
                  <strong>Código do produto:</strong> {cashback.product_code}
                </span>
                <span className="badge badge-primary badge-pill">
                  R${cashback.value}
                </span>
              </li>
            );
          })}
        </ul>
      </MainView>
    );
  }
}

export default CashbackAcumulado;
