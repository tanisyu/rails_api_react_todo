import { READ_TASKS } from '../actions'

const switchTasks = (tasks = {}, action) => {
  switch (action.type) {
    case READ_TASKS:
      // idをキーとして配列の並び替え
      return action.response.data
    default:
      return tasks
  }
}

export default switchTasks
