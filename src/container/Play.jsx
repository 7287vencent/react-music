import { connect } from 'react-redux'
import Play from '../components/play/Play'
import { showPlayer, changeSong, changePlayId} from '../redux/action'
// 映射 Redux 全局 state 到组件的 props 上
const mapStateToProps = (state) => {
  // console.log('state.song',state.song)
  return {
  songId: state.songId,
  showStatus: state.showStatus,
  currentSongs: state.song,
  playSongs: state.playList
}}

const mapDispathToProps = (dispatch) => ({
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
  changeCurrentSong: (song) => {
    dispatch(changeSong(song))
  },
  changePlayId: (id) => {
    dispatch(changePlayId(id))
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Play)
