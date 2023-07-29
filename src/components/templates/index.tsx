import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import styles from './styles.module.css'

export const TodoTemplate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <input
          type="text"
          className={styles.input}
          placeholder="Todoを入力してください"
        />
      </section>
      {/* Todo検索エリア */}
      <section className={styles.common}>
        <input
          type="text"
          className={styles.input}
          placeholder="キーワードを入力してください"
        />
      </section>
      {/* Todoリスト表示エリア */}
      <section className={styles.common}>
        <div>
          <ul className={styles.list}>
            <li className={styles.todo}>
              <span className={styles.task}>テスト01</span>
              <div className={styles.icons}>
                <RiDeleteBinLine size={25} />
              </div>
            </li>
            <li className={styles.todo}>
              <span className={styles.task}>テスト02</span>
              <div className={styles.icons}>
                <RiDeleteBinLine size={25} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
