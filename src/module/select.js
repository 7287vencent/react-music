export class Select {
  constructor(img, title){
    this.img = img
    this.title = title
  }
}

export const SelectDetail = [
  new Select(require('../assets/images/Screenshot_20190714_153608_com.netease_10.png'), '每日推荐'),
  new Select(require('../assets/images/Screenshot_20190714_153608_com.netease_12.png'), '歌单'),
  new Select(require('../assets/images/Screenshot_20190714_153608_com.netease_14.png'), '排行榜'),
  new Select(require('../assets/images/Screenshot_20190714_153608_com.netease_16.png'), '电台'),
  new Select(require('../assets/images/Screenshot_20190714_153608_com.netease_18.png'), '直播')
]