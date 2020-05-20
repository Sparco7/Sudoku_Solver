import React from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import '../sudoku.css';

class Square extends React.Component {

    // ArrowKeysReact.config({
	   //    left: () => {
	   //      console.log('left key detected.');
	   //    },
	   //    right: () => {
	   //      console.log('right key detected.');
	   //    },
	   //    up: () => {
	   //      console.log('up key detected.');
	   //    },
	   //    down: () => {
	   //      console.log('down key detected.');
	   //    }
    // });
	onInputChange = event => {
		// let cb = () => {
			// console.log(this.state.term);
		// 	this.props.userArr([this.props.rows,this.props.i], this.state.term)
		// }
		// this.setState({term: event.target.value}, cb)
		this.props.term(event.target.value, this.props.rows, this.props.i);
		// console.log('term is: ', this.state.term);
		// this.props.userArr([this.props.rows,this.props.i], this.state.term);
	};

	// changeStateTerm = () => {
	// 	this.setState({term: ''});
	// }

	consoleMe = () => {
		console.log('term is: ', this.state.term);
	}
	// helperValue = () => (this.props.board[this.props.rows][this.props.i] === 0)  ? '' : this.props.board[this.props.rows][this.props.i];

	helperValue = () => {
		let value = this.props.board[this.props.rows][this.props.i];
			 if ((value >= 1) && (value <= 9))
			 	return value;
			 else
			 	return '';
	}
	setClass = () => {
		let rows = this.props.rows;
		let cols = this.props.i;
		if ((rows === 2 || rows === 5) && (cols === 2 || cols === 5))  {
			return "square row-space col-space-right";
		} else if (rows === 2 || rows === 5) {
			return "square row-space";
		} else if (cols === 2 || cols === 5) {
			return "square col-space-right";
		} else {
			return "square";
		}
	} 
	render () {
		// console.log('i is: ', this.props.i);
		// console.log('term is: ', this.state.term);
		// console.log([this.props.rows,this.props.i], this.state.term)
		return (
			<div>
				{	
					<div className={this.setClass()}>
        
    						{
    							(this.props.option === "init") && 
    								<input type="text"  className="input"
    									value={this.helperValue()}  								
    									onChange={this.onInputChange} />
    							
    						}
						
						
							{
								(this.props.value !== 0) && (this.props.option !== "init") &&
								<span className="numbers seted-board"> {this.props.value} 
	
									
								</span>
							}

							{
								(this.props.value === 0) && (this.props.option !== "init") &&
								<span className="empty-color seted-board"></span>
							}

						
					</div>
				}
			</div>
		);
	}
}

export default Square;