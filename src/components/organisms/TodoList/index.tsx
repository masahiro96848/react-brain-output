import { RiDeleteBinLine } from 'react-icons/ri'
import styles from '../TodoList/styles.module.css'
import { Todo } from '../../../types/todo'

type TodoListProps = {
  filteredTodoList: Todo[]
  handleDeleteTodo: (id: string) => void
}

export const TodoList = (props: TodoListProps) => {
  const { filteredTodoList, handleDeleteTodo } = props
  return (
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
  )
}
