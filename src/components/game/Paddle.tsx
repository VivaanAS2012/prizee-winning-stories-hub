
interface PaddleProps {
  position: number;
  isPlayer: boolean;
}

export const Paddle = ({ position, isPlayer }: PaddleProps) => {
  return (
    <div
      className="absolute w-4 h-[100px] bg-white rounded-full shadow-lg"
      style={{
        left: isPlayer ? 20 : 780,
        top: position,
      }}
    />
  );
};
