import * as React from 'react'
import {render, screen} from '@testing-library/react'
import { ThemeConsumer, ThemeContext, ThemeProvider, IThemeContext } from '../typed/ThemeContext'
 
/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test('ThemeConsumer shows default value', () => {
  render(<ThemeConsumer />)
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
    'My Name Is: false',
  )
})

test('ThemeConsumer shows value from provider', () => {
  const testObj: IThemeContext = { dark: true }
  render(
    <ThemeContext.Provider value={ testObj }>
      <ThemeConsumer />
    </ThemeContext.Provider>
  )
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: true')
})

test('ThemeProvider shows value from provider', () => {
  const testDarkBoolean: boolean = true
  render(
    <ThemeProvider darkBoolean={testDarkBoolean}>
      <ThemeContext.Consumer>
        {(contextObj: IThemeContext) => <div>Received: {contextObj.dark.toString()}</div>}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: true')
})



test('ThemeProvider/Consumer shows dark boolean', () => {
  const testDarkBoolean: boolean = true
  render(
    <ThemeProvider darkBoolean={testDarkBoolean}>
      <ThemeConsumer />
    </ThemeProvider>
  )
  expect(screen.getByText(/^My Name Is:/).textContent).toBe('My Name Is: true')
})



