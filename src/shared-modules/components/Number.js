import React from 'react'
import { formatNumber } from 'shared-modules/helpers/helpers'

const Number = ({ number }) => {
  return <>{formatNumber(number)}</>
}

export default Number
