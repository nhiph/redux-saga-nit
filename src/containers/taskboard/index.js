import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import STATUSES from '../../constant';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TaskList from '../../components/taskList';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TaskForm from '../../components/taskForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './../../actions/task';
import PropTypes from 'prop-types';


class Taskboard extends Component {
    state = {
        open: false
    };

    componentDidMount(){
        const {taskActionCreators} = this.props;
        const {fetchListTaskRequest} = taskActionCreators;
        fetchListTaskRequest();
    }

    renderBoard = () => {
        let {listTask} = this.props;
        const {classes} =this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                    {STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                            return <TaskList key={status.value} tasks={taskFiltered} status={status} index={index}/>;
                        })
                    }
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    openForm = () => {
        this.setState({
            open: true
        });
    }

    renderForm = () => {
        const {open} = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );
        return xhtml;
    }
    

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon />Thêm mới công việc
                </Button>
                    {this.renderBoard()}
                    {this.renderForm()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func,
    }),
};

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch)
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));
