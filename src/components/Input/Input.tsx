import styles from './Input.module.css'

export interface InputProps {
  prop?: string
}

export function Input({ prop = 'default value' }: InputProps) {
  return <div className={styles.Input}>Input {prop}</div>
}
