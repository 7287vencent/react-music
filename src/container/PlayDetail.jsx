import { connect } from 'react-redux'
import PlayDetail from '../components/playdetail/PlayDetail'
import { changePlayList, changeSong, changePlayId } from '../redux/action'
// 映射 Redux 全局 state 到组件的 props 上
// const mapStateToProps = (state) => ({
//   showStatus: state.showStatus,
//   currentSongs: state.song,
//   playSongs: state.song
// })

const mapDispathToProps = (dispatch) => ({
  changePlayList: (playList) => {
    dispatch(changePlayList(playList))
  },
  changeSong: (song) => {
    dispatch(changeSong(song))
  },
  changePlayId: (id) => {
    dispatch(changePlayId(id))
  }
})

export default connect('',mapDispathToProps)(PlayDetail)
