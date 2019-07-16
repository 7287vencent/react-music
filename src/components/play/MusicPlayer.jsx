import React, { Component } from 'react'
import Player from './Play'
export class MusicPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSongId: 0
    }
  }
  componentWillMount() {
    const { match } = this.props
    this.setState({
      currentSongId: this.match.id
    })
  }
  changeCurrentIndex = (index) => {
    this.setState({
      currentSongId: index
    })
  }

  render() {
    return (
      <div>
        <Player
         currentSongId = {this.setState.currentSongId}
         changeCurrentIndex = {this.changeCurrentIndex}></Player>
      </div>
    )
  }
}

export default MusicPlayer
