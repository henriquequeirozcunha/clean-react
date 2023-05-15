import React from 'react'
import S from './styles.scss'

type InputProps = {
  labelFor?: string
  initialValue?: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ labelFor, ...props }: InputProps) => {
  return (
    <div className={S.wrapper}>
      <input {...props} />
      <span className={S.status}></span>
    </div>
  )
}

export default Input
