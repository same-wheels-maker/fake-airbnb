import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

interface Props {
  title: string
  subtitle?: string
}

const SectionHeader: React.FC<Props> = memo((props) => {
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <div className='title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default SectionHeader