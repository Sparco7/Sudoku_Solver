import React from 'react';
import '../sudoku.css';
import Row from './Row';
import calculateSudoku from '../calculateSudoku';


class Board extends React.Component {

	state = {
		board: [],
		userArr: [],
		sudokuSize: 9,
		option: "init",
		message: "",
		flag: false
		// term: ""

	}

  componentDidMount() {    
  		this.initBoard();
        // let stateBoard = this.initBoard();
        // this.setState({
        //     board: stateBoard
        // })

        //example
    //     this.setState({board:  [
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0]
		  // ]})

    //     this.setState({userArr:  [
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0],
		  //   [0,0,0,0,0,0,0,0,0]
		  // ]})
    } 


	 // initBoard = () => {
	 // 	this.setState({ option: "init"});
	 // 	console.log('getting inside of initBoard');
  //       // this.setState({board: []});
  //       let size = this.state.sudokuSize;
  //       let board = [];
  //       // creating 8 rows
  //       for(let j = 0; j < size; j++) {
  //           let row = [];
  //           for(let i = 0; i < size; i++) {
  //               row.push(null);
  //           }
  //           board.push(row);
  //       }
  //       this.setState({board: board}, function() {});
  //       // return board;
  //   }

    initBoard = () => {

    	console.log('entering initBoard');
    	this.setState({ option: "init"}, function() {});
    	this.setState({ flag: false});
    	this.setState( {message: ""});

        this.setState({board:  [
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0]
		  ]}, function() {});

        this.setState({userArr:  [
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0],
		    [0,0,0,0,0,0,0,0,0]
		  ]}, function() {});
    }

    easyBoard = () => {
    	this.setState({flag: true});
    	this.setState({ option: "easy"});
    	this.setState( {message: ""});
    	this.setState({ board:
	    	[
			    [7,5,1,4,6,0,9,2,3],
			    [2,9,8,3,0,5,4,6,7],
			    [6,0,3,7,9,0,8,1,5],
			    [9,0,2,0,0,0,3,0,6],
			    [3,8,6,9,5,0,0,7,4],
			    [4,7,0,2,3,6,0,8,9],
			    [8,6,9,0,2,3,7,4,1],
			    [1,3,7,6,8,0,0,0,0],
			    [5,0,4,1,7,9,0,3,8]
	    	]
    	})
    }

    mediumBoard = () => {
    	this.setState({flag: true});
    	this.setState({ option: "medium"});
    	this.setState( {message: ""});
    	this.setState({ board:
      		[
			    [4,8,0,2,0,0,9,0,6],
			    [7,0,0,1,0,4,0,8,0],
			    [6,2,0,0,8,7,0,1,0],
			    [2,0,0,4,0,0,0,3,7],
			    [9,0,4,8,0,3,6,2,1],
			    [1,0,0,0,0,6,8,9,4],
			    [3,0,0,6,0,2,1,0,0],
			    [0,0,6,7,0,9,0,0,2],
			    [0,4,0,0,1,0,7,0,0]
  			]		
    	})
    }

    hardBoard = () => {
    	this.setState({flag: true});
    	this.setState({ option: "hard"});
    	this.setState( {message: ""});
    	this.setState({board:  
    		[
				[5,3,0,0,7,0,0,0,0],
				[6,0,0,1,9,5,0,0,0],
				[0,9,8,0,0,0,0,6,0],
				[8,0,0,0,6,0,0,0,3],
				[4,0,0,8,0,3,0,0,1],
				[7,0,0,0,2,0,0,0,6],
				[0,6,0,0,0,0,2,8,0],
				[0,0,0,4,1,9,0,0,5],
				[0,0,0,0,8,0,0,7,9]
		    ]
		});
    }

    calculateFunc =  () => {
    	console.log('clicked Solve');
    	let result = calculateSudoku(this.state.board);
    	if(result) {
    		this.setState({option: "result"});
    		this.setState({board: result}, function() {});
    	}
    		
    	else {
    		this.setState({message: "can't solve :("});
    		// this.setState({ message: "can't solve"});
    		// console.log('test');

    	}
    		
    }


    printBoard = () => {
    	console.log('board is: ', this.state.board);
    }

    termFunction = (term, rows, i) => {
    	this.setState({ flag: true})
    	console.log(term, rows, i)
    	console.log(this.state.board)
    	let newBoard = this.state.board
    	newBoard[rows][i] = Number(term)
    	return this.setState({board:newBoard})
    };

	render() {
		// console.log("initail board is: ", this.state.board);
		return (
			<div className="container container-board">
				{
					(this.state.message === "can't solve :(") &&
					<div className="row fail-message">
						Can not solve this sudoku. Please insert different numbers
					</div>
				}

				<div className="row">
					<div className="col-10">
						<div> 
			                {
			                    this.state.board.map((row, i) =>
			                    <Row key={i} row={row} 
			                    index={i} board={this.state.board} 
			                    option={this.state.option}
			                    userArr={this.userArr}
			                    term={this.termFunction} />)
			                }
						</div>
					</div>
					<div className="col-1">
						{
							(this.state.flag) &&
							<div>
								<button type="button" className="btn btn-primary solve"
									onClick={()=> this.calculateFunc()}>
									Solve
								</button>
							</div>							
						}

						<div>
							<button type="button" className="btn btn-primary init"
								onClick={()=> this.initBoard()}>
								Init
							</button>
						</div>
						<div>
							<button type="button" className="btn btn-primary easy"
								onClick={()=> this.easyBoard()}>
								Easy
							</button>
						</div>
						<div>
							<button type="button" className="btn btn-primary medium"
								onClick={()=> this.mediumBoard()}>
								Medium
							</button>
						</div>
						<div>
							<button type="button" className="btn btn-primary hard"
								onClick={()=> this.hardBoard()}>
								Hard
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Board;

//deleted

						/*<div>
							<button type="button" className="btn btn-primary print-board"
								onClick={()=> this.printBoard()}>
								Print Board
							</button>
						</div> */

						// <div>
						// 	<button type="button" className="btn btn-primary submit"
						// 		onClick={()=> this.submitBoard()}>
						// 		Submit
						// 	</button>
						// </div>