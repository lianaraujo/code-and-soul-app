interface HeaderProps {
  handleViewChange: () => void;
}

export function Header(props: HeaderProps) {
  return(
    <header>
      <button onClick={props.handleViewChange}><h1>Avaliação Code and Soul</h1></button>
    </header>
  )
}