import {
  READ_TASKS,
  CREATE_TASK,
} from '../actions'

const switchTasks = (tasks = {}, action) => {
  switch (action.type) {
    case READ_TASKS:
      // idをキーとして配列の並び替え
      return action.response.data
    case CREATE_TASK:
      const data = action.response.data
      return { ...tasks, [data.id]: data }
    default:
      return tasks
  }
}

export default switchTasks
