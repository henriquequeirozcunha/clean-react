import React from 'react'
import S from './styles.scss'
import Header from '@/presentation/components/header'
import Footer from '@/presentation/components/footer'
import FormLogin from '@/presentation/components/login-form'

const Login = () => {
  return (
    <div className={S.login}>
      <Header />
      <FormLogin />
      <Footer />
    </div>
  )
}

export default Login
