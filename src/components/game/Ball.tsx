
interface BallProps {
  position: { x: number; y: number };
}

export const Ball = ({ position }: BallProps) => {
  return (
    <div
      className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
