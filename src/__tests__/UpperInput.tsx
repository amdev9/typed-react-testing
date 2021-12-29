//@ts-nocheck
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UpperInput from '../UpperInput'

test('sets the value to the upper version of the value', () => {
  render(<UpperInput />)
  const upperInput: any = screen.getByLabelText(/upper/i)
  const text = 'stuff'
  userEvent.type(upperInput, text)
  expect(upperInput.value).toEqual(text.toUpperCase())
})

