import axios from 'axios'

export const READ_TASKS = 'READ_TASKS'
export const GET_TASK = 'GET_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

const ROOT_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/v1`

export const readTasks = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/tasks`)
  console.log(ROOT_URL)
  dispatch({ type: READ_TASKS, response })
}

export const getTask = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/tasks/${id}`)
  dispatch({ type: GET_TASK, response })
}

export const postTask = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/tasks`, values)
  dispatch({ type: CREATE_TASK, response })
}

export const putTask = values => async dispatch => {
  // api側で必要なカラムのみ送信する
  const parmitted_columns = ['title', 'detail', 'is_done']
  let updatable_task = {}
  parmitted_columns.forEach((column) => {
    updatable_task[column] = values[column]
  })

  const response = await axios.put(`${ROOT_URL}/tasks/${values.id}`, updatable_task)
  dispatch({ type: UPDATE_TASK, response })
}

export const deleteTask = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/tasks/${id}`)
  dispatch({ type: DELETE_TASK, id })
}
