import React from 'react';
import Square from './Square';

const Row = ({row, index, board, option, userArr, term}) => {
	// console.log('board is: ', board);
	return (

		<div className="row">
			{ 

                row.map((square, i) =>
                    <Square key={i} square={square} i={i}
                    rows={index} board={board} userArr={userArr}
                    value={row[i]} option={option}  
                    term={term}/>)
            }
		</div>
	)
}

export default Row;