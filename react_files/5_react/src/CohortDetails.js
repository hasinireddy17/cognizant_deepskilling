import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {
  const { name, status } = props;

  return (
    <div className={styles.box}>
      <h3 style={{ color: status === "ongoing" ? "green" : "blue" }}>
        {name}
      </h3>

      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;