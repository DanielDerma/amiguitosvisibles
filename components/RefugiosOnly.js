import React, { useMemo, useState } from "react";
import styles from "./../styles/RefugiosOnly.module.css";
import { donateToInstitution } from "../api/DonateSol";

const Refugios = (props) => {
  const [money, setMoney] = useState(0);



  const handleChange = (e) => {
    setSearchField(e.target.value);
  };


  const handleContinue = () => {
    props.setRefugiosOnly(false)
  }

  const handleDonate = () => {
    let senderPublicKey = window.localStorage.getItem("publicKey");
    let receiverPublicKey = props.clickData.properties.creators[0].address;
    console.log(senderPublicKey, receiverPublicKey)
    let amount = money;
    donateToInstitution(senderPublicKey, receiverPublicKey, amount);
  };

  return (
    <div className={styles.regionselect}>
      <div className={styles.title}>{props.clickData?.name ? props.clickData?.name : "Refugio"}</div>
      <input type="number" min={0} className={styles.title2} placeholder="Cantidad a donar"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <div className={styles.containerButton}>
        <div onClick={handleDonate} className={styles.title3}>Donar</div>
      </div>
      <div className={styles.button} onClick={() => handleContinue()}>Regresar</div>
    </div>
  )
}

export default Refugios;
