import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <div className={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      </div>
    </div>
  );
};
