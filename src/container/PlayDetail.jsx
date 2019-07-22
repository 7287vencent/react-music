import { connect } from 'react-redux'
import PlayDetail from '../components/playdetail/PlayDetail'
import { changePlayList, changeSong, changePlayId, showPlayer } from '../redux/action'
// 映射 Redux 全局 state 到组件的 props 上
// const mapStateToProps = (state) => ({
//   showStatus: state.showStatus,
//   currentSongs: state.song,
//   playSongs: state.song
// })

const mapDispathToProps = (dispatch) => ({
  changePlayList: (playList) => {
    // console.log('changePlayList')
    dispatch(changePlayList(playList))
  },
  changeSong: (song) => {
    dispatch(changeSong(song))
  },
  changePlayId: (id) => {
    dispatch(changePlayId(id))
  },
  showPlayer: (show) => {
    dispatch(showPlayer(show))
  }
})

export default connect('',mapDispathToProps)(PlayDetail)
