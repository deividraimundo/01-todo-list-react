import rocket from '../../assets/rocket.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocket} alt="Rocket" />
        <p>to<span>do</span></p>
      </div>
    </header>
  )
}