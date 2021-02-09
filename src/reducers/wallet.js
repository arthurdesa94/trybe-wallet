import { SAVE_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState,
  { type, expenses, expenseToRemove, expenseToEdit }) {
  switch (type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, expenses] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== expenseToRemove.id)] };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === expenseToEdit.id) {
          return { ...expense, ...expenseToEdit };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
}

export default wallet;
