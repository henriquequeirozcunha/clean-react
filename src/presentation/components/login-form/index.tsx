import React, { useState } from 'react'
import S from './styles.scss'

import Spinner from '@/presentation/components/spinner'
import { User } from '@/core/domain/models'
import Input from '@/presentation/components/input'
import Button from '@/presentation/components/button'
import { useAppDispatch } from '@/store/configure-store'
import { getUserAsync } from '@/store/user-slice'
import { useHistory } from 'react-router-dom'

export type FormLoginProps = {
  user?: User
}

type LoginInputDTO = {
  email: string
  password: string
}

type Error = Record<string, string>

const FormLogin = ({ user }: FormLoginProps) => {
  const [erros, setErros] = useState<Error[]>([])
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<LoginInputDTO>({
    email: '',
    password: ''
  })
  const dispatch = useAppDispatch()
  const history = useHistory()

  const validate = () => {
    if (state.email !== 'henrique@email.com') {
      const newError: Record<string, string> = {
        email: 'email inválido'
      }

      setErros([
        ...erros,
        newError
      ])
    }
  }

  const handleSignIn = async () => {
    validate()

    if (erros.length) {
      return
    }

    setLoading(true)

    await dispatch(getUserAsync({ email: state.email }))
  }

  const handleSignUp = async () => {
    validate()

    if (erros.length) {
      return
    }

    setLoading(true)

    await dispatch(getUserAsync({ email: state.email }))

    history.push('/home')
  }

  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={S.container}>
      <form>
        <h3 className={S.title}>FORM LOGIN</h3>

        {loading &&
          (<div className={S.spinnerWrapper}>
            <Spinner />
          </div>)}

        <Input type='email' name='email' placeholder='Digite seu email' onChange={handleChange} />
        <Input type='password' name='password' placeholder='Digite sua senha' onChange={handleChange}/>

        <div className={S.buttonWrapper}>
          <Button label='Sign In' type='submit' onUserClick={handleSignIn}/>
          <Button label='Sign Up' type='submit' onUserClick={handleSignUp}/>
        </div>

        {erros.length && (
          <div data-test-id='errorWrapper'>
          ERRO!
          </div>)}
      </form>
    </div>
  )
}

export default FormLogin
