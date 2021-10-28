import React, { useState } from 'react';
import { Ballot } from './Ballot';
import styles from '../../styles/BallotCategory.module.css'

export const BallotCategory = (props: any) => {
  const { items, title } = props.item;
  const [selectedItem, setSelectedItem] = useState('')

  const ballotClick = (id: any) => {
    setSelectedItem(id)
    props.ballotClicked(props.item.id, id)
  }

  return (
    <div className={styles.main}>
      <p className={styles.title}>{title}</p>
      <div className={styles.ballot}>
        {items.map((item: { id: any; }) => {
          return (
            <Ballot key={item.id} item={item} onSelectClick={ballotClick} isSelected={selectedItem === item.id}/>
          )
        })}
      </div>
    </div>
  );
};
export default BallotCategory;
