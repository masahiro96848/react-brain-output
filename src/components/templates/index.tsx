/* components */
import { InputSearchForm } from '../atoms/InputSearchForm'
import { AddTodo } from '../organisms/AddTodo'
import { TodoList } from '../organisms/TodoList'
/* hooks */
import { useTodo } from '../../hooks/useTodo'
import styles from './styles.module.css'

export const TodoTemplate = () => {
  const [
    { addInputValue, searchKeyword, filteredTodoList },
    { handleAddTodo, handleDeleteTodo, handleSearchTodo, handleSubmitTodo },
  ] = useTodo()

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
