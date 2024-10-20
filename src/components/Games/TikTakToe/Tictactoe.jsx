import React, { useState, useEffect } from 'react';
import circle from '../../../assets/tictactoe/circle.png';
import cross from '../../../assets/tictactoe/cross.png';
import profilePic from "../../../assets/Kavindu.jpg";// Add Kavindu's profile photo

function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Game board state
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // State to track if it's the player's turn

  // Function to check for winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Handle player click
  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || calculateWinner(board)) return; // Prevent invalid moves
    const boardCopy = [...board];
    boardCopy[index] = 'X'; // Player move
    setBoard(boardCopy);
    setIsPlayerTurn(false); // Switch to computer's turn
  };

  // Computer move
  const computerMove = () => {
    const emptySquares = board
      .map((value, index) => (value === null ? index : null))
      .filter((val) => val !== null); // Find all empty squares

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const boardCopy = [...board];
      boardCopy[emptySquares[randomIndex]] = 'O'; // Computer marks a random empty square
      setBoard(boardCopy);
      setIsPlayerTurn(true); // Switch back to player's turn
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && !calculateWinner(board)) {
      const timer = setTimeout(() => {
        computerMove(); // Delay computer's move to make it feel more natural
      }, 500);
      return () => clearTimeout(timer); // Clean up timeout
    }
  }, [isPlayerTurn, board]);

  const winner = calculateWinner(board);

  // Update status messages based on game state
  let status = 'Hi, let\'s play a game'; // Default message when game hasn't started
  if (winner) {
    if (winner === 'X') {
      status = '"Damn it. GG!!!"'; // If X wins
    } else if (winner === 'O') {
      status = '"Oh yeahh! I won!!!"'; // If O wins
    }
  } else if (board.every(square => square === null)) {
    status = '"Hi, let\'s play a game"'; // No one has played yet
  } else {
    status = `${isPlayerTurn ? '"It\'s your turn"' : '"Here I go"'}`; // Ongoing game
  }

  let resetText = 'Reset';
  if (winner && winner === 'X') {
    resetText = 'Up for Another round? 😞'
  } else if (winner && winner === 'O') {
    resetText = 'Up for Another round? 😃'
  }

  const renderSquare = (index) => (
    <button
      className="w-24 h-24 flex items-center justify-center border border-gray-300"
      onClick={() => handleClick(index)}
    >
      {board[index] === 'X' && <img src={cross} alt="X" className="w-12 h-12" />}
      {board[index] === 'O' && <img src={circle} alt="O" className="w-12 h-12" />}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {/* Status Message with Profile Image */}
      <div className="flex items-center text-2xl mb-4 text-black">
        <img src={profilePic} alt="Kavindu" className="w-10 h-10 rounded-full mr-4" /> {/* Profile photo */}
        {status}
      </div>

      {/* Tic-Tac-Toe Board */}
      <div className="grid grid-cols-3 gap-2 ">
        {board.map((_, i) => renderSquare(i))}
      </div>

      {/* Reset Button */}
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={resetGame}
      >
        {resetText}
      </button>
    </div>
  );
}

export default Tictactoe;
