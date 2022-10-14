import { CreatedTasks } from '../CreatedTasks/Createdtasks'
import { Concluded } from '../Concluded/Concluded'
import { Task } from '../Task/Task'

import clipboard from '../../assets/clipboard.svg'
import styles from './Tasks.module.css'

export function Tasks() {

  function NoTasks() {
    return (
      <div className={styles.tasks}>
        <img src={clipboard} alt="clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        Crie tarefas e organize seus itens a fazer
      </div>
    )
  }

  function HasTasks() {
    return (
      <div>
        <Task />
      </div>
    )
  }

  return (
    <main className={styles.main}>

      <header className={styles.info}>
        <CreatedTasks />

        <Concluded />
      </header>

      <div>{HasTasks()}</div>

    </main>
  )
}