import React from "react"
// import Progress from "./Progress"

import "./miniPlayer.styl"

class MiniPlayer extends React.Component {
  handlePlayOrPause = (e) => {
    e.stopPropagation();
    // 调用父组件的播放或暂停方法
    console.log('pause')
    this.props.playOrPause();
  }
  handleShow = () => {
    this.props.handleShow()
  }
  render() {
    const {song, playStatus, miniShow} = this.props;
    return (
    <div className="mini-player" style={{display: miniShow ?'flex' : 'none'}}>
      {/* 歌曲图片 */}
      <img onClick={this.handleShow} className="mini-image" src={song.image} alt=""/>
      <div className="mini-title">
        <h3>{song.name}</h3>
      </div>
      {/* 图片 */}
      <div onClick={this.handlePlayOrPause}>
      {
        playStatus ?
        <i className="iconfont icon">&#xe680;</i> :
        <i className="iconfont icon">&#xe61e;</i>
      }
      </div>
      <i className="iconfont icon">&#xe76f;</i>
    </div>
    );
  }
}

export default MiniPlayer
