import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getBanner, getPlayList, getPlayDetail } from '../../api/index'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './find.styl'
import { SelectDetail } from '../../module/select'
import { toFix } from '../../util/index'
import PlayDetail from '../../components/playdetail/PlayDetail'
export class Find extends Component {
  state = {
    bannersList: [],
    SelectDetail: [],
    playList: []
  }
  componentDidMount() {
    // 获取 banners 数据
    getBanner
      .then(res => {
        // console.log('res', res)
        this.setState({
          bannersList: res.banners
        }, () => {
          if (!this.bannersSwiper) {
            this.bannersSwiper = new Swiper('.banner-swiper', {
              loop: true,
              autoplay: true,
              pagination: {
                el: '.swiper-pagination',
              },
            })
          }
        })
      })
    // 设置 selectdetail 数据
    this.setState({
      SelectDetail
    })
    // 获取推荐歌单
    getPlayList
    .then((res) => {
      // console.log('res',res)
      this.setState({
        playList: res.result.splice(0,6)
      })
    })
  }
  renderSwiperItem = () => {
    const { bannersList } = this.state
    return (
      <>
        {
          bannersList.map((banner, i) => {
            return (
              <div className="swiper-slide" key={i}>
                <a href="#" className="slider-nav">
                  <img src={banner.imageUrl} alt="" width="100%" height="100%" />
                </a>
              </div>
            )
          })
        }
      </>
    )
  }
  // 选择图标
  renderSelect = () => {
    const { SelectDetail } = this.state
    return (
      <>
        {
          SelectDetail.map((select, i) => {
            return (
              <div className="select-item" key={i}>
                <div className="img">
                  <img src={select.img} alt=""/>
                </div>
                <div className="title">{select.title}</div>
              </div>
            )
          })
        }
      </>
    )
  }
  // 推荐歌单
  renderPlayList = () => {
    const { playList } = this.state
    const { match } = this.props 
    return (
      <>
      {
        playList.map((play, i) => {
          return (
            <div className="play-item" key={play.id} 
            onClick={this.handelToDetail(`${match.url}/${play.id}`)}>
              <div className="img-count">
                <img src={play.picUrl} alt=""/>
                <span className="count">{toFix(play.playCount)}</span>
              </div>
              <div className="play-name textOverflow2">
                {play.name}
              </div>
            </div>
          )
        })
      }
      </>
    )
  }
  handelToDetail = (url) => {
  //  console.log(getPlayDetail(id))
  //  console.log(111)
  return () => {
    // 路由跳转 向路由里面添加一条
    this.props.history.push({
      pathname: url
    })
  }
  }
  render() {
    const { match } = this.props 
    return (
      <div className="find-recommend">
        <div>
          <div className="banner-swiper">
            <div className="swiper-wrapper">
              {
                this.renderSwiperItem()
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="find-select">
          {
            this.renderSelect()
          }
        </div>
        <div className="find-playList">
          <div className="playList-title">
            <h1>推荐歌单</h1>
            <div className="playList-square">
              <span>歌单广场</span>
            </div>
          </div>
          <div className="playList-container">
            {
              this.renderPlayList()
            }
          </div>
        </div>
        <Route path={`${match.url}/:id`} component={PlayDetail}></Route>
      </div>
    )
  }
}

export default Find
