import React from "react";
import styles from "./pagination.module.css";

const pagination = () => {
  return <div className={styles.container}>
    <button className={styles.buttons} disabled>Previous</button>
    <button className={styles.buttons}>Next</button>
  </div>;
};

export default pagination;
