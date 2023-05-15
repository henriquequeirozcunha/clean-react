import React from 'react'
import S from './styles.scss'

const Spinner = () => {
  return (
    <div data-test-id="spinner" className={S.spinner}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner
