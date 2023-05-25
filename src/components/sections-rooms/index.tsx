import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

interface Props {
  roomList?: any[]
  col?: number
}

const SectinoRooms: React.FC<Props> = memo((props) => {
  const { roomList, col } = props 

  return (
    <RoomsWrapper>
      {
        roomList?.map?.((item) => (
          <RoomItem key={item.id} data={item} col={col} />
        ))
      }
    </RoomsWrapper>
  )
})

SectinoRooms.propTypes = {
  roomList: PropTypes.array,
  col: PropTypes.number
}

export default SectinoRooms