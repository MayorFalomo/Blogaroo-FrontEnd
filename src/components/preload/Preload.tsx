import React from 'react'
import { PreloadStyle } from './Preload.styled'
import Typewriter from 'typewriter-effect';

type Props = {}

const Preload = (props: Props) => {
    return (
      <PreloadStyle>
      <div className='preloadContainer' >
          <div  className='preload'>
            <h1 className='letterB' >B</h1>
                        <h1>BLOGA</h1>
            <Typewriter options={{ strings: ['ROO'], autoStart: true, loop: true }} />
          </div>
            </div>
            </PreloadStyle>
  )
}

export default Preload