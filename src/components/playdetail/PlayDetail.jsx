import React, { Component } from 'react'
import { getPlayDetail } from '../../api/index'
import './playdetail.styl'
import Scroll from '../../common/scroll/Scroll'
import { createTracks } from './../../module/tracks'
import { toFix } from '../../util/index'
export class PlayDetail extends Component {
  state = {
    playlist: {},
    creator: {},
    tracks: []
  }
  componentDidMount() {
    const { match } = this.props
    getPlayDetail(match.params.id)
      .then(res => {
        console.log('res', res)
        this.setState({
          playlist: res.playlist,
          creator: res.playlist.creator,
          tracks: res.playlist.tracks
        })
      })
  }
  handleBack = () => {
    console.log(this.props)
    this.props.history.goBack()
  }
  renderTicks = () => {
    const { tracks } = this.state
    return tracks.map((item, i) => {
      const track = createTracks(item)
      return (
        <div className="item-wrapper" key={i}>
          <span>{i + 1}</span>
          <div className="content">
            <h3>{track.name}</h3>
            <div className="author">
              {track.author}-{track.name}
            </div>
          </div>
          <i className="iconfont">&#xe615;</i>
        </div>
      )
    })
  }
  render() {
    // console.log(this.props)
    const { playlist, creator, tracks } = this.state
    // console.log(tracks.length)
    return (
      <div className="play-detail">
        <div className="play-filter"></div>
        <div className="play-bg" style={{ backgroundImage: `url(${playlist.coverImgUrl})` }}>
        </div>
        <div className="play-header fixedTop">
          <i onClick={this.handleBack} className="iconfont">&#xe641;</i>
          <div className="header-content">
            <h3>歌单</h3>
            <p>{playlist.name}</p>
          </div>
          <i className="iconfont">&#xe600;</i>
          <i className="iconfont">&#xe615;</i>
        </div>
        <div className="scroll-container">
          <Scroll onScroll={() => { }}>
            <div className="scroll-container-wrapper">
              <div className="play-container">
                <div className="container-head">
                  <div className="img">
                    <img src={playlist.coverImgUrl} alt="" />
                    <span className="title">{toFix(playlist.playCount)}</span>
                  </div>
                  <div className="container-right">
                    <h2>{playlist.name}</h2>
                    <div className="creator">
                      <img src={creator.avatarUrl} alt="" />
                      <span>{creator.nickname}</span>
                      <i className="iconfont">&#xe67f;</i>
                    </div>
                    <div className="description">
                      <span className="textOverflow2">{playlist.description}</span>
                      <i className="iconfont">&#xe67f;</i>
                    </div>
                  </div>
                </div>
                <div className="container-select">
                  <div className="select-item">
                    <i className="iconfont">&#xe7d1;</i>
                    <div>{playlist.commentCount}</div>
                  </div>
                  <div className="select-item">
                    <i className="iconfont">&#xe920;</i>
                    <div>{playlist.shareCount}</div>
                  </div>
                  <div className="select-item">
                    <i className="iconfont">&#xe683;</i>
                    <div>下载</div>
                  </div>
                  <div className="select-item">
                    <i className="iconfont">&#xe6e8;</i>
                    <div>多选</div>
                  </div>
                </div>
              </div>
              <div className="detail-container">
                <div className="detail-head">
                  <i className="iconfont">&#xe61e;</i>
                  <div className="all-num">
                    播放全部<span>(共{tracks.length}首)</span>
                  </div>
                  <div className="collection">
                    <i className="iconfont">&#xe6e8;</i>
                    <span>收藏({toFix(playlist.subscribedCount)})</span>
                  </div>
                </div>
                <div className="detail-content">
                  <Scroll onScroll={() => { }}>
                    <div className="scroll-wrapper">
                      {
                        this.renderTicks()
                      }
                    </div>
                  </Scroll>
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      </div>
    )
  }
}

export default PlayDetail
