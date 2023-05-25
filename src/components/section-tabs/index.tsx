import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

interface Props {
  tabNames?: string[], 
  tabClick?: (n: string) => void
}

const SectionTabs: React.FC<Props> = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [ curIndex, setCurIndex ] = useState(0)

  function itemClickHandle(index: number, item: string) {
    setCurIndex(index)
    tabClick?.(item)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => (
          <div className={classNames('item', { active: index === curIndex })} key={index} onClick={e => itemClickHandle(index, item)}>
            <span>{item}</span>
          </div>
        ))
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs