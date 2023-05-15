import React from 'react'
import Login from '.'
import '@testing-library/jest-dom'
import { render, cleanup, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Login Component', () => {
  let sut: RenderResult

  beforeEach(() => {
    sut = render(<Login />)
  })

  afterEach(cleanup)

  test('should render Login Component Correctly', () => {
    // expect(screen.getByText(/Sign in/i)).toBeInTheDocument()

    expect(sut.getByRole('button', { name: /sign in/i })).toBeInTheDocument()

    expect(sut.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(sut.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    expect(sut.queryByTestId('spinner')).not.toBeInTheDocument()
  })
  test('should render Spinner after click button', async () => {
    expect(sut.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(sut.getByPlaceholderText(/senha/i)).toBeInTheDocument()

    await userEvent.click(sut.getByRole('button', { name: /sign in/i }))

    expect(sut.queryByTestId('spinner')).not.toBeInTheDocument()
  })
  test('should show error div on invalid data', async () => {
    fireEvent.input(sut.getByPlaceholderText(/email/i), { target: { value: 'invalid_email@test.com' } })

    await userEvent.click(sut.getByRole('button', { name: /sign in/i }))

    expect(sut.queryByTestId('errorWrapper')).not.toBeInTheDocument()
  })
})
