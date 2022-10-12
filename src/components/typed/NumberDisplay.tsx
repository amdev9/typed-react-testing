
import React, { FC } from 'react'
import {useRef} from 'react'


let idCounter = 1

type Props = {
  number: number
}

const NumberDisplay: FC<Props> = ({number}) => {
  const id = useRef(idCounter++) // to ensure we don't remount a different instance

  return (
    <div>
      <span data-testid="number-display">{number}</span>
      <span data-testid="instance-id">{id.current}</span>
    </div>
  )
}

export default NumberDisplay
