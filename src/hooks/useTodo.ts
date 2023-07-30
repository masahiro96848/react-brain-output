import { useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../types/todo'

export const useTodo = () => {
  const sampleTodo: Todo[] = [
    { id: '1', title: '野球' },
    { id: '2', title: 'サッカー' },
    { id: '3', title: 'バスケットボール' },
  ]

  const [addInputValue, setAddInputValue] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>(sampleTodo)

  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setAddInputValue(e.target.value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    if (addInputValue === '') return
    const newTodo: Todo = {
      id: uuidv4(),
      title: addInputValue,
    }
    setTodoList([...todoList, newTodo])
    setAddInputValue('')
  }

  const handleDeleteTodo = (id: string) => {
    const todo = todoList.filter((item) => item.id !== id)
    setTodoList(todo)
  }

  const handleSearchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  // 絞り込み後のTodoリスト
  const filteredTodoList = todoList.filter((item) =>
    item.title.startsWith(searchKeyword)
  )

  // 状態管理を表すもの
  const states = {
    addInputValue,
    searchKeyword,
    filteredTodoList,
  }

  // 関数やロジック
  const actions = {
    handleAddTodo,
    handleDeleteTodo,
    handleSubmitTodo,
    handleSearchTodo,
  }

  return [states, actions] as const
}
