import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import superagent from 'superagent';

class LoginForm extends Component {
  constructor () {
    super();

    this.state = {
      username: "",
      password: "",
    }

    this.handleUserNameChanged = this.handleUserNameChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleUserNameChanged (event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChanged (event) {
    this.setState({
      password: event.target.value
    })
  }

  submitForm (event) {
    event.preventDefault();
    superagent
      .post('/auth/v1')
        .send({username: this.state.username, password: this.state.password})
          .end ((err, res) => {
            if (err) {
              this.setState({
                erroMessage: "Authentication Failed"
            }); return; }
            console.log('res.body', res.body);
              localStorage.setItem('token', res.body.token)
              this.props.onSuccessfulLogin();
    });
  }


  render () {
    return (
      <div>
          <form onSubmit={this.submitForm}>
            <TextField
              floatingLabelText="Username"
              value={this.state.username}
              onChange={this.handleUserNameChanged}
            />
            <TextField
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handlePasswordChanged}
            />
            <RaisedButton
              type="submit"
              label="Submit"
            />
          </form>
      </div>
    );
  }
}

export default LoginForm;
