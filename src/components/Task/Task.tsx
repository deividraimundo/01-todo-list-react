import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>

      <label htmlFor="check">
        <div className={styles.wrapper}>
          <input type="checkbox" id="check" />
          <span className={styles.button}></span>
        </div>
      </label>

      <p>Integer urna interdum massa libero auctor nque turpis semper. Duis vel sed fames integer.</p>
      <Trash className={styles.trash} size={18} />
    </div >
  )
}