import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import Login from '../Login'

describe('<Login />', () => {
  it('should render Login text', () => {
    render(<Login />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
