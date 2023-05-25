import { memo, useCallback, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cnps/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { AppDispatch, RootState } from '@/types'
import HomeSectionV1 from './c-cnps/hoome-section-v1'
import SectionHeader from '@/components/section-header'
import SectinoRooms from '@/components/sections-rooms'
import SectionTabs from '@/components/section-tabs'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPricesInfo, highScoreInfo, discountInfo } = useSelector((state: RootState) => ({
    goodPricesInfo: state.home.goodPricesInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)
  const [city, setCity] = useState('')

  const tabNames = discountInfo?.dest_address?.map?.((item) => item.name)
  const tabClickHandle = useCallback(function (name: string) {
    setCity(name)
  }, [])

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])
  
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner> 
      <div className='content'>
        <div className='discount'>
          <SectionHeader title={discountInfo?.title} subtitle={discountInfo?.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectinoRooms roomList={discountInfo?.dest_list?.[city]} col={3} />
        </div>
        <HomeSectionV1 infoData={goodPricesInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
