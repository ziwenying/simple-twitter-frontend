import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      moment.locale('zh-tw');
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const exactTimeFilter = {
  filters: {
    exactTime(datetime) {
      moment.locale('zh-tw');
      // 早上 08:55 ⋅ 2022年7月4日
      return datetime ? moment(datetime).format('a hh:mm ⋅ YYYY年M月D日') : '-'
    }
  }
}


export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}