import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [move, setMove] = useState('x');

  const handleClick = (n) => {
    const squares = [...board];
    if (squares[n] !== '') {
      return;
    }
    squares[n] = move;
    setBoard(squares);

    if (move === 'x') {
      setMove('o'); // Change '0' to 'o'
    } else {
      setMove('x');
    }
     
    if (checkDraw(squares)) {
        alert("It's a draw!");
        squares.fill('');
        setBoard(squares);
      } else if (checkWin(squares)) {
        alert("Winner!");
        squares.fill('');
        setBoard(squares);
      }
    }
    
    const checkDraw = (squares) => {
      // Check if all squares are filled
      return squares.every((square) => square !== '');
    }

  const checkWin = (squares) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
   
      

    for (let i = 0; i < conditions.length; i++) {
      const [a, b, c] = conditions[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return true;
      }
    }

    return false;
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={() => handleClick(0)}>{board[0]}</td>
            <td onClick={() => handleClick(1)}>{board[1]}</td>
            <td onClick={() => handleClick(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(3)}>{board[3]}</td>
            <td onClick={() => handleClick(4)}>{board[4]}</td>
            <td onClick={() => handleClick(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(6)}>{board[6]}</td>
            <td onClick={() => handleClick(7)}>{board[7]}</td>
            <td onClick={() => handleClick(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
