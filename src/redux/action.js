import * as ActionType from './actionType'

export function showPlayer(showStatus) {
  return {
    type: ActionType.SHOW_PLAUER,
    showStatus
  }
}

export function changeSong(song) {
  return {
    type: ActionType.CHANGE_SONG,
    song
  }
}

export function changePlayList(playList) {
  return {
    type: ActionType.CHANGE_PLAYLIST,
    playList
  }
}

export function changePlayId(id) {
  return {
    type: ActionType.CHANGE_PLAI_ID,
    id
  }
}