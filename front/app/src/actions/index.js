import axios from 'axios'

export const READ_TASKS = 'READ_TASKS'
export const CREATE_TASK = 'CREATE_TASK'

const ROOT_URL = 'http://127.0.0.1:3000/api/v1'

export const readTasks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/tasks`)
  dispatch({ type: READ_TASKS, response })
}

export const postTask = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/tasks`, values)
  dispatch({ type: CREATE_TASK, response })
}
