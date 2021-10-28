import React, { useEffect, useState } from 'react';
import { getBallots } from './api/getBallots';
import BallotCategory from './Components/BallotCategory';
import styles from '../styles/App.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#app');

export const App = () => {
	const [ballots, setBallots] = useState([]);
	const [clickedItems, setClickedItems] = useState([]);
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
		console.log(clickedItems);
		console.log(typeof(clickedItems));
		console.log(Object.entries(clickedItems));
		console.log(Object.values((Object.entries(clickedItems))));
	}

	function afterOpenModal() {
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(() => {
		async function fetchData() {
			const response = await getBallots();
			setBallots(response.items);
		}
		fetchData();
	}, [])

	const ballotClick = (idx: string, id: any) => {
		const _clickedItems = Object.assign([], clickedItems)
		_clickedItems[idx] = id
		setClickedItems(_clickedItems)
	}

	return (
		<div id="app">
			<div className={styles.main}>
				{ballots.map(ballot => {
					return (
						<BallotCategory key={ballot.id} item={ballot} ballotClicked={ballotClick} />
					)
				})}
			</div>
			<button className={styles.button} onClick={openModal}>Submit</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				// contentLabel="Example Modal"
				width="100%"
			>
				<button onClick={closeModal} className={styles.close}>X</button>
				<div className={styles.modalContents}>
					<h1>
						You selected following ballots!
					</h1>
					{
						Object.entries(clickedItems).map(item => {
							return (
								<li key={Object.keys(item)[0]}>{Object.values(item)[0]} : {Object.values(item)[1]}</li>
							)
						})
					}
				</div>
			</Modal >
		</div >
	);
};
export default App;
