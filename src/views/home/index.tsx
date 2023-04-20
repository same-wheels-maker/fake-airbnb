import React, { memo, useEffect } from 'react'
import appReqquest from '@/services'

const Home = memo(() => {
  useEffect(() => {
    appReqquest.get({ url: 'home/highscore' }).then((res) => {
      console.log(res)
    })
  }, [])

  return <div>home</div>
})

export default Home
