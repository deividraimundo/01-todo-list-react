import styles from './Createdtasks.module.css'

interface QuantityTasks {
  quantityTasks: number
}

export function CreatedTasks({ quantityTasks }: QuantityTasks) {
  return (
    <div className={styles.createdtasks}>
      <p>Tarefas criadas</p>
      <div>{quantityTasks}</div>
    </div>
  )
}