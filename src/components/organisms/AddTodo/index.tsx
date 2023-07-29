import { ChangeEvent, FormEvent } from 'react'
import styles from '../AddTodo/styles.module.css'

type InputAddFormProps = {
  inputValue: string
  placeholder: string
  handleAddTodo: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmitTodo: (e: FormEvent) => void
}

export const AddTodo = (props: InputAddFormProps) => {
  const { inputValue, placeholder, handleAddTodo, handleSubmitTodo } = props
  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleAddTodo}
      />
    </form>
  )
}
