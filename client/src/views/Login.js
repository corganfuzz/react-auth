import React from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm'
import {Redirect} from 'react-router-dom';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

class Login extends React.Component {

  isAuthenticated () {
    const token = localStorage.getItem('token');
    return token && token.length > 10
  }

  handleSuccessfulLogin () {
    this.setState();
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <Paper style={styles.paper}>
      {
        isAlreadyAuthenticated ? <Redirect to={{pathname: '/app'}}/>
        : ( <div>

          <h2>Login</h2>

          <LoginForm
            onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)}/>
        </div>
      )}

      </Paper>
    );
  }
}

export default Login;
