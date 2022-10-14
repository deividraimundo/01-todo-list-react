import styles from './Createdtasks.module.css'

export function CreatedTasks() {
  return (
    <div className={styles.createdtasks}>
      <p>Tarefas criadas</p>
      <div>0</div>
    </div>
  )
}