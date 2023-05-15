import React from 'react'
import Login from '.'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Login Component', () => {
  test('should render Login Component Correctly', () => {
    render(<Login />)

    // expect(screen.getByText(/Sign in/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
  })
  test('should render Spinner after click button', async () => {
    render(<Login />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: /sign in/i }))

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
  })
})
