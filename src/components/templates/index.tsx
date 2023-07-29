import { useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
/* components */
import { InputSearchForm } from '../atoms/InputSearchForm'
import { AddTodo } from '../organisms/AddTodo'
import { TodoList } from '../organisms/TodoList'
import styles from './styles.module.css'
import { Todo } from '../../types/todo'

export const TodoTemplate = () => {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          inputValue={addInputValue}
          placeholder={'Todoを入力してください'}
          handleAddTodo={handleAddTodo}
          handleSubmitTodo={handleSubmitTodo}
        />
      </section>
      {/* Todo検索エリア */}
      <section className={styles.common}>
        <InputSearchForm
          searchInputValue={searchKeyword}
          placeholder={'キーワードを入力してください'}
          handleSearchTodo={handleSearchTodo}
        />
      </section>
      {/* Todoリスト表示エリア */}
      <section className={styles.common}>
        <TodoList
          filteredTodoList={filteredTodoList}
          handleDeleteTodo={handleDeleteTodo}
        />
      </section>
    </div>
  )
}
