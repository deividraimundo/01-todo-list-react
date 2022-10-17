import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../Task/Task'
import { InfoTask } from '../InfoTask/InfoTask'

import styles from './Insertbar.module.css'

export function Insertbar() {

  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState<string>('')

  function handleCreatedNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText("")
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(taskWithoutDeleteOne)
  }

  const isNewTaskEmpty = newTaskText.length === 0

  return (
    <div className={styles.container} >
      <form className={styles.insertbar} onSubmit={handleCreatedNewTask}>
        <textarea
          name="task"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          className={styles.bar}
          required
        />

        <button
          type="submit"
          disabled={isNewTaskEmpty}
          className={isNewTaskEmpty ? styles.buttonDisable : styles.button}
        >
          <div>Criar</div>
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <InfoTask
        created={tasks.length}
        concluded={0}
      />

      {
        tasks.length === 0 ? <Task
          key={""}
          content={""}
          onDeleteTask={deleteTask}
        /> : tasks.map((task) => {
          return <Task
            key={task}
            content={task}
            onDeleteTask={deleteTask}
          />
        })
      }
    </div>
  )
}