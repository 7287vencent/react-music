import React, { Component } from 'react'
import './loading.styl'
export class Loading extends Component {
  render() {
    const { show, text } = this.props
    return (
      <div className="loading-box" style={{display: show ? 'block': ''}}>
        <span className="loading">{text}</span>
      </div>
    )
  }
}

export default Loading
