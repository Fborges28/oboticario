import React from 'react';
import { Link } from 'react-router-dom';

class PurchaseList extends React.Component {
  constructor(props) {
    super(props);
  }

  cashbackCalc(value) {
    value = parseFloat(value);
    console.log(value);
    //10%
    if (value <= 10)
      return this.roundValue(value * 0.25) + ', Cashback aplicado: 25%';

    //15%
    if (value > 10 && value <= 50)
      return this.roundValue(value * 0.2) + ', Cashback aplicado: 20%';

    //20%
    if (value > 50 && value <= 100)
      return this.roundValue(value * 0.15) + ', Cashback aplicado: 15%';

    //25%
    if (value > 100)
      return this.roundValue(value * 0.1) + ', Cashback aplicado: 10%';
  }

  roundValue(value) {
    return (Math.round(value * 100) / 100).toFixed(2);
  }

  productStatus(value) {
    value = parseFloat(value);
    if (value < 50) {
      return <span className="badge badge-success">Aprovado</span>;
    }

    if (value >= 50 && value < 1000) {
      return <span className="badge badge-warning">Em validação</span>;
    }

    if (value >= 1000) {
      return <span className="badge badge-danger">Reprovado</span>;
    }
  }

  removeProduct(product) {
    this.props.removeProduct(product);
  }

  render() {
    var products = this.props.list.map((product, index) => {
      var removeBtn;

      if (product.product_value >= 50 && product.product_value < 1000) {
        removeBtn = (
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={() => this.removeProduct(product)}
          >
            Remover
          </button>
        );
      }

      return (
        <div
          className="list-group-item list-group-item-action"
          key={'product' + index}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Código: {product.product_code}</h5>
            <small className="text-muted">{product.register_date}</small>
          </div>

          <p className="mb-1">Valor: R${product.product_value}</p>
          <div className="alert alert-primary" role="alert">
            <p className="mb-1">
              Cashback: R${this.cashbackCalc(product.product_value)}
            </p>
            {this.productStatus(product.product_value)}
          </div>
          {removeBtn}
        </div>
      );
    });

    console.log(this.props);

    return <div className="list-group">{products.reverse()}</div>;
  }
}

export default PurchaseList;
