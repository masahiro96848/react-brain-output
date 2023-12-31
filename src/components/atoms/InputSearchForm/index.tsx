import React from 'react'
import styles from '../InputSearchForm/styles.module.css'

type InputSearchFormProps = {
  searchInputValue: string
  placeholder: string
  handleSearchTodo: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSearchForm = (props: InputSearchFormProps) => {
  const { searchInputValue, handleSearchTodo, placeholder } = props
  return (
    <input
      type="text"
      className={styles.input}
      value={searchInputValue}
      placeholder={placeholder}
      onChange={handleSearchTodo}
    />
  )
}
