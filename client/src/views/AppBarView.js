import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Redirect} from 'react-router-dom';

class AppBarView extends Component {
  handleLogout () {
    localStorage.removeItem('token');
    this.setState(this.state);
  }

  isAuthenticated () {
    const token = localStorage.getItem('token');
    return token && token.length > 10
  }

  render () {
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <div>
      {
        !isAlreadyAuthenticated
         ?
         <Redirect to={{pathname: '/'}}/>
         :
         (
          <AppBar
            title = "CartoonsDirectory"
            iconElementRight= {<FlatButton label="Logout" />}
            onTouchTap={this.handleLogout.bind(this)}
        />
        )
      }
    </div>
    );
  }
}

export default AppBarView;
