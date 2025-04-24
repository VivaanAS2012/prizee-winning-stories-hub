
import { useEffect, useRef, useState } from 'react';
import { Ball } from './Ball';
import { Paddle } from './Paddle';
import { ScoreDisplay } from './ScoreDisplay';

export const PingPong = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 400, y: 300 });
  const [ballDirection, setBallDirection] = useState({ x: 5, y: 5 });
  const [playerPaddleY, setPlayerPaddleY] = useState(250);
  const [computerPaddleY, setComputerPaddleY] = useState(250);
  
  const gameLoopRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        setPlayerPaddleY(Math.min(Math.max(relativeY, 0), 500));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateGame = () => {
      setBallPosition((prev) => ({
        x: prev.x + ballDirection.x,
        y: prev.y + ballDirection.y,
      }));

      // Ball collision with top and bottom
      if (ballPosition.y <= 0 || ballPosition.y >= 590) {
        setBallDirection((prev) => ({ ...prev, y: -prev.y }));
      }

      // Ball collision with paddles
      if (
        ballPosition.x <= 30 &&
        ballPosition.y >= playerPaddleY &&
        ballPosition.y <= playerPaddleY + 100
      ) {
        setBallDirection((prev) => ({ ...prev, x: Math.abs(prev.x) }));
      }

      if (
        ballPosition.x >= 760 &&
        ballPosition.y >= computerPaddleY &&
        ballPosition.y <= computerPaddleY + 100
      ) {
        setBallDirection((prev) => ({ ...prev, x: -Math.abs(prev.x) }));
      }

      // Computer paddle AI
      if (computerPaddleY + 50 < ballPosition.y) {
        setComputerPaddleY((prev) => Math.min(prev + 5, 500));
      } else if (computerPaddleY + 50 > ballPosition.y) {
        setComputerPaddleY((prev) => Math.max(prev - 5, 0));
      }

      // Scoring
      if (ballPosition.x <= 0) {
        setComputerScore((prev) => prev + 1);
        setBallPosition({ x: 400, y: 300 });
      } else if (ballPosition.x >= 800) {
        setPlayerScore((prev) => prev + 1);
        setBallPosition({ x: 400, y: 300 });
      }
    };

    gameLoopRef.current = requestAnimationFrame(function gameLoop() {
      updateGame();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    });

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [ballPosition, ballDirection, playerPaddleY, computerPaddleY]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-accent/10 to-accent/30">
      <div 
        ref={containerRef}
        className="relative w-[800px] h-[600px] bg-card border-4 border-accent rounded-lg shadow-xl overflow-hidden"
      >
        <ScoreDisplay playerScore={playerScore} computerScore={computerScore} />
        <Ball position={ballPosition} />
        <Paddle position={playerPaddleY} isPlayer={true} />
        <Paddle position={computerPaddleY} isPlayer={false} />
      </div>
    </div>
  );
};
