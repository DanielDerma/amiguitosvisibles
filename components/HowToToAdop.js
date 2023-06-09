import React, { useEffect, useState } from "react";
import styles from "./../styles/HowToToAdop.module.css";

const HowTo = (props) => {
  const [searchField, setSearchField] = useState("");
  const items = [
    {
      name: "Aerosols",
      description: "Recyclable at home",
      url: "https://www.recyclenow.com/recycle-an-item/aerosols",
      image:
        "https://images.unsplash.com/photo-1635766054474-ebaba5355bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Crisp packets",
      description: "Recyclable out of home",
      url: "https://www.recyclenow.com/recycle-an-item/crisp-packets",
      image:
        "https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1969&q=80",
    }
  ];

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleRefugioOnly = (info) => {
    props.setClickData(info)
    props.setAmiguitoForSell(true)
  }

  console.log(props.listDandoAdopcion)

  return (props?.listDandoAdopcion?.length > 0 ? (<div className={props.support ? styles.howtosupport : styles.howto}>
    <div className={styles.title}>Dando en adopción</div>
    {/* <div className={styles.input}>
      <img src="search.svg" className={styles.search} />
      {searchField.length > 0 && (
        <img
          src="searchclear.svg"
          onClick={() => setSearchField("")}
          className={styles.clear}
        />
      )}
      <input
        placeholder="Search for an item"
        value={searchField}
        onChange={handleChange}
      />
    </div> */}
    <div className={props.support ? styles.resultssupport : styles.results}>
      {
        props?.listDandoAdopcion?.length > 0 ? (
          props?.listDandoAdopcion.map((item, i) => (<p
            onClick={() => handleRefugioOnly(item)}
            className={styles.result}
            key={i}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: "url(" + item.image + ")" }}
            ></div>
            <div className={styles.info}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.desc}>{item.description}</div>
            </div>
          </p>))
        ) : null
      }
    </div>
  </div>) : null

  );
};

export default HowTo;
