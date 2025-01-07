import { render, screen } from '@testing-library/react'
import { Button, ButtonStyle } from './Button'

describe('Button', () => {
  test('test render', () => {
    render(<Button buttonStyle={ButtonStyle.PRIMARY}>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test className primary', () => {
    render(<Button buttonStyle={ButtonStyle.PRIMARY}>TEST</Button>)
    expect(screen.getByText('TEST').className).toMatch('primary')
  })

  test('test className text', () => {
    render(<Button buttonStyle={ButtonStyle.TEXT}>TEST</Button>)
    expect(screen.getByText('TEST').className).toMatch('text')
  })
})
