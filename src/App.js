import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model as WebExperience } from "./assets/team-dioramas/web-experience/Web-experience"

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={1} />
        <WebExperience />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
