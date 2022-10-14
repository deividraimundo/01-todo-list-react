import { Header } from './components/Header/Header'
import { Insertbar } from './components/InsertBar/Insertbar'
import { Tasks } from './components/Tasks/Tasks'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Insertbar />

        <Tasks />
      </div>
    </div>
  )
}
