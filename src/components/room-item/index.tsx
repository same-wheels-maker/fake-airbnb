import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo((props: any) => {
  const { data } = props

  return (
    <ItemWrapper>
      <div>{data.name}</div>
    </ItemWrapper>
  ) 
})

export default RoomItem