import React from 'react'
import S from './styles.scss'

import Spinner from '@/presentation/components/spinner'
import { User } from '@/core/domain/models'

export type FormLoginProps = {
  user?: User
}

const FormLogin = ({ user }: FormLoginProps) => {
  return (
    <div className={S.container}>
        FORM LOGIN

      <Spinner />
    </div>
  )
}

export default FormLogin
