import { PlusCircle } from 'phosphor-react'

import styles from './Insertbar.module.css'

export function Insertbar() {
  return (
    <div className={styles.insertbar}>
      <textarea name="assignment" placeholder='Adicione uma nova tarefa' className={styles.bar} />

      <button type="submit" className={styles.button}>
        <div>Criar</div>
        <PlusCircle size={16} weight="bold" />
      </button>
    </div>
  )
}