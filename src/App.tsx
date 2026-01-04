import { HashRouter } from "react-router-dom";
// Control Routes
import RoutesPages from "./routes/routesPages";
// Go Up Btn
import GoUpBtn from "./common/goUpBtn";

const App = () => {
  return (
    <>
      <HashRouter>
        <RoutesPages />
        <GoUpBtn />
      </HashRouter>
    </>
  );
};

export default App;
