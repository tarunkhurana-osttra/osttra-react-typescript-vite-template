import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders App component', () => {
    render(<App />)
    expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument()
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByText('count is 0')).toBeInTheDocument()
    expect(screen.getByTestId('vite-logo')).toHaveAttribute('href', 'https://vitejs.dev')
    expect(screen.getByTestId('react-logo')).toHaveAttribute('href', 'https://react.dev')
  })

  it('should expect count value increments when click on button', () => {
    render(<App />)
    fireEvent.click(screen.getByText('count is 0'))
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })
})
