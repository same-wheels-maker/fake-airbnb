import { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cnps/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { AppDispatch, RootState } from '@/types'
import HomeSectionV1 from './c-cnps/hoome-section-v1'
import HomeSectionV2 from './c-cnps/home-section-v2'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPricesInfo, highScoreInfo, discountInfo, recommedInfo } = useSelector((state: RootState) => ({
    goodPricesInfo: state.home.goodPricesInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommedInfo: state.home.recommendInfo
  }), shallowEqual)

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])
  
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner> 
      <div className='content'>
        <HomeSectionV2 infoData={discountInfo} /> 
        <HomeSectionV2 infoData={recommedInfo} />
        <HomeSectionV1 infoData={goodPricesInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
