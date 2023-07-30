import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { useTodo } from './useTodo.ts'
import { INIT_TODO_LIST } from '../constants/data.ts'

describe('【hooksテスト】 useTodo test', () => {
  describe('【関数テスト】handleAddTodo', () => {
    test('【正常系】handleAddTodoを更新できること', () => {
      const expectValue = 'テスト'
      // 引数
      const eventObject = {
        target: {
          value: expectValue,
        },
      }
      // hooksの呼び出し
      const { result } = renderHook(() => useTodo())
      // 初期状態の確認
      expect(result.current[0].addInputValue).toBe('')
      // hooksの実行
      act(() =>
        result.current[1].handleAddTodo(
          eventObject as React.ChangeEvent<HTMLInputElement>
        )
      )
      // 更新後の確認
      expect(result.current[0].addInputValue).toBe(expectValue)
    })
  })

  describe('【関数テスト】handleDeleteTodo', () => {
    // 予測値
    let expecetTodoList = []

    beforeEach(() => {
      // 予測値を初期化
      expecetTodoList = []
    })

    test('【正常系】Todoが削除されること', () => {
      // 引数
      const targetId = '1'

      expecetTodoList = INIT_TODO_LIST.filter((todo) => todo.id !== targetId)
      // hooksの呼び出し
      const { result } = renderHook(() => useTodo())
      // hooksの関数実行
      act(() => result.current[1].handleDeleteTodo(targetId))
      // 表示用TodoListが予想通り更新されないこと
      expect(result.current[0].filteredTodoList).toEqual(expecetTodoList)
    })
  })

  describe('【関数テスト】handleSearchTodo', () => {
    test('【正常系】検索ワードがある場合、検索された結果が反映される', () => {
      // 予測値
      const expectValue = [INIT_TODO_LIST[0]]
      // 引数
      const eventObject: React.ChangeEvent<HTMLInputElement> = {
        target: {
          value: '野球',
        },
      } as React.ChangeEvent<HTMLInputElement>

      // hooksの呼び出し
      const { result } = renderHook(() => useTodo())
      // hooksの関数実行
      act(() => result.current[1].handleSearchTodo(eventObject))
      // 結果判定
      expect(result.current[0].filteredTodoList).toEqual(expectValue)
    })

    test('【正常系】検索ワードがない場合、元のTodoリストが反映される', () => {
      // 予測値
      const expectValue = INIT_TODO_LIST
      // 引数
      const eventObject: React.ChangeEvent<HTMLInputElement> = {
        target: {
          value: '',
        },
      } as React.ChangeEvent<HTMLInputElement>

      // hooksの呼び出し
      const { result } = renderHook(() => useTodo())
      // hooksの関数実行
      act(() => result.current[1].handleSearchTodo(eventObject))
      // 結果判定
      expect(result.current[0].filteredTodoList).toEqual(expectValue)
    })
  })
})
