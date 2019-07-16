// import {
//   getSongDetail
// } from '../api/index'

// 大于1 万的数字变 万
// 例 36575 => 3.65 万
export function toFix(num) {
  return num > 10000 ? `${(num / 10000).toFixed(2)}万` : num
}

// 格式化 时间
export function fetchTime(time) {
  const fen = time / 60 | 0
  const miao = time % 60 | 0
  return zero(fen) + ':' + zero(miao)
  // return 
}
function zero(num) {
  return num < 10 ? '0' + num : num 
}

// function getSongsDetail(tracksId) {
//   let result = [] 
//   let AllId = tracksId.map(item => {
//     return item.id
//   })
//   AllId = AllId.join(',')
//   getSongDetail(AllId)
//   .then(res => {
//     console.log(222)
//     result = res.data
//   })
//   console.log(111)
//   return result
// }

// // 拼接所有的歌曲信息
// export async function fitSongs(tracks, tracksId) {
//   // 获取所有的id 歌曲详情信息
//   // console.log('id', tracks)
//   const tracksIdDetail = await getSongsDetail(tracksId)
//   console.log('歌曲信息', tracksIdDetail)
// }