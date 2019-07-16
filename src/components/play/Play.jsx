import React, { Component } from 'react'
import { getSongDetail } from '../../api/index'
import Process from '../process/Process'
import './play.styl'
import { fetchTime } from '../../util/index'

export class Play extends Component {
  constructor(props) {
    super(props)
    // 当前播放的歌曲
    this.currentSong = {}
    // 当前播放歌曲 id
    this.currentIndex = 0
    // 推拽进度条
    this.dragProcess = 0
    // 播放模式 list-列表 single-单曲 shuffle-随机
    this.playModel = ['list', 'single', 'shuffle']

    this.state = {
      currentTime: 0,
      playStatus: false,  //播放状态
      currentPlayMode: 0,
      process: 0,
      disableDrag: true
    }
    // 虚拟DOM
    this.audioDOM = null
    this.first = undefined
    // 旋转图片的 ref
    this.singImgDom = null
  }
  // 使用 will mount 获取 播放的歌曲信息
  componentWillMount() {
    const { match } = this.props
    const id = match.params.id
    this.getSongUrl(id)
    this.currentIndex = this.props.songId
  }
  // 获取歌曲的 url 信息
  getSongUrl(id) {
    getSongDetail(id)
      .then(res => {
        // console.log('playres', res.data)
        this.currentSong = res.data[0]
      })
      .then(song => {
        this.handlePlayUrl()
        this.playOrPause()
      })
  }
  componentDidMount() {
    // 监听时间的变化
    this.audioDOM.addEventListener('timeupdate', () => {
      if(this.state.playStatus === true && this.audioDOM) {
        this.setState({
          process: this.audioDOM.currentTime / this.audioDOM.duration,
          currentTime: this.audioDOM.currentTime
        })
      }
    }, false)

    // 监听结束
    this.audioDOM.addEventListener('ended', () => {
      if(this.props.playSongs.length > 0) {
        let currentIndex = this.currentIndex;
        // 如果是最后一首歌
        if (currentIndex === this.props.playSongs.length - 1) {
          currentIndex = 0
        } else {
          currentIndex++
        }
        this.props.changeCurrentSong(this.props.playSongs[currentIndex])
        this.props.changePlayId(currentIndex)
        this.currentIndex = currentIndex
        this.getSongUrl(this.props.playSongs[currentIndex].id)
      }
    }, false)
  }
  /**
   * 修改播放的链接
   */
  handlePlayUrl = () => {
    // console.log(this.currentSong)
    this.audioDOM.src = this.currentSong.url
    this.setState({
      playStatus: false,
      process: 0
    })
  }
  /**
   * 播放或暂停
   */
  playOrPause = () => {
    if (this.state.playStatus === false) { 
      console.log(this.audioDOM.src)
      this.audioDOM.play()
      // 缺少控制旋转的函数
      this.startImgRotate()
      this.setState({
        playStatus: true
      })
    } else {
      this.audioDOM.pause()
      // 取消动画
      this.stopImgRotate()
      this.setState({
        playStatus: false
      })
    }
  }
  /**
   * 开始旋转图片
   */
  startImgRotate = () => {
    if (this.singImgDom.className.indexOf('rotate') === -1) {
      this.singImgDom.classList.add('rotate')
    } else {
      this.singImgDom.style["webkitAnimationPlayState"] = "running";
      this.singImgDom.style["animationPlayState"] = "running";
    }
  }
  /**
   * 停止旋转图片
   */
  stopImgRotate = () => {
    this.singImgDom.style["webkitAnimationPlayState"] = "paused";
    this.singImgDom.style["animationPlayState"] = "paused";
  }
  /**
   * 下一首歌
   */
  handleNext = () => {
    if(this.props.playSongs.length > 0) {
      let currentIndex = this.currentIndex;
      // 如果是最后一首歌
      if (currentIndex === this.props.playSongs.length - 1) {
        currentIndex = 0
      } else {
        currentIndex++
      }
      // 重新设置 currentIndex
      // console.log(currentIndex)
      this.props.changeCurrentSong(this.props.playSongs[currentIndex])
      this.props.changePlayId(currentIndex)
      this.currentIndex = currentIndex
      this.getSongUrl(this.props.playSongs[currentIndex].id)
    }
  }
  /**
   * 上一首歌
   */
  handlePrev = () => {
    if(this.props.playSongs.length > 0) {
      let currentIndex = this.currentIndex;
      // 如果是最后一首歌
      if (currentIndex === 0) {
        currentIndex = this.props.playSongs.length - 1
      } else {
        currentIndex--
      }
      // 重新设置 currentIndex
      // console.log(currentIndex)
      this.props.changeCurrentSong(this.props.playSongs[currentIndex])
      this.props.changePlayId(currentIndex)
      this.currentIndex = currentIndex
      this.getSongUrl(this.props.playSongs[currentIndex].id)
    }
  }
  /**返回上一个页面 */
  handleBack = () => {
    // console.log(this.props)
    this.props.history.goBack()
  }
  render() {
    let { currentSongs } = this.props
    // currentSongs = {
    //   album: "杨花落尽子规啼",
    //   duration: 225.901,
    //   id: 1375935067,
    //   image: "http://p2.music.126.net/fpx5pqgjU8WSZsy0xkWbUA==/109951164192475628.jpg",
    //   name: "杨花落尽子规啼",
    //   singer: "G2er/黄诗扶/国风堂"
    // }
    const { playStatus, process, disableDrag, currentTime } = this.state
    return (
      <div className="player-page">
        <audio ref={(el) => { this.audioDOM = el; }}></audio>
        <div className="player">
          {/* 蒙尘 和 背景图片 */}
          <div className="play-filter"></div>
          <div className="play-bg" style={{ backgroundImage: `url(${currentSongs.image})` }}>
          </div>
          {/* 播放头部 */}
          <div className="header">
            <i onClick={this.handleBack} className="iconfont">&#xe641;</i>
            <span className="head-title">
              <h3>{currentSongs.name}</h3>
              <div>{currentSongs.singer} <i className="iconfont">&#xe67f;</i></div>
            </span>
            <i className="iconfont">&#xe920;</i>
          </div>
          {/* 旋转的图片 */}
          <div className="container-img">
            <div className="bg-img" style={{ backgroundImage: `url(${require('../../assets/images/disc.png')})` }}>
              <img className="img"
                ref={(el) => { this.singImgDom = el }}
                src={currentSongs.image} alt="" />
            </div>
          </div>
          {/* 进度条 */}
          <div className="play-process">
            <span>{fetchTime(currentTime)}</span>
            <Process process={process} disableDrag={disableDrag}
              onDragStart={this.handelOnDragStart}
              onDrag={this.handelOnDrag}
              onDragEnd={this.handelOnDragEnd}
            ></Process>
            <span>{fetchTime(currentSongs.duration)}</span>
          </div>

          {/* 底部按钮 */}
          <div className="foot-btn">
            <div className="btn-item">
              <img src={require('../../assets/images/mode-list.png')} alt="" />
            </div>
            <div onClick={this.handlePrev} className="btn-item">
              <img src={require('../../assets/images/prev.png')} alt="" />
            </div>
            <div onClick={this.playOrPause} className="btn-item">
              <img className="play-img" src={playStatus ? require('../../assets/images/play.png') : require('../../assets/images/pause.png')} alt="" />
            </div>
            <div className="btn-item">
              <img
              onClick={this.handleNext}
              src={require('../../assets/images/next.png')} alt="" />
            </div>
            <div className="btn-item">
              <img src={require('../../assets/images/list.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  /**
   * 进度条有关的函数
   */
  handelOnDragStart = () => {
    console.log('start')
  }
  handelOnDrag = (process) => {
    let errorValue = 15 / window.screen.width
    if (process < 0) {
      process = 0
    }
    if (process + errorValue >= 1) {
      process = 1 - errorValue
    }
    // console.log('process',process)
    this.setState({
      process: process
    })
  }
  handelOnDragEnd = () => {
    console.log('end')
  }
}

export default Play
