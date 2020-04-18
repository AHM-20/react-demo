import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((respone) => respone.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handlechange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		/*line bellow is shortcut for: //const monsters = this.state.monsters AND const searchField = this.state.searchField*/
		const { monsters, searchField } = this.state;

		/* Creating a new array by filtering the searched value */
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		console.log(filteredMonsters.length);

		return (
			<div className="App">
				<h1>Monsters</h1>
				<SearchBox
					placeholder="Search Monsters"
					/*e.target.value is the value of the search input */
					handlechange={this.handlechange}
				/>
				{/* We pass the state object as a prop called:"monsters" which is then used in the card list component */}
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
