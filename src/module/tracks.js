export class Tracks{
  constructor(id, name, author) {
    this.id = id
    this.name = name
    this.author = author
  }
}

export function createTracks(item) {
  return new Tracks(
    item.id,
    item.name,
    item.ar[0].name
  )
}