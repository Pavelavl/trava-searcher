import React from 'react'
import sun from '../../assets/sun.svg'
const Theme: React.FC = (): JSX.Element => {
  return (
    <div>
      <img src={sun} alt="" style={{width: 33, height: 33}}/>
    </div>
  )
}

export default Theme