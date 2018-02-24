import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Paper from 'material-ui/Paper';


const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

class CartoonsDirectory extends Component {

  isAuthenticated () {
    const token = localStorage.getItem('token');
    return token && token.length > 10
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <Paper style={styles.paper}>
        {
          !isAlreadyAuthenticated ? <Redirect to ={{pathname: '/'}}/>
          : (
        <h2>This is Cartoons Directory</h2>
      )}
      </Paper>
    );
  }
}

export default CartoonsDirectory
