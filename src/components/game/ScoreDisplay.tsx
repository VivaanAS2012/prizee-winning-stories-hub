
interface ScoreDisplayProps {
  playerScore: number;
  computerScore: number;
}

export const ScoreDisplay = ({ playerScore, computerScore }: ScoreDisplayProps) => {
  return (
    <div className="absolute top-8 left-0 w-full flex justify-center gap-16 text-4xl font-bold text-white z-10">
      <span className="text-primary-foreground">{playerScore}</span>
      <span className="text-primary-foreground">{computerScore}</span>
    </div>
  );
};
