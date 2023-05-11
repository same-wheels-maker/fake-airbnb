import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types'
import { changeThemeAction } from '@/store/modules/global'
import theme from '@/assets/theme'

const HeaderRight = memo(() => {
  const [ showPanel, setShowPanel ] = useState(false)
  const dispatch = useDispatch()
  const { curTheme } = useSelector((state: RootState) => ({
    curTheme: state.global.curTheme
  }), shallowEqual)

  useEffect(() => {
    function windowClickHandle() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowClickHandle, true)
    return () => {
      window.removeEventListener('click', windowClickHandle)
    }
  }, [])

  function profileClickHandle() {
    setShowPanel(true)
  }

  function themeClickHandle(themeKey: string) {
    const newTheme = themeKey === 'dark' ? { key: 'light', label: theme.light.label } : { key: 'dark', label: theme.dark.label }
    dispatch(changeThemeAction(newTheme))
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn' onClick={() => themeClickHandle(curTheme.key)}>{curTheme.label}</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile'>
        <div className='badge' onClick={profileClickHandle}>
          <IconMenu />
          <IconAvatar />
        </div>

        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
