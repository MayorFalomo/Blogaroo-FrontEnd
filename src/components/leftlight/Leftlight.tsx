import React from 'react'
import { Lightstyled } from './Left.styled'

type Props = {}

const Leftlight = (props: any) => {
  return (
    <Lightstyled>
      <div>
          <div className="postLight">
          <img className="leftLight" src="../leftLight.svg" alt="img" />
        </div>
      </div>
      </Lightstyled>
  )
}

export default Leftlight