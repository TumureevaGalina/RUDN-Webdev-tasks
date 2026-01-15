import EnergyFormula from "./components/EnergyFormula";
import PythagoreanTheorem from "./components/PythagoreanTheorem";
import CylinderVolume from "./components/CylinderVolume";
import QuadraticEquation from "./components/QuadraticEquation";
import SquareOfSum from "./components/SquareOfSum";
import WaterFormula from "./components/WaterFormula";
import Logarithm from "./components/Logarithm";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <div>
      <h2>Формулы для вёрстки:</h2>
      <ol>
        <EnergyFormula />
        <PythagoreanTheorem />
        <CylinderVolume />
        <QuadraticEquation />
        <SquareOfSum />
        <WaterFormula />
        <Logarithm />
      </ol>
      <InputComponent />
    </div>
  );
}

export default App;
