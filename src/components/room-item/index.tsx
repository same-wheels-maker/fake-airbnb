import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'

const RoomItem = memo((props: any) => {
  const { data } = props

  return (
    <ItemWrapper verifyColor={data.verify_info?.text_color}>
      <div className='inner'>
        <div className='cover'>
          <img src={data.picture_url} alt='' />
        </div>
        <div className='desc'>
          {data.verify_info?.messages?.join?.('·')}
        </div>
        <div className='name'>{data.name}</div>
        <div className='price'>￥{data.price}/晚</div>
        <div className='bottom'>
          <Rating className='rating' defaultValue={2.5} value={data.star_rating} precision={0.5} readOnly />
          <span className='extra'>{data.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  ) 
})

export default RoomItem