import { CreatedTasks } from '../CreatedTasks/Createdtasks'
import { Concluded } from '../Concluded/Concluded'

import styles from './InfoTask.module.css'

interface Tasks {
  created: number
  concluded: number
}

export function InfoTask({ created, concluded }: Tasks) {
  return (
    <div>
      <main className={styles.main}>

        <header className={styles.info}>
          <CreatedTasks quantityTasks={created} />

          <Concluded
            created={created}
            concluded={concluded}
          />
        </header>

      </main></div>
  )
}