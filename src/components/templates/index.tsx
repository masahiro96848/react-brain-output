import React from 'react'
import styles from './styles.module.css'

export const TodoTemplate = () => {
  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      {/* Todo追加エリア */}
      <section></section>
      {/* Todo検索エリア */}
      <section></section>
      {/* Todoリスト表示エリア */}
      <section></section>
    </div>
  )
}
