import * as ActionType from './actionType'

export function showPlayer(showStatus) {
  // 修改播放
  return {
    type: ActionType.SHOW_PLAUER,
    showStatus
  }
}