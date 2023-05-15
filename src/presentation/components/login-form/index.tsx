import React, { useState } from 'react'
import S from './styles.scss'

import Spinner from '@/presentation/components/spinner'
import { User } from '@/core/domain/models'
import Input from '@/presentation/components/input'

export type FormLoginProps = {
  user?: User
}

const FormLogin = ({ user }: FormLoginProps) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    console.log('submit')
    setLoading(true)

    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className={S.container}>
      <form>
        <h1>FORM LOGIN</h1>

        <Input type='email' name='email' placeholder='Digite seu email' />
        <Input type='password' name='password' placeholder='Digite sua senha' />

        <button type="submit" onClick={handleSubmit}>Sign in</button>

        {loading && <Spinner />}
      </form>
    </div>
  )
}

export default FormLogin
