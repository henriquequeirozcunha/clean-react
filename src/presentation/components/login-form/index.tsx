import React from 'react'
import S from './styles.scss'

import Spinner from '@/presentation/components/spinner'
import { User } from '@/core/domain/models'
import Input from '@/presentation/components/input'

export type FormLoginProps = {
  user?: User
}

const FormLogin = ({ user }: FormLoginProps) => {
  return (
    <div className={S.container}>
      <h1>FORM LOGIN</h1>

      <Input type='email' name='email' placeholder='Digite seu email' />

      <Spinner />
    </div>
  )
}

export default FormLogin
