// src/PongGame.js
import React, { useRef, useEffect, useState } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);
  const [player2Y, setPlayer2Y] = useState(0); // State to keep track of player 2's position

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to fit the viewport
    canvas.width = 600;
    canvas.height = 300;

    // Game variables
    const paddleWidth = 10;
    const paddleHeight = 80;
    const ballSize = 10;

    const player1 = {
      x: 0,
      y: canvas.height / 2 - paddleHeight / 2,
    };

    const player2 = {
      x: canvas.width - paddleWidth,
      y: player2Y,
    };

    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      speedX: 5,
      speedY: 2,
    };

    const draw = () => {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw paddles
      context.fillStyle = 'blue';
      context.fillRect(player1.x, player1.y, paddleWidth, paddleHeight);
      context.fillStyle = 'red';
      context.fillRect(player2.x, player2.y, paddleWidth, paddleHeight);

      // Draw ball
      context.fillStyle = 'green';
      context.fillRect(ball.x, ball.y, ballSize, ballSize);
    };

    const update = () => {
      // Move the ball
      ball.x += ball.speedX;
      ball.y += ball.speedY;

      // Ball collision with top and bottom walls
      if (ball.y <= 0 || ball.y >= canvas.height - ballSize) {
        ball.speedY = -ball.speedY;
      }

      // Ball collision with paddles (simple collision detection)
      if (
        (ball.x <= player1.x + paddleWidth && ball.y >= player1.y && ball.y <= player1.y + paddleHeight) ||
        (ball.x >= player2.x && ball.y >= player2.y && ball.y <= player2.y + paddleHeight)
      ) {
        ball.speedX = -ball.speedX;
      }

      draw();
      requestAnimationFrame(update);
    };

    draw();
    update();
  }, [player2Y]); // Rerun the effect when player2Y changes

  // Handle keydown event to move the right paddle
  useEffect(() => {
    const handleKeyDown = (event) => {
      const newY = player2Y + (event.key === 'ArrowUp' ? -10 : event.key === 'ArrowDown' ? 10 : 0);
      // Keep paddle within canvas bounds
      if (newY >= 0 && newY <= canvasRef.current.height - paddleHeight) {
        setPlayer2Y(newY);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [player2Y]);

  return (
    <div className="flex items-center justify-center bg-gray-900 h-[300px] w-[600px]">
      <canvas ref={canvasRef} className="border border-white"></canvas>
    </div>
  );
};

export default PongGame;
