import { combineReducers } from 'redux'
import * as ActionType from './actionType'

// 默认值
const initialState = {
  showStatus: false,
  song: {},
  playList: [],
  id: 0
}

function showStatus(showStatus = initialState.showStatus, action) {
  switch(action.type) {
    case ActionType.SHOW_PLAUER:
      return action.showStatus
    default:
      return showStatus
  }
}

function song(state = initialState.song, action) {
  switch(action.type) {
    case ActionType.CHANGE_SONG:
      return action.song
    default:
      return state
  }
}
function playList(state = initialState.playList, action) {
  switch(action.type) {
    case ActionType.CHANGE_PLAYLIST:
      return action.playList
    default:
      return state
  }
}

function songId(state = initialState.id, action) {
  switch(action.type) {
    case ActionType.CHANGE_PLAI_ID:
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  showStatus,
  song,
  playList,
  songId
})