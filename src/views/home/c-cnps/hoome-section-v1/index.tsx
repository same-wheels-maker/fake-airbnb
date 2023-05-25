import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectinoRooms from '@/components/sections-rooms'
import { IInfoData } from '@/types'

interface Props {
  infoData: IInfoData
}

const HomeSectionV1: React.FC<Props> = memo((props) => {
  const { infoData } = props
  
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectinoRooms roomList={infoData?.list} />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.any
}

export default HomeSectionV1