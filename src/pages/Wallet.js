import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '',
      description: '',
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    // const list = Object.keys(data).filter((value) => value !== 'USDT');
    // this.setState({ currencies: list });
  }

  handleInput({ target }) {
    this.setState({ value: target.value });
  }

  handleDescription({ target }) {
    this.setState({ description: target.value });
  }

  render() {
    const { user } = this.props;
    const { email } = user;
    const { value, description } = this.state;
    return (
      <div>
        <h1 data-testid="email-field">{email}</h1>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
        <input
            type="number"
            data-testid="value-input"
            value={ value }
            onChange={ (target) => this.handleInput(target) }
          />
          <input
            type="text"
            data-testid="description-input"
            value={ description }
            onChange={ (target) => this.handleDescription(target) }
          />
        </form>
      </div>);
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
