import React from 'react'
import S from './styles.scss'

export type ButtonProps = {
  label: string
  color?: 'primary' | 'secondary' | 'transparent'
  fullSize?: boolean
  onUserClick: () => void
  icon?: JSX.Element
} & React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

const Button = ({
  label,
  color = 'primary',
  fullSize = false,
  onUserClick,
  icon,
  ...props
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    onUserClick && onUserClick()
  }

  return (
    <div className={S.wrapper}>
      {!!icon && <div className='icon'>{icon}</div>}
      <button {...props} onClick={e => handleClick(e)} className={`color--${color}`}>{label}</button>
    </div>
  )
}

export default Button
