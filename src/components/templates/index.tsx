import { useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RiDeleteBinLine } from 'react-icons/ri'
import { InputSearchForm } from '../atoms/InputSearchForm'
import styles from './styles.module.css'
import { Todo } from '../../types/todo'

export const TodoTemplate = () => {
  const sampleTodo: Todo[] = [
    { id: '1', title: '野球' },
    { id: '2', title: 'サッカー' },
    { id: '3', title: 'バスケットボール' },
  ]

  const [todo, setTodo] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>(sampleTodo)

  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    if (todo === '') return
    const newTodo: Todo = {
      id: uuidv4(),
      title: todo,
    }
    setTodoList([...todoList, newTodo])
    setTodo('')
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
        <form onSubmit={handleSubmitTodo}>
          <input
            type="text"
            className={styles.input}
            value={todo}
            placeholder="Todoを入力してください"
            onChange={handleAddTodo}
          />
        </form>
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
        <div>
          <ul className={styles.list}>
            {filteredTodoList.length > 0 ? (
              filteredTodoList.map((item) => (
                <li key={item.id} className={styles.todo}>
                  <span className={styles.task}>{item.title}</span>
                  <div
                    className={styles.icons}
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    <RiDeleteBinLine size={25} />
                  </div>
                </li>
              ))
            ) : (
              <p>No matching todos found.</p>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}
