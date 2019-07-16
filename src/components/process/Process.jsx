import React, { Component } from 'react'
import './process.styl'
export class Process extends Component {
  handelTouchStar = (e) => {
    // console.log('handelTouchStar',e.touches)
    this.props.onDragStart()
  }
  handelTouchMove = (e) => {
    // console.log('handelTouchMove',e.touches)
    const disableDrag = this.props.disableDrag
    if(!disableDrag) {
      return true
    }
    
    let process = e.touches[0].clientX / window.screen.width
    // console.log('process',process)
    this.props.onDrag(process)
  }
  handelTouchEnd = (e) => {
    // console.log('handelTouchEnd',e.touches)
    this.props.onDragEnd()
  }
  render() {
    const { process } = this.props
    return (
      <div className="process-cmp">
        <div className="process-line"></div>
        <div className="process-jindu" style={{width: `${process * 100}%`}}></div>
        <div className="process-button"
        style={{left: `${process * 100}%`}}
        onTouchStart={this.handelTouchStar}
        onTouchMove={this.handelTouchMove}
        onTouchEnd={this.handelTouchEnd}
        ></div>
      </div>
    )
  }
}

export default Process
