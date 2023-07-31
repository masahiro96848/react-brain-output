import React, {
  ReactNode,
  useContext,
  createContext,
  ChangeEvent,
  FormEvent,
} from 'react'
import { useTodo } from '../hooks/useTodo'
import { Todo } from '../types/todo'

interface TodoContextType {
  addInputValue: string
  searchKeyword: string
  filteredTodoList: Todo[]
  handleAddTodo: (e: ChangeEvent<HTMLInputElement>) => void
  handleDeleteTodo: (id: string) => void
  handleSubmitTodo: (e: FormEvent) => void
  handleSearchTodo: (e: ChangeEvent<HTMLInputElement>) => void
}

type Props = {
  children: ReactNode
}

/**
 * TodoContext
 */
const TodoCotext = createContext({} as TodoContextType)

/**
 * TodoProvider
 */
export const TodoProvider: React.FC<Props> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう

  const [
    { addInputValue, searchKeyword, filteredTodoList },
    { handleAddTodo, handleDeleteTodo, handleSubmitTodo, handleSearchTodo },
  ] = useTodo()

  return (
    <TodoCotext.Provider
      value={{
        addInputValue,
        searchKeyword,
        filteredTodoList,
        handleAddTodo,
        handleDeleteTodo,
        handleSubmitTodo,
        handleSearchTodo,
      }}
    >
      {children}
    </TodoCotext.Provider>
  )
}

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoCotext)
