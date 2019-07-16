export class Song {
  constructor({id, name, singer, album, image, duration}) {
    this.id = id
    this.name = name
    this.singer = singer
    this.album = album
    this.image = image
    this.duration = duration
  }
}

export function createSong(song) {
  return new Song({
    id: song.id,
    name: song.name,
    singer: fliterSinger(song.ar) || '',
    album: song.al.name,
    image: song.al.picUrl || null,
    duration: song.dt / 1000
  })
}

export const formatSongs = function(playList){
  let Songs = []
  playList.forEach(item => {
    if(item.id) {
      Songs.push(createSong(item))
    }
  })
  return Songs
}


// 格式化歌手信息
function fliterSinger(singers) {
  if(!Array.isArray(singers) || !singers.length) {
    return ''
  }
  let arr = []
  singers.forEach(item => arr.push(item.name))
  return arr.join('/')
}