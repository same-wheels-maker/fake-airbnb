import appRequest from '../request'

export function getHomeGoodPriceData() {
  return appRequest.get({
    url: '/home/goodprice',
  })
}

export function getHomeHighScoreData() {
  return appRequest.get({
    url: '/home/highscore',
  })
}

export function getHomeDiscountData() {
  return appRequest.get({
    url: '/home/discount',
  })
}

export function getHomeHotRecommendData() {
  return appRequest.get({
    url: '/home/hotRecommenddest',
  })
}
