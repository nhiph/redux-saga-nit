import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import STATUSES from '../../constant';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TaskItem from '../taskItem';



class TaskList extends Component {
    render() {
        const {classes, tasks, status, index} = this.props;
        return (
            <Grid item md={4} xs={12} key={index}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map(task => {
                            const { title, description } = task;
                            return (
                                <TaskItem task={task} status={status} key={task.id}/>
                            );
                        })
                    }
                </div>
            </Grid>

        );
    }
}

export default withStyles(styles)(TaskList);