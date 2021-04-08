import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../../commons/theme';
import Taskboard from '../taskboard';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configStore';

const store = configureStore();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Taskboard />
          </div>
        </ThemeProvider>
      </Provider>

    );
  }
}


export default withStyles(styles)(App);
