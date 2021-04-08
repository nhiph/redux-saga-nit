import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class TaskForm extends Component {
    render() {
        const {open, classes, onClose} =this.props;
        return (
            <div>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
            <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            />
            <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            className={classes.textField}
            margin="normal"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
            </div>
        );
    }
}
export default withStyles(styles)(TaskForm);