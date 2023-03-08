import React from 'react'
import { PreloadStyle } from './Preload.styled'

type Props = {}

const Preload = (props: Props) => {
    return (
      <PreloadStyle>
      <div className='preloadContainer' >
          <div  className='preload'>
          <h1 className='letterB' >B</h1>
          <h1>BLOGA<span>ROO</span></h1>
          </div>
            </div>
            </PreloadStyle>
  )
}

export default Preload