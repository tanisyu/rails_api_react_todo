import {
  READ_TASKS,
  GET_TASK,
  CREATE_TASK,
} from '../actions'

const switchTasks = (tasks = {}, action) => {
  switch (action.type) {
    case READ_TASKS:
      return action.response.data
    case CREATE_TASK:
    case GET_TASK:
      const data = action.response.data.data
      return { ...tasks, [data.id]: data }
    default:
      return tasks
  }
}

export default switchTasks
