import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './scroll.styl'

export class Scroll extends Component {
  componentDidUpdate() {
    if(this.bscroll && this.props.refresh) {
      this.bscroll.refresh()
    }
  }
  componentDidMount() {
    if(!this.bscroll) {
      this.bscroll = new BScroll(this.refs.scrollView, {
        probeType: 3,
        click: () => {}
      })
    }
    // 通知父级发生了滚动
    this.bscroll.on('scroll', (e) => {
      this.props.onScroll(e)
    })
  }
  componentWillUnmount() {
    this.bscroll = null
  }
  render() {
    return (
      <div className="scroll-view" ref="scrollView">
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Scroll
