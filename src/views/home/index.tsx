import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cnps/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { AppDispatch, RootState } from '@/types'
import SectionHeader from '@/components/section-header'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPricesInfo } = useSelector((state: RootState) => ({
    goodPricesInfo: state.home.goodPricesInfo,
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
        <div className='good-price'>
          <SectionHeader title={goodPricesInfo.title}></SectionHeader>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
