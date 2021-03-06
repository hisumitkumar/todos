import { TASK_ADD, TASK_DELETE, TASK_DONE, TASK_EDIT, TASK_ONGOING } from "../types";

export const addTask = (formdata) => {
	return function(dispatch){
		//console.log(formdata);
		dispatch({
			type: TASK_ADD,
			payload: formdata
		})
	}
}

export const editTask = (formdata) => {
	return function(dispatch){
		dispatch({
			type: TASK_EDIT,
			payload: formdata
		})
	}
}

export const deleteTask = (taskId) => {
	return function(dispatch){
		dispatch({
			type: TASK_DELETE,
			payload: taskId
		})
	}
}

export const setTaskDone = (taskId) => {
	return function(dispatch){
		dispatch({
			type: TASK_DONE,
			payload: taskId
		})
	}
}

export const setTaskOngoing = (taskId) => {
	return function(dispatch){
		dispatch({
			type: TASK_ONGOING,
			payload: taskId
		})
	}
}
