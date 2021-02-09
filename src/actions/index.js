import awesomeAPI from '../API/awesomeAPI';

export const EMAIL_STORE = 'EMAIL_STORE';
export const REQUEST_EXCHANGE_RATES = 'REQUEST_EXCHANGE_RATE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const storeEmail = (email) => ({
  type: EMAIL_STORE,
  email,
});

const storeExpenses = (expenses, exchangeRates) => ({
  type: SAVE_EXPENSE,
  expenses: { ...expenses, exchangeRates },
});

export function fetchExchangeRatesAndStoreExpenses(expenses) {
  return (dispatch) => awesomeAPI()
    .then((exchangeRates) => dispatch(storeExpenses(expenses, exchangeRates)));
}

export const deleteExpense = (expenseToRemove) => ({
  type: DELETE_EXPENSE,
  expenseToRemove,
});

export const editExpense = (expenseToEdit) => ({
  type: EDIT_EXPENSE,
  expenseToEdit,
});