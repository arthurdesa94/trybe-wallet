import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { storeEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwordValidated: false,
      emailValidated: false,
    };

    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  emailValidation(email) {
    const regex = /.+@[A-z]+[.]com/i;
    if (regex.test(email.toLowerCase())) {
      this.setState({ emailValidated: true, email });
    } else {
      this.setState({ emailValidated: false });
    }
  }

  passwordValidation(password) {
    const passwordLength = 6;
    if (password.length >= passwordLength) {
      this.setState({ passwordValidated: true });
    } else {
      this.setState({ passwordValidated: false });
    }
  }

  render() {
    const { emailValidated, passwordValidated, email } = this.state;
    const { saveEmail } = this.props;
    return (
      <div>
        <h3>LOGIN</h3>
        <input
          type="text"
          data-testid="email-input"
          name="email"
          onChange={ (e) => this.emailValidation(e.target.value) }
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          onChange={ (e) => this.passwordValidation(e.target.value) }
          placeholder="Password"
        />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(emailValidated && passwordValidated) }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(storeEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

//  References:
//  Validating email:
//  toLowerCase:
//  https://www.w3schools.com/jsref/jsref_tolowercase.asp#:~:text=The%20toLowerCase()%20method%20converts,a%20string%20to%20uppercase%20letters.
//  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascriptimport
