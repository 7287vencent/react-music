import { combineReducers } from 'redux'
import * as ActionType from './actionType'

// 默认值
const initialState = {
  showStatus: false
}

function showStatus(showStatus = initialState.showStatus, action) {
  switch(action.type) {
    case ActionType.SHOW_PLAUER:
      return action.showStatus
    default:
      return showStatus
  }
}

export default combineReducers({
  showStatus
})