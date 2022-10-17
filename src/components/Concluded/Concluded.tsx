import styles from './Concluded.module.css'

interface Conc {
  concluded: number
  created: number
}

export function Concluded({ created, concluded }: Conc) {
  return (
    <div className={styles.concluded}>
      <p>Concluidas</p>
      <div>{concluded} de {created}</div>
    </div>
  )
}