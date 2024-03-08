import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from "./StyledApp";

function App() {
  return (
    <AppContainer>
      <Router>
        <Home />
      </Router>
    </AppContainer>
  );
}

export default App;

