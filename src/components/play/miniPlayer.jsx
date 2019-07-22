import React from "react"
// import Progress from "./Progress"

import "./miniPlayer.styl"

class MiniPlayer extends React.Component {
  handlePlayOrPause = (e) => {
    e.stopPropagation();
    if (this.props.song.url) {
      // 调用父组件的播放或暂停方法
      this.props.playOrPause();
    }

  }
  handleNext = (e) => {
    e.stopPropagation();

    if (this.props.song.url) {
      // 调用父组件播放下一首方法
      this.props.next();
    }
  }
  handleShow = () => {
    if (this.props.song.url) {
      this.props.showMiniPlayer();
    }
  }
  render() {
    let song = this.props.song;
    return (
    <div className="main">
      qwer
    </div>
    );
  }
}

export default MiniPlayer
