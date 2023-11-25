import { Knapsack } from "@/components/component/knapsack";
import ThreeScene from "@/components/component/ThreeScene";

export default function Home() {
  return (
    <div className="w-full h-screen pl-5  flex justify-center items-center">
      <Knapsack />
      <ThreeScene />
    </div>
  );
}
