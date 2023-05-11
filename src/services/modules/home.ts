import appRequest from '../request'

export function getHomeGoodPriceInfo() {
  return appRequest.get({
    url: '/home/goodprice',
  })
}
