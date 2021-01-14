import axios from 'axios'

export const READ_TASKS = 'READ_TASKS'

const ROOT_URL = 'http://127.0.0.1:3000/api/v1'

export const readTasks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/tasks`)
  dispatch({ type: READ_TASKS, response })
}
