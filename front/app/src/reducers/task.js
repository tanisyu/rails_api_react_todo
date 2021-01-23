import {
  READ_TASKS,
  GET_TASK,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '../actions'

const switchTasks = (tasks = {}, action) => {
  switch (action.type) {
    case READ_TASKS:
      return action.response.data
    case CREATE_TASK:
    case GET_TASK:
    case UPDATE_TASK:
      const data = action.response.data.data
      return { ...tasks, [data.id]: data }
    case DELETE_TASK:
      // TODO: tasks.dataのstate構成の変更(READ_TASKSからの遷移でない場合エラー)

      // 削除したデータをstateから削除
      let deleted_task_state_id = 0
      tasks.data.forEach((task, index) => {
        if (task.id === action.id) {
          deleted_task_state_id = index
        }
      })

      delete tasks.data[deleted_task_state_id]
      return { ...tasks }
    default:
      return tasks
  }
}

export default switchTasks
