import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      currencyList,
      expenses,
      handleChange,
      saveExpensesToStore,
      editingExpense } = this.props;

    return (
      <form className="form">
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            id="value-input"
            value={ expenses.value }
            name="value"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            id="description-input"
            value={ expenses.description }
            type="text"
            name="description"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency-input"
            value={ expenses.currency }
            name="currency"
            onChange={ (e) => handleChange(e.target) }
          >
            {currencyList.map((currency) => {
              if (currency === 'USDT') return;
              return (
                <option
                  data-testid={ currency }
                  key={ currency }
                  value={ currency }
                >
                  {currency}
                </option>);
            })}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method-input"
            value={ expenses.method }
            onChange={ (e) => handleChange(e.target) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag-input"
            value={ expenses.tag }
            onChange={ (e) => handleChange(e.target) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ saveExpensesToStore }>
          {editingExpense ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  editingExpense: PropTypes.bool.isRequired,
  saveExpensesToStore: PropTypes.func.isRequired,
};

