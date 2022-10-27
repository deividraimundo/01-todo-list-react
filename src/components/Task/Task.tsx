import { Trash } from 'phosphor-react'
import { useState } from 'react'

import clipboard from '../../assets/clipboard.svg'
import styles from './Task.module.css'

interface Content {
  content: string
  onDeleteTask: (task: string) => void
  onCompletedTask: (task: string, remove: boolean) => void
}

export function Task({ content, onDeleteTask, onCompletedTask }: Content) {

  const [check, setCheck] = useState<boolean>(false)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCompletedTask() {
    if (check) {
      onCompletedTask(content, false)
    } else {
      onCompletedTask(content, true)
    }
  }

  function NoTasks() {
    return (
      <div className={styles.imgNoTasks}>
        <img src={clipboard} alt="clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        Crie tarefas e organize seus itens a fazer
      </div>
    )
  }

  function HasTasks() {
    return (
      <div className={styles.task}>
        <label >
          <div className={styles.wrapper}>
            <input
              checked={check}
              type="checkbox"
              onChange={handleCompletedTask}
            />
            <div
              id="checkButton"
              className={styles.inputNoCheck}
              onClick={() => {
                setCheck(!check)
              }}
            ></div>
          </div>
        </label>

        <p id="text" className={check ? styles.textCheck : styles.textNoCheck}>{content}</p>
        <button
          onClick={handleDeleteTask}
          title="Deletar tarefas"
          className={check ? styles.trashCheck : styles.trash}
        >
          <Trash size={21} />
        </button>
      </div >
    )
  }

  return (
    <div>
      {content.length > 0 ? HasTasks() : NoTasks()}
    </div>
  )
}
