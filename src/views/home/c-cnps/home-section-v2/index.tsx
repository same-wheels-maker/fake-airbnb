import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectinoRooms from '@/components/sections-rooms'
import { IInfoData } from '@/types'
import SectionFooter from '@/components/section-footer'

interface Props {
  infoData: IInfoData
}

const HomeSectionV2: React.FC<Props> = memo((props) => {
  const { infoData } = props

  const [city, setCity] = useState('')
  const tabNames = infoData?.dest_address?.map?.((item) => item.name)
  const tabClickHandle = useCallback(function (name: string) {
    setCity(name)
  }, [])

  useEffect(() => {
    setCity(Object.keys(infoData.dest_list)[0])
  }, [infoData])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectinoRooms roomList={infoData?.dest_list?.[city]} col={3} />
      <SectionFooter name={city} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.any
}

export default HomeSectionV2