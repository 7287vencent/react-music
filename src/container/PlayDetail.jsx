import { connect } from 'react-redux'
import PlayDetail from '../components/playdetail/PlayDetail'
import { changePlayList, changeSong, changePlayId, showPlayer } from '../redux/action'
// 映射 Redux 全局 state 到组件的 props 上
const mapStateToProps = (state) => ({
  playSongs: state.playList,
  songId: state.songId
})

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

export default connect(mapStateToProps,mapDispathToProps)(PlayDetail)
