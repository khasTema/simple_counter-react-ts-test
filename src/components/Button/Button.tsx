import React from 'react'
import styles from './Button.module.css'

export interface BtnProps {
  action: string,
  onClick: () => void
}

const Button: React.FC<BtnProps> = ({action, onClick}): JSX.Element => {

  return (
    <button 
        onClick={() => onClick()} 
        className={`${styles.btn} ${action === 'add' ? styles.add : styles.delete}`}
        role={action}
    >

            {action}

    </button>
  )
}

export default Button
