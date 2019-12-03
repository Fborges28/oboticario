import React from 'react';
import MainView from 'layout/MainView';
import PurchaseList from 'components/PurchaseList';
import PurchaseRegisterForm from 'components/PurchaseRegisterForm';

class CadastroDeCompras extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.registerProduct = this.registerProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  registerProduct(product) {
    console.log(product);

    var isRegistered = this.state.products.find(
      currentProduct => currentProduct.product_code === product.product_code
    );

    if (!isRegistered) {
      this.setState({
        products: this.state.products.concat(product)
      });
    } else {
      alert('Produto já registrado');
    }
  }

  removeProduct(product) {
    console.log(product);
    this.setState({
      products: this.state.products.filter(
        currentProduct => currentProduct.product_code != product.product_code
      )
    });
  }

  render() {
    return (
      <MainView pageName="cadastro-de-compras">
        <PurchaseRegisterForm registerProduct={this.registerProduct} />
        <PurchaseList
          list={this.state.products}
          removeProduct={this.removeProduct}
        />
      </MainView>
    );
  }
}

export default CadastroDeCompras;
