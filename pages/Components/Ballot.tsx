import React from 'react';
import styles from '../../styles/Ballot.module.css'

export const Ballot = (props: any) => {
  const { item, isSelected } = props;
  const id = item.id;
  const photoUrl = item.photoUrL;
  const title = item.title;

  return (
    <div className={ isSelected ? styles.mainSelected : styles.main}>
      <p className={styles.title}>{title}</p>
      <img src={photoUrl} alt="photo" className={styles.image}/>
      <button className={styles.button} onClick={() => props.onSelectClick(id)}> Select </button>
    </div>
  );
};
