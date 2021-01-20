import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import tasks from './task'

export default combineReducers({ tasks: tasks, form })
