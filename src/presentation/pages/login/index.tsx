import React, { useEffect, useState } from 'react'
import S from './styles.scss'
import Header from '@/presentation/components/header'
import Footer from '@/presentation/components/footer'
import FormLogin from '@/presentation/components/login-form'
import { User } from '@/core/domain/models'

const Login = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const currentUser: User = {
      username: 'Henrique',
      password: '',
      active: true
    }

    setUser(prev => ({ ...prev, ...currentUser }))
  }, [])

  return (
    <div className={S.login}>
      <Header />
      <FormLogin user={user} />
      <Footer />
    </div>
  )
}

export default Login
