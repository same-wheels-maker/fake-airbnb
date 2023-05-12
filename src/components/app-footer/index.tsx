import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo((props) => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {
            footerData.map(({ name, list }) => (
              <div className='footer-item' key={name}>
                <div className='name'>{name}</div>
                {
                  list.map((item) => (
                    <div className='list-item' key={item}>{item}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className='statement'>© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div> 
    </FooterWrapper>
  )
})

export default AppFooter
