import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RenderRoutes from "./routes";

function App() {
  return (
      <Router>
        <RenderRoutes/>
      </Router>
  );
}

export default App;
