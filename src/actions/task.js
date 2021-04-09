import * as taskApi from './../apis/task';
import * as taskConstants from './../constant/task';

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApi
            .getList()
            .then(res => {
                            const {data} = res;
                            dispatch(fetchListTaskSuccess(data));
                        })
            .catch(err => {
                            dispatch(fetchListTaskFailed(err));
                        }); 
    }
}

/*
B1: fetchListTaskRequest
B2: Reset state tasks []
B3: fetchListTaskSuccess(data res)
*/

export const fetchListTask = () => {
    return{
        type: taskConstants.FETCH_TASK,
    }
};

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
};

export const fetchListTaskFailed = error => {
    return{
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
    
};