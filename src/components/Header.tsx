import styles from '../styles/components/header.module.scss'

interface HeaderProps {
  handleViewChange: () => void;
}


export function Header(props: HeaderProps) {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <button onClick={props.handleViewChange}><h1>Avaliação Code and Soul</h1></button>
      </div>
    </header>
  )
}