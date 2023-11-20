import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { Button } from '../Button'

describe('<Button />', () => {
  it('should render Primary button with label Primary and default size medium', () => {
    render(<Button primary={true} label="Primary" />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Primary')).toHaveClass('storybook-button--medium')
  })

  it('should render button with label Primary and size small', () => {
    render(<Button label="Primary" size="small" />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Primary')).toHaveClass('storybook-button--small')
  })

  it('should render button with label Secondary and default size medium', () => {
    render(<Button label="Secondary" />)
    expect(screen.getByText('Secondary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toHaveClass('storybook-button--medium')
  })

  it('should render button with label Secondary and size small', () => {
    render(<Button label="Secondary" size="small" />)
    expect(screen.getByText('Secondary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toHaveClass('storybook-button--small')
  })
})
