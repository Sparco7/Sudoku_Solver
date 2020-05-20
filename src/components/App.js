import React from 'react';
import Board from './Board';


class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container container-app">
					<div className="row">
						<div className="head">
							<h1>Sudoku Solver</h1>
						</div>
						<div className="instructions">
							<p>Insert Sudoku or choose an option</p>
						</div>
					</div>
						<div>
							<Board />
						</div>
				</div>
			</div>
		)
	}

}

export default App;