import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {
        Table,
        TableHeader,
        TableBody,
        TableRow,
        TableHeaderColumn,
        TableRowColumn
      } from 'material-ui/Table';

import superagent from 'superagent';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

class CartoonsDirectory extends Component {
  constructor (props){
    super(props);

    this.state = {
      cartoons: []
    }
  }

  getAuthenticationToken () {
    return localStorage.getItem('token');
  }

  componentDidMount () {
    superagent
      .get('/api/v1/cartoons')
      .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
      .end((err, res) => {
        if (err) {
          this.setState({
            errorMessage: 'Cannot retrieve from server'
          }); return err;
        }
        this.setState({cartoons: res.body })
      })
  }

  // isAuthenticated () {
  //   const token = localStorage.getItem('token');
  //   return token && token.length > 10
  // }

  render() {
    // const isAlreadyAuthenticated = this.isAuthenticated();
    const tableRows = this.state.cartoons.map((cartoon, k) => {
      return (
      <TableRow key={cartoon.id}>
        <TableRowColumn>{cartoon.id}</TableRowColumn>
        <TableRowColumn>{cartoon.name}</TableRowColumn>
        <TableRowColumn>{cartoon.creator}</TableRowColumn>
      </TableRow>
    )
  });

    return (
      <Paper style={styles.paper}>
        {/* {
          !isAlreadyAuthenticated ? <Redirect to ={{pathname: '/'}}/>
          : (
            Paper did go here
      )
    } */}
        <h2>Cartoons Directory</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Cartoon</TableHeaderColumn>
              <TableHeaderColumn>Creator</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>

      </Paper>
    );
  }
}

export default CartoonsDirectory
