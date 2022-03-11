import styles from "./App.module.css"
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    if (Math.random() < 0.01) {
      setClicks(0);
    } else {
      setClicks(clicks + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div onClick={onClick} className={styles.clicks}>{clicks}</div>
    </div>
  );
}

export default App;
