import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

interface Props {
  name?: string
}

const SectionFooter: React.FC<Props> = memo((props) => {
  const { name } = props

  return (
    <FooterWrapper colorKey={name ? 'secondaryColor' : 'fontPrimaryColor'}>
      <div className='info'>
        <span className='text'>{ name ? `显示更多${name}房源` : '显示全部' }</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter