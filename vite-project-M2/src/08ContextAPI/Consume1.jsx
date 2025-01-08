import React, { useContext } from 'react'
import { context } from './ContextApi'

const Consume1 = () => {
    const data=useContext(context)
  return (
    <h1>{data.name}</h1>
  )
}

export default Consume1