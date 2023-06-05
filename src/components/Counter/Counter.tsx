import React, {useState} from 'react'
import styles from './Counter.module.css'
import Button from '../Button/Button'

const Counter: React.FC = ():JSX.Element => {

  const [counter, setCounter] = useState<number>(0)

  const handleDelete = () => {
    if (counter === 0) {return counter}
    setCounter(prev => prev -= 1)
  }

  const handleAdd = () => {
    setCounter(prev => prev += 1)
  }

  return (
    <div className={styles.box} data-testid='counter-comp'>

      <span className={styles.value} data-testid='value'>{counter}</span>

      <div className={styles.controls}>
        <Button action={'delete'} onClick={handleDelete}/>
        <Button action={'add'} onClick={handleAdd}/>
      </div>

    </div>
  )
}

export default Counter
