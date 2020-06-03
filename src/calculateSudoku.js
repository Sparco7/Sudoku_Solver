

const calculateSudoku = (puzzle) => {
  const date = new Date();
  const constCurrent = date.getTime() + 290000;
  let current = date.getTime();
  // const printSudoku = (puzzle) => {
  //   console.log(puzzle);
  // }
  const saveEmptyPositions = (puzzle) => {
    let emptyPositionsArr = [];
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(!puzzle[i][j]) {
          emptyPositionsArr.push([i, j]);
        }
      }
    }
    return emptyPositionsArr;
  }

  const checkRow = (puzzle) => {
    let arr = [];
    for(let i = 0; i < 9 ; i++) {
      arr = [];
      for(let j = 0; j < 9; j++ ) {
        if((!arr.includes(puzzle[i][j])) && (puzzle[i][j] !== 0)) {
          arr.push(puzzle[i][j])
        } else { 
          if(puzzle[i][j] !== 0) {
            // console.log('there is a double value in a row which is:' ,
              // puzzle[i][j], i, j);
            return 0;
          }
        }
      }
    }
    // console.log('No double value in a row:)');
    return 1;
  }

  const checkCol = (puzzle) => {
    let arr;
    for(let i = 0; i < 9; i++) {
      arr = [];
      for(let j = 0; j < 9; j++) {
        if((!arr.includes(puzzle[j][i])) && (puzzle[j][i] !== 0)) {
          arr.push(puzzle[j][i])
        } else {
          if(puzzle[j][i] !== 0) {
            // console.log('there is a double value in a col which is:' ,
              // puzzle[j][i], i, j);
            return 0;
          }          
        }
      }
    }
    // console.log('No double value in a col:)');
    return 1;
  }

  // not working yet
  const check3x3square = (puzzle) => {
    let arr = [];
    let m,n;
    m = 0;
    n = 0;
    for(let k = 0; k < 9; k ++) {
      arr = [];
      for(let i = 0; i < 3; i++) {
        for(let j = 0 ; j < 3 ; j++) {
          if((!arr.includes(puzzle[i+m][j+n])) && (puzzle[i+m][j+n] !== 0)) {
            arr.push(puzzle[i+m][j+n])
          } else {
            if(puzzle[i+m][j+n] !== 0) {
              // console.log('there is a double value in a 3x3 which is:' ,
                // puzzle[i+m][j+n], i, j);
              return 0;
            }          
          }          
        } // 3rd for
      } // 2nd for
     if(k === 1 || k === 4 || k === 7)
      m = 3;
     if(k === 2 || k === 5 || k === 8)
      m = 6;
    
    if(k >= 3 && k <= 5)
      n = 3;
    if(k >= 6 && k <= 8)
      n=6;

    } // 1st for
    // console.log('No double value in a 3x3 square:)');
    return 1;
  }

  const checkValue = (puzzle) => {
    return (checkRow(puzzle) && checkCol(puzzle) && check3x3square(puzzle))
  }

  const insertNewValue = (puzzle, emptyArr) => {
    let d = new Date();
    let n = d.getSeconds();
    let i = 0;
    let flag;
    let length = emptyArr.length;
    while(length > i) {
      current += 1;
      if(current === constCurrent) {
        // console.log('No solution');
        return 0;      
      }

      flag = false;
      puzzle[emptyArr[i][0]][emptyArr[i][1]]++;

      while((i < length) && (puzzle[emptyArr[i][0]][emptyArr[i][1]] <= 9) && (!flag)) {
       // actions for valid value
       if(checkValue(puzzle)) {
        flag = true;
        i++;
       } else {
        puzzle[emptyArr[i][0]][emptyArr[i][1]]++;
       }

      } // 2nd while
        if(!flag) {
         puzzle[emptyArr[i][0]][emptyArr[i][1]] = 0;
         i--;
       }
      // return;
    } // while
  } //function

  // ******************
  // *** ACTIONS *****
  // ******************
  // printSudoku(puzzle);
  // console.log('0 values: ', saveEmptyPositions(puzzle));
  // console.log(checkRow(puzzle));
  // console.log(checkCol(puzzle));
  // console.log(check3x3square(puzzle));
  if(insertNewValue(puzzle,saveEmptyPositions(puzzle)) === 0)
    return 0;
  // console.log(puzzle);
  // console.log(forCheck());
  return puzzle;	
}

export default calculateSudoku;