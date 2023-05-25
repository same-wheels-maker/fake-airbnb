import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import PropTypes from 'prop-types'

interface Props {
  data: any,
  col?: number 
}

const RoomItem: React.FC<Props> = memo((props) => {
  const { data, col = 4 } = props

  return (
    <ItemWrapper verifyColor={data.verify_info?.text_color} col={col}>
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

RoomItem.propTypes = {
  data: PropTypes.any,
  col: PropTypes.number
}

export default RoomItem