import React, { memo } from 'react'
import { ItemWrapper } from './style'

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
      </div>
    </ItemWrapper>
  ) 
})

export default RoomItem