import React from 'react';
import { Link } from 'react-router-dom';

class PurchaseRegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_code: '',
      product_value: '',
      register_date: ''
    };
  }

  handleChange(key, event) {
    console.log(key);
    this.setState({
      [key]: event.target.value
    });
  }

  formIsValid() {
    const { product_code, product_value, register_date } = this.state;
    return (
      !isNaN(product_code) && // CODIGO DO PRODUTO É UM NÚMERO?
      product_code >= 0 &&
      !isNaN(product_value) && // VALOR DO PRODUTO É UM NÚMERO?
      product_value >= 0 &&
      register_date // DATA FOI PREENCHIDA?
    );
  }

  submitData(event) {
    event.preventDefault();
    if (this.formIsValid()) {
      this.props.registerProduct(this.state);
    }
  }

  render() {
    return (
      <form
        className="form purchase-register-form"
        onSubmit={event => this.submitData(event)}
      >
        <div className="form-row">
          <div className="col-5">
            <input
              type="number"
              className="form-control"
              placeholder="Código do produto"
              required
              value={this.state.product_code}
              onChange={event => this.handleChange('product_code', event)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Valor"
              min="0"
              max="1000000"
              step="0.01"
              required
              onChange={event => this.handleChange('product_value', event)}
            />
          </div>
          <div className="col">
            <input
              type="date"
              className="form-control"
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              required
              onChange={event => this.handleChange('register_date', event)}
            />
          </div>
          <div className="col">
            <button className="btn btn-block btn-primary">Cadastrar</button>
          </div>
        </div>
      </form>
    );
  }
}

export default PurchaseRegisterForm;
