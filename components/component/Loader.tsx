import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <small className="text-sma">{progress} % loaded</small>
    </Html>
  );
}
