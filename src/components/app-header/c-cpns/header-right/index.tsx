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
  const { themeMode: mode } = useSelector((state: RootState) => ({
    themeMode: state.global.themeMode
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

  function themeClickHandle(mode: string) {
    const newTheme = mode === 'light' ? 'dark' : 'light'
    dispatch(changeThemeAction(newTheme))
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn' onClick={() => themeClickHandle(mode)}>{theme[mode]?.label}</span>
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
