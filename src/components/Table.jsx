import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends Component {
  render() {
    const { expenses, deleteExpenseFromStore, handleEditClick } = this.props;
    return (
      <table className="table-container">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses && expenses.map((expense) => {
            const exchanteRate = expense.exchangeRates[expense.currency];
            const roundValue = (value) => Math.round(value * 100) / 100;
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{exchanteRate.name}</td>
                <td>{roundValue(exchanteRate.ask).toFixed(2)}</td>
                <td>{roundValue(expense.value * exchanteRate.ask)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleEditClick(expense) }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteExpenseFromStore(expense) }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseFromStore: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  deleteExpenseFromStore: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
// tag tr - row of cells in a table
// tag td - cell of a table that contains data
// cell as header of a group of table cells
// reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
// math.round reference: https://www.w3schools.com/jsref/jsref_round.asp
// toFixed ref: https://www.w3schools.com/jsref/jsref_tofixed.asp
