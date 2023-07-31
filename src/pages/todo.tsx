import { TodoProvider } from '../contexts/TodoContext'
import { TodoTemplate } from '../components/templates'

export const TodoPage = () => {
  return (
    <TodoProvider>
      {/* TodoProvider直下のコンポーネントでコンテキストに定義した状態、ロジックをどこでも呼び出せる */}
      <TodoTemplate />
    </TodoProvider>
  )
}
